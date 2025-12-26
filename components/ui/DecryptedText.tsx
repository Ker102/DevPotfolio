"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    encryptedClassName?: string;
    parentClassName?: string;
    animateOn?: 'view' | 'hover' | 'both';
    onDecryptComplete?: () => void;
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'view',
    onDecryptComplete,
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
    const containerRef = useRef<HTMLSpanElement>(null);
    const hasStartedRef = useRef<boolean>(false);
    const completedRef = useRef<boolean>(false);

    // Reset state when text changes (for looping through sentences)
    useEffect(() => {
        setDisplayText(text);
        setRevealedIndices(new Set());
        hasStartedRef.current = false;
        completedRef.current = false;
    }, [text]);

    const startDecryption = useCallback(() => {
        if (hasStartedRef.current || completedRef.current) return;
        hasStartedRef.current = true;
        setIsAnimating(true);
    }, []);

    // Main animation effect
    useEffect(() => {
        if (!isAnimating) return;

        let interval: NodeJS.Timeout;
        let currentIteration = 0;

        const availableChars = useOriginalCharsOnly
            ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
            : characters.split('');

        const getNextIndex = (revealedSet: Set<number>): number => {
            const textLength = text.length;
            switch (revealDirection) {
                case 'start':
                    return revealedSet.size;
                case 'end':
                    return textLength - 1 - revealedSet.size;
                case 'center': {
                    const middle = Math.floor(textLength / 2);
                    const offset = Math.floor(revealedSet.size / 2);
                    const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
                    if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                        return nextIndex;
                    }
                    for (let i = 0; i < textLength; i++) {
                        if (!revealedSet.has(i)) return i;
                    }
                    return 0;
                }
                default:
                    return revealedSet.size;
            }
        };

        const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
            if (useOriginalCharsOnly) {
                const positions = originalText.split('').map((char, i) => ({
                    char,
                    isSpace: char === ' ',
                    index: i,
                    isRevealed: currentRevealed.has(i)
                }));

                const nonSpaceChars = positions.filter(p => !p.isSpace && !p.isRevealed).map(p => p.char);

                for (let i = nonSpaceChars.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
                }

                let charIndex = 0;
                return positions
                    .map(p => {
                        if (p.isSpace) return ' ';
                        if (p.isRevealed) return originalText[p.index];
                        return nonSpaceChars[charIndex++];
                    })
                    .join('');
            } else {
                return originalText
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' ';
                        if (currentRevealed.has(i)) return originalText[i];
                        return availableChars[Math.floor(Math.random() * availableChars.length)];
                    })
                    .join('');
            }
        };

        interval = setInterval(() => {
            setRevealedIndices(prevRevealed => {
                if (sequential) {
                    if (prevRevealed.size < text.length) {
                        const nextIndex = getNextIndex(prevRevealed);
                        const newRevealed = new Set(prevRevealed);
                        newRevealed.add(nextIndex);
                        setDisplayText(shuffleText(text, newRevealed));
                        return newRevealed;
                    } else {
                        clearInterval(interval);
                        setIsAnimating(false);
                        completedRef.current = true;
                        onDecryptComplete?.();
                        return prevRevealed;
                    }
                } else {
                    setDisplayText(shuffleText(text, prevRevealed));
                    currentIteration++;
                    if (currentIteration >= maxIterations) {
                        clearInterval(interval);
                        setIsAnimating(false);
                        setDisplayText(text);
                        completedRef.current = true;
                        onDecryptComplete?.();
                    }
                    return prevRevealed;
                }
            });
        }, speed);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAnimating, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly, onDecryptComplete]);

    // Intersection Observer for 'view' animation trigger
    useEffect(() => {
        if (animateOn !== 'view' && animateOn !== 'both') return;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startDecryption();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [animateOn, startDecryption]);

    const hoverProps =
        animateOn === 'hover' || animateOn === 'both'
            ? {
                onMouseEnter: startDecryption,
            }
            : {};

    return (
        <motion.span
            ref={containerRef}
            className={`inline-block whitespace-pre-wrap ${parentClassName}`}
            {...hoverProps}
            {...props}
        >
            <span className="sr-only">{text}</span>

            <span aria-hidden="true">
                {displayText.split('').map((char, index) => {
                    const isRevealedOrDone = revealedIndices.has(index) || !isAnimating;

                    return (
                        <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
                            {char}
                        </span>
                    );
                })}
            </span>
        </motion.span>
    );
}

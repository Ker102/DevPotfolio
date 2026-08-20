'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send, ChevronDown, ChevronUp, Search, Cpu, CheckCircle2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { getLeadSubmissionStatus } from '@/lib/intake-lead';

interface CollapsibleSectionProps {
    title: string;
    icon: React.ReactNode;
    badge: string;
    isLoading?: boolean;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}

function CollapsibleSection({ title, icon, badge, isLoading, children, defaultOpen = false }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                    ${isLoading
                        ? 'bg-white/10 border border-white/20'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
            >
                <span className={`flex-shrink-0 ${isLoading ? 'text-white' : 'text-zinc-400'}`}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
                </span>
                <span className={`flex-1 text-left font-medium ${isLoading ? 'text-white' : 'text-zinc-300'}`}>
                    {title}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isLoading
                    ? 'bg-white/20 text-white'
                    : 'bg-white/10 text-zinc-300'
                    }`}>
                    {badge}
                </span>
                {children && !isLoading && (
                    <span className="text-zinc-500">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && children && !isLoading && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 mt-1 bg-white/5 border border-white/10 rounded-lg text-sm">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

interface DiagnosticChatProps {
    initialMessage?: string;
}

export function DiagnosticChat({ initialMessage = '' }: DiagnosticChatProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState('');
    const [hasSentInitial, setHasSentInitial] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const { messages, sendMessage, status, stop, error, clearError } = useChat({
        transport: new DefaultChatTransport({ api: '/api/chat' }),
    });

    const isLoading = status === 'streaming' || status === 'submitted';
    const leadSubmissionStatus = getLeadSubmissionStatus(messages);

    // Auto-send initial message from query param
    useEffect(() => {
        if (initialMessage && !hasSentInitial && status === 'ready') {
            sendMessage({ text: initialMessage });
            setHasSentInitial(true);
        }
    }, [initialMessage, hasSentInitial, status, sendMessage]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            if (error) {
                clearError();
            }
            void sendMessage({ text: input });
            setInput('');
        }
    };

    // Extract text content from message parts and clean it
    const getMessageText = (message: (typeof messages)[number]): string => {
        if (!message.parts) return '';
        const textParts = message.parts.filter(
            (p): p is { type: 'text'; text: string } => p.type === 'text'
        );
        let text = textParts.map((p) => p.text).join('');

        // Remove XML function call syntax: <function=name {...}></function>
        text = text.replace(/<function=[^>]*>[\s\S]*?<\/function>/g, '');
        // Also remove partial/malformed function tags
        text = text.replace(/<function=[^>]*>/g, '');
        text = text.replace(/<\/function>/g, '');

        return text.trim();
    };

    // Get tool-related parts
    const getToolParts = (message: (typeof messages)[number]) => {
        if (!message.parts) return [];
        return message.parts.filter((p) => p.type.startsWith('tool-'));
    };

    // Get the latest assistant message (the current question)
    const getLatestAssistantMessage = () => {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].role === 'assistant') {
                return messages[i];
            }
        }
        return null;
    };

    // Render collapsible tool sections
    const renderToolPart = (part: { type: string; state?: string; input?: unknown; output?: unknown }) => {
        if (part.type === 'tool-submitLead') {
            return null;
        }

        const toolState = part.state;

        if (toolState === 'input-streaming' || toolState === 'input-available') {
            return (
                <CollapsibleSection
                    title="Reading Kaelux Knowledge"
                    icon={<Search className="w-4 h-4" />}
                    badge="Working..."
                    isLoading={true}
                />
            );
        }

        if (toolState === 'output-available' && part.output) {
            const typedOutput = part.output as {
                models?: Array<{ id: string; downloads: string; task: string; likes: number }>;
                recommendation?: string;
            };

            return (
                <CollapsibleSection
                    title="Knowledge Results"
                    icon={<Cpu className="w-4 h-4" />}
                    badge={`Found ${typedOutput.models?.length || 0}`}
                    defaultOpen={true}
                >
                    {typedOutput.models && typedOutput.models.length > 0 ? (
                        <div className="space-y-2">
                            {typedOutput.models.slice(0, 5).map((model, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                        <span className="font-mono text-xs text-zinc-300">{model.id}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                                        <span>{model.downloads} downloads</span>
                                        <span className="px-2 py-0.5 bg-white/10 rounded text-zinc-400">
                                            {model.task}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {typedOutput.recommendation && (
                                <div className="mt-2 pt-2 border-t border-white/10 text-xs text-zinc-400">
                                    {typedOutput.recommendation}
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-zinc-400">No models found matching the criteria.</p>
                    )}
                </CollapsibleSection>
            );
        }

        return null;
    };

    const latestAssistant = getLatestAssistantMessage();
    const latestQuestion = latestAssistant ? getMessageText(latestAssistant) : '';
    const latestToolParts = latestAssistant ? getToolParts(latestAssistant) : [];
    const showWelcome = messages.length === 0;

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {/* Chat Container */}
            <div
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${isFocused
                    ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20"
                    : "shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]"
                    }`}
                style={{ background: '#09090b' }}
            >
                {/* Glass Sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Chrome Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 px-8 py-5 border-b border-white/5 bg-white/[0.02]">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white text-sm tracking-wide">Kaelux Intake Agent</h3>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="relative flex h-2 w-2">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLoading ? 'bg-amber-400' : 'bg-emerald-400'} opacity-75`}></span>
                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isLoading ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                                </span>
                                <span className="text-xs text-zinc-400 font-medium">
                                    {isLoading ? 'Reading context...' : 'System Online'}
                                </span>
                                {isLoading && stop && (
                                    <button
                                        onClick={stop}
                                        className="text-xs text-zinc-500 hover:text-white transition-colors ml-2"
                                    >
                                        Stop
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Current Question Only */}
                    <div className="p-8">
                        {/* Welcome or Current Question */}
                        <motion.div
                            key={latestQuestion || 'welcome'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-zinc-900/80 border border-white/10 text-zinc-300 rounded-2xl px-6 py-5 backdrop-blur-sm">
                                {showWelcome ? (
                                    <p className="text-[15px] font-medium text-white">
                                        Ask about Kaelux ventures, investor or partner fit, selective build inquiries, or business automations.
                                    </p>
                                ) : (
                                    <>
                                        <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                                            {latestQuestion || 'Processing...'}
                                        </p>

                                        {/* Tool Results */}
                                        {latestToolParts.map((part, i) => (
                                            <div key={i}>
                                                {renderToolPart(part as { type: string; state?: string; input?: unknown; output?: unknown })}
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </motion.div>

                        {leadSubmissionStatus === 'sending' ? (
                            <p className="mt-4 px-6 text-xs text-amber-300">
                                Sending your contact context to Kaelux…
                            </p>
                        ) : null}
                        {leadSubmissionStatus === 'sent' ? (
                            <p className="mt-4 px-6 text-xs text-emerald-300">
                                Contact context sent successfully.
                            </p>
                        ) : null}
                        {leadSubmissionStatus === 'failed' ? (
                            <p className="mt-4 px-6 text-xs text-rose-300">
                                Delivery failed. Please use the{' '}
                                <a href="/#contact" className="underline underline-offset-2 hover:text-rose-200">
                                    contact form
                                </a>.
                            </p>
                        ) : null}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4"
                            >
                                <div className="flex items-center gap-3 px-6 py-3">
                                    <Loader2 className="w-4 h-4 text-zinc-400 animate-spin" />
                                    <span className="text-sm text-zinc-400">Reading Kaelux context...</span>
                                </div>
                            </motion.div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-5 border-t border-white/5 bg-black/20">
                        {error && (
                            <p role="alert" className="mb-3 text-sm text-rose-300">
                                The last request did not complete. Edit your question or submit again to retry.
                            </p>
                        )}
                        <div className="flex items-center gap-3 relative">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder="Ask about Kaelux..."
                                disabled={isLoading}
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-5 pr-14 py-4 
                                   text-white placeholder-zinc-600 focus:outline-none focus:ring-1 
                                   focus:ring-white/20 focus:border-white/20 transition-all font-light text-sm
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <motion.button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-2 p-2.5 rounded-lg bg-white text-black 
                                   hover:bg-gray-100 transition-colors shadow-lg shadow-white/5
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            </motion.button>
                        </div>
                        <p className="mt-3 text-center text-[10px] leading-4 text-zinc-600">
                            Contact details you share may be emailed to Kaelux for follow-up.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

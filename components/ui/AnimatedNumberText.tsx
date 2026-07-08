"use client";

import { Fragment, useMemo } from "react";

import { cn } from "@/lib/utils";

type CountUpNumberProps = {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    useGrouping?: boolean;
    duration?: number;
    className?: string;
};

type AnimatedNumericTextProps = {
    text: string;
    className?: string;
    numberClassName?: string;
    duration?: number;
};

const NUMBER_TOKEN_REGEX = /(\$?)(\d{1,3}(?:,\d{3})*(?:\.\d+)?)(%|\+|\/mo)?/g;

export function CountUpNumber({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
    useGrouping = true,
    duration = 1.1,
    className,
}: CountUpNumberProps) {
    const formatter = useMemo(
        () =>
            new Intl.NumberFormat("en-US", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
                useGrouping,
            }),
        [decimals, useGrouping]
    );

    return (
        <span className={className}>
            {prefix}
            {formatter.format(value)}
            {suffix}
        </span>
    );
}

export function AnimatedNumericText({
    text,
    className,
    numberClassName,
    duration,
}: AnimatedNumericTextProps) {
    const parts = useMemo(() => {
        const segments: Array<string | Omit<CountUpNumberProps, "className">> = [];
        let lastIndex = 0;

        for (const match of text.matchAll(NUMBER_TOKEN_REGEX)) {
            const [fullMatch, prefix = "", rawValue = "", suffix = ""] = match;
            const matchIndex = match.index ?? 0;

            if (matchIndex > lastIndex) {
                segments.push(text.slice(lastIndex, matchIndex));
            }

            const decimals = rawValue.includes(".") ? rawValue.split(".")[1].length : 0;

            segments.push({
                value: Number(rawValue.replaceAll(",", "")),
                prefix,
                suffix,
                decimals,
                useGrouping: rawValue.includes(","),
                duration,
            });

            lastIndex = matchIndex + fullMatch.length;
        }

        if (lastIndex < text.length) {
            segments.push(text.slice(lastIndex));
        }

        return segments;
    }, [duration, text]);

    return (
        <span className={className}>
            {parts.map((part, index) =>
                typeof part === "string" ? (
                    <Fragment key={`${part}-${index}`}>{part}</Fragment>
                ) : (
                    <CountUpNumber
                        key={`${part.prefix}${part.value}${part.suffix}-${index}`}
                        {...part}
                        className={cn("tabular-nums", numberClassName)}
                    />
                )
            )}
        </span>
    );
}

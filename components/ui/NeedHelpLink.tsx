"use client";

import Link from "next/link";

type NeedHelpLinkProps = {
    label?: string;
    href?: string;
    className?: string;
};

export function NeedHelpLink({
    label = "Need Help?",
    href = "/#diagnoser",
    className = "",
}: NeedHelpLinkProps) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center text-sm font-medium text-gray-500 underline underline-offset-4 decoration-white/30 transition-colors duration-200 hover:text-white hover:decoration-white ${className}`}
        >
            {label}
        </Link>
    );
}

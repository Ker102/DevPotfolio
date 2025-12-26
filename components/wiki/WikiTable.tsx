"use client";

import { motion } from "framer-motion";

interface WikiTableProps {
    headers: string[];
    rows: string[][];
    brandColumnIndex?: number; // Which column contains brand mentions (for highlighting)
    caption?: string;
}

export default function WikiTable({ headers, rows, brandColumnIndex, caption }: WikiTableProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="my-8 overflow-x-auto"
        >
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden rounded-xl border border-slate-700/50 shadow-xl shadow-black/20">
                    <table className="min-w-full divide-y divide-slate-700/50">
                        <thead className="bg-gradient-to-r from-slate-800 via-slate-800/95 to-slate-800">
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        scope="col"
                                        className={`px-6 py-4 text-left text-sm font-semibold tracking-wide uppercase ${brandColumnIndex === index
                                                ? "text-cyan-400 bg-cyan-950/20"
                                                : "text-gray-300"
                                            }`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/30 bg-slate-900/50">
                            {rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-slate-800/50 transition-colors duration-150"
                                >
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className={`px-6 py-4 text-sm ${cellIndex === 0
                                                    ? "font-medium text-white"
                                                    : "text-gray-300"
                                                } ${brandColumnIndex === cellIndex
                                                    ? "bg-cyan-950/10"
                                                    : ""
                                                }`}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {caption && (
                    <p className="mt-3 text-sm text-gray-500 text-center italic">
                        {caption}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

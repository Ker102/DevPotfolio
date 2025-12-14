"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaFileContract, FaHeadset, FaFileInvoiceDollar } from "react-icons/fa";

const cases = [
    {
        icon: <FaFileContract className="w-10 h-10 text-indigo-400" />,
        title: "Legal Automation",
        snippet: "Automated Contract Review & Risk Scoring.",
        detail: "Ingest thousands of PDFs, extract key clauses, and flag risks against your playbook in seconds instead of days.",
        color: "indigo"
    },
    {
        icon: <FaHeadset className="w-10 h-10 text-purple-400" />,
        title: "Customer Support",
        snippet: "L2 Support Agent capable of database queries.",
        detail: "Go beyond FAQ bots. Our agents can query your SQL database to check order status and process refunds autonomously.",
        color: "purple"
    },
    {
        icon: <FaFileInvoiceDollar className="w-10 h-10 text-pink-400" />,
        title: "Operations",
        snippet: "Automatic Invoice Processing & ERP Entry.",
        detail: "Extract line items from messy invoices and insert them directly into SAP/Oracle/Xero with 100% data validation.",
        color: "pink"
    }
];

export default function UseCaseCarousel() {
    return (
        <section className="py-24 px-6 bg-black overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Real World Applications</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just imagine automation. See how we apply it to specific business functions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative w-full md:w-[350px] p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-white font-medium mb-4">{item.snippet}</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {item.detail}
                            </p>

                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${item.color}-500/50 group-hover:h-full group-hover:bg-${item.color}-500/5 transition-all duration-500 -z-10`} />
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest text-white/50">
                                Use Case
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

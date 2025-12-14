"use client";

import { motion } from "framer-motion";
import { FaFileContract, FaHeadset, FaFileInvoiceDollar } from "react-icons/fa";

const cases = [
    {
        icon: <FaFileContract className="w-10 h-10" />,
        title: "Legal Automation",
        snippet: "Automated Contract Review & Risk Scoring.",
        detail: "Ingest thousands of PDFs, extract key clauses, and flag risks against your playbook in seconds instead of days."
    },
    {
        icon: <FaHeadset className="w-10 h-10" />,
        title: "Customer Support",
        snippet: "L2 Support Agent capable of database queries.",
        detail: "Go beyond FAQ bots. Our agents can query your SQL database to check order status and process refunds autonomously."
    },
    {
        icon: <FaFileInvoiceDollar className="w-10 h-10" />,
        title: "Operations",
        snippet: "Automatic Invoice Processing & ERP Entry.",
        detail: "Extract line items from messy invoices and insert them directly into SAP/Oracle/Xero with 100% data validation."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 18
        }
    }
};

export default function UseCaseCarousel() {
    return (
        <section className="py-28 px-6 bg-black overflow-hidden relative">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Use Cases
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Real World Applications
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Don't just imagine automation. See how we apply it to specific business functions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative p-8 bg-zinc-950/80 border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Icon with chrome/silver gradient */}
                            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 text-white w-fit border border-white/10 transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 font-medium mb-4">{item.snippet}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.detail}
                            </p>

                            {/* Bottom accent line - silver */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

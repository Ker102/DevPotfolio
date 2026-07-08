"use client";

import { motion } from "framer-motion";
import { HiOutlineChatBubbleLeftRight, HiOutlineCog8Tooth, HiOutlineRocketLaunch } from "react-icons/hi2";

const steps = [
    {
        number: "01",
        Icon: HiOutlineChatBubbleLeftRight,
        title: "Map the workflow",
        description:
            "We identify the repeated business work, the inputs, the handoffs, the exceptions, and what should stay manual.",
    },
    {
        number: "02",
        Icon: HiOutlineCog8Tooth,
        title: "Design the automation",
        description:
            "We choose the simplest durable shape: internal tool, integration, scheduled workflow, agentic routine, or documented operating system.",
    },
    {
        number: "03",
        Icon: HiOutlineRocketLaunch,
        title: "Test real routines",
        description:
            "We validate against real cases, document how the workflow should run, and decide whether maintenance is worth scoping.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.15,
        },
    },
};

const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 18,
        },
    },
};

export default function OpenClawHowItWorks() {
    return (
        <section className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-500 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Three steps to a{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            useful automation
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        The goal is an automation that survives first contact with your real work.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={step.number} variants={stepVariants} className="group relative text-center">
                            <div className="text-7xl font-black tracking-tighter select-none mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-400/60 group-hover:from-gray-400 group-hover:to-gray-500/60 transition-all duration-500">
                                {step.number}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1, y: -3 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="mx-auto mb-5 p-4 rounded-2xl bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 w-fit shadow-lg shadow-black/10"
                            >
                                <step.Icon className="w-7 h-7 text-white" />
                            </motion.div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                                {step.description}
                            </p>

                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-[4.5rem] right-0 translate-x-1/2 w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-0" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

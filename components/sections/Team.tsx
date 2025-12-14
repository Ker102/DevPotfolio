"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const members = [
    { name: "Ker102", role: "Founder", color: "from-cyan-400 to-blue-500", image: null },
    { name: "Josh", role: "CTO", color: "from-purple-400 to-pink-500", image: "/team/josh.jpg" },
    { name: "Randolph", role: "Marketing & Media", color: "from-amber-400 to-orange-500", image: "/team/randolph.jpg" },
    { name: "Ethan", role: "DevOps Engineer", color: "from-emerald-400 to-green-500", image: "/team/ethan.jpg" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
};

export default function Team() {
    return (
        <section id="team" className="relative py-24 px-6 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-lg mb-4">
                        Our Team
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The minds behind the intelligent infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={item}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {/* Avatar Placeholder with Gradient */}
                                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.color} p-[2px]`}>
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-white">
                                                {member.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { NeedHelpLink } from "@/components/ui/NeedHelpLink";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";
import { fadeInUp, premiumEase, staggerContainer, textStagger, textReveal } from "@/lib/animations";

const services = [
    // The artwork filenames are offset. Keep the images where they are and map each
    // card to the service page that matches the visible image content.
    {
        title: "Continuous Delivery",
        image: "/services/uiux.jpg",
        slug: "continuous-delivery",
    },
    {
        title: "Cloud Infrastructure",
        image: "/services/fullstack.jpg",
        slug: "cloud-infrastructure",
    },
    {
        title: "Full-Stack Development",
        image: "/services/cloud.jpg",
        slug: "full-stack-development",
    },
    {
        title: "UI/UX Design",
        image: "/services/cicd.jpg",
        slug: "ui-ux-design",
    },
] as const;

function ServiceCard({ service }: { service: (typeof services)[number] }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <Link href={`/services/${service.slug}`} aria-label={service.title}>
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.28 }}
                whileHover={
                    prefersReducedMotion
                        ? undefined
                        : {
                            y: -8,
                            scale: 1.02,
                            boxShadow: "0 28px 60px rgba(15, 23, 42, 0.16)",
                        }
                }
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.45, ease: premiumEase }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gray-100 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <motion.div
                        whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                        transition={{ duration: 0.6, ease: premiumEase }}
                        className="absolute inset-0 transform-gpu will-change-transform [backface-visibility:hidden]"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.03]" />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 ring-inset transition-colors duration-300 group-hover:ring-black/10" />
                </div>
            </motion.div>
        </Link>
    );
}

export default function PlatformServices() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-white px-6 py-20">
            <div className="relative z-10 container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.55, ease: premiumEase }}
                    className="mb-16 flex items-center justify-center gap-6"
                >
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                    <span className="text-xl font-medium uppercase tracking-[0.2em] text-gray-500 md:text-2xl">
                        Additionally
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </motion.div>

                <motion.div
                    variants={textStagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.35 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-6 flex flex-col gap-2 text-4xl font-medium tracking-tighter md:text-5xl">
                        <motion.span
                            variants={textReveal}
                            className="inline-block bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent"
                        >
                            Complete Platform Solutions
                        </motion.span>
                    </h2>
                    <motion.p
                        variants={textReveal}
                        className="mx-auto inline-block max-w-3xl text-lg leading-relaxed text-gray-600"
                    >
                        Beyond AI engineering, we design, build, and host your entire
                        application, from{" "}
                        <ScrollUnderline underlineClassName="via-gray-900/75">
                            pixel-perfect interfaces
                        </ScrollUnderline>{" "}
                        to{" "}
                        <ScrollUnderline underlineClassName="via-gray-900/75">
                            enterprise-grade cloud infrastructure
                        </ScrollUnderline>
                        . Everything your business needs, under one roof.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.18, margin: "-6%" }}
                    className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2"
                >
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.55, ease: premiumEase }}
                    className="flex flex-col items-center gap-5"
                >
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-b from-gray-900 to-black px-10 py-5 text-lg font-bold tracking-wide text-white shadow-xl shadow-gray-400/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-300/40"
                        >
                            <div className="absolute inset-0 w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />

                            <span className="relative z-10">Get Started</span>
                            <FaArrowRight className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </Link>

                    <NeedHelpLink label="Not sure what to do?" className="text-gray-500 hover:text-gray-900 hover:decoration-gray-900" />
                </motion.div>
            </div>
        </section>
    );
}

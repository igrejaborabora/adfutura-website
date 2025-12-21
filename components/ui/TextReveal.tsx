'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const words = children.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

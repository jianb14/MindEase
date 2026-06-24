import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.7,
    y = 40,
    className = "",
}) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                delay,
                duration,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
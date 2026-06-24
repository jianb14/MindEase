import { motion } from "framer-motion"

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    y = 30,
    className = "",
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay, duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
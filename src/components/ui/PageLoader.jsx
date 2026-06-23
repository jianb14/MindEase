import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/assets/mindease-logo.png";

export default function PageLoader({ onComplete }) {
    const [phase, setPhase] = useState("logo"); // "logo" | "bar" | "done"
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // phase 1 — logo appears, then start bar
        const t1 = setTimeout(() => setPhase("bar"), 800);
        return () => clearTimeout(t1);
    }, []);

    useEffect(() => {
        if (phase !== "bar") return;

        // animate progress bar
        let current = 0;
        const interval = setInterval(() => {
        current += Math.random() * 18 + 8;
        if (current >= 100) {
            current = 100;
            setProgress(100);
            clearInterval(interval);
            setTimeout(() => setPhase("done"), 400);
            setTimeout(() => onComplete?.(), 900);
        } else {
            setProgress(current);
        }
        }, 120);

        return () => clearInterval(interval);
    }, [phase, onComplete]);

    return (
        <AnimatePresence>
        {phase !== "done" && (
            <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center gap-8"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            >
            {/* logo */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4"
            >
                <img src={logo} alt="MindEase" className="h-12 dark:invert" />
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-text-secondary text-sm tracking-widest uppercase font-medium"
                >
                Your wellness journey awaits
                </motion.p>
            </motion.div>

            {/* progress bar */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: phase === "bar" ? 1 : 0, width: "200px" }}
                transition={{ duration: 0.4 }}
                className="relative h-1 bg-blue-ghost rounded-full overflow-hidden"
                style={{ width: "200px" }}
            >
                <motion.div
                className="absolute inset-y-0 left-0 bg-btn-primary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                />
            </motion.div>

            {/* percentage */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "bar" ? 1 : 0 }}
                className="text-xs text-text-secondary tabular-nums"
            >
                {Math.round(progress)}%
            </motion.p>
            </motion.div>
        )}
        </AnimatePresence>
    );
}
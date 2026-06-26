import { useTheme } from "../../context/useTheme.js";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 text-black/70 dark:text-white/80 rounded-full hover:bg-blue-50 dark:hover:bg-white/10 transition cursor-pointer"
            aria-label="Toggle dark mode"
            >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
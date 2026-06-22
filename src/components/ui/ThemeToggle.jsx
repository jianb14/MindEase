import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-white/10 transition cursor-pointer"
        aria-label="Toggle dark mode"
        >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
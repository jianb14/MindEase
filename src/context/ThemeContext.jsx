import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const toggleTheme = () => {
        // add transitioning class muna
        document.documentElement.classList.add("transitioning");
        
        setTheme((t) => {
            const next = t === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark", next === "dark");
            localStorage.setItem("theme", next);
            return next;
        });

        // remove after transition
        setTimeout(() => {
            document.documentElement.classList.remove("transitioning");
        }, 600);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
import { Link } from "react-router-dom";

export default function Button({ children, onClick, to, label, variant = "primary", icon: Icon, className = "" }) {
    const base = "flex items-center justify-center gap-2 px-5 pt-3 pb-3.25 text-md rounded-lg font-medium transition duration-200 cursor-pointer";

    const variants = {
        primary: "bg-btn-primary text-white hover:bg-btn-primary-hover shadow-[0_6px_0_#0f74ba]",
        secondary: "bg-white hover:bg-gray-50 shadow-[0_6px_0_#d1d5db] text-neutral-500 border",
        accent: "bg-btn-secondary shadow-[0_6px_0_#cfe6fb] text-neutral-600 hover:bg-btn-secondary-hover",
        submit: "bg-black text-white py-3 font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 justify-center flex-row-reverse"
    };

    const content = (
        <>
            {label}
            {Icon && <Icon size={18} />}
            {children}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
            {content}
        </button>
    );
}


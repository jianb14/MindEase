import { Link } from "react-router-dom";

export default function Button({ children, onClick, to, label, variant = "primary", icon: Icon, className = "" }) {
    const base = "flex items-center gap-2 px-5 pt-3 pb-3.25 text-md rounded-lg font-medium transition duration-200 cursor-pointer";

    const variants = {
        primary: "bg-btn-primary text-white hover:bg-blue-600",
        secondary: "bg-gray-100 hover:bg-gray-200",
        accent: "bg-white text-black hover:bg-gray-200 border border-gray-300",
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


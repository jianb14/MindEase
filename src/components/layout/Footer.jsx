import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import logoLight from "/src/assets/mindease-logo.png";
import logoDark from "/src/assets/dark-mindease-logo.png";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

const socials = [
    { icon: FaFacebookF },
    { icon: FaInstagram },
    { icon: FaXTwitter },
    { icon: FaYoutube },
];

const companyLinks = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Therapists", to: "/therapists" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
];

const supportLinks = [
    { label: "Resources", to: "/resources" },
    { label: "Help Center", to: "/contact" },
    { label: "Privacy Policy" },
    { label: "Terms & Conditions" },
];

const contactInfo = [
    { icon: Mail, text: "support@mindease.com" },
    { icon: Phone, text: "+63 912 345 6789" },
    { icon: MapPin, text: "Makati City, Philippines" },
];

const trustBadges = [
    {text: "HIPAA Compliant" },
    {text: "APA Accredited" },
    {text: "256-bit SSL" },
];

export default function Footer() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <footer className="w-full bg-bg-primary">
        {/* Main Footer */}
        <div className="relative overflow-hidden rounded-t-[40px] border-t dark:border-white/10 border-black/10 bg-bg-card px-8 md:px-14 lg:px-18 pt-16 pb-12">
            
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">
            
            {/* Brand */}
            <div>
                <img
                src={isDark ? logoDark : logoLight}
                alt="MindEase"
                className="h-10 w-fit mb-5"
                />

                <div className="ml-1.25">
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        Making professional mental health support accessible,
                        affordable, and stigma-free for everyone.
                    </p>

                    <p className="text-text-primary/90 font-semibold mb-4">
                    Follow Us
                    </p>

                    <div className="flex gap-3">
                    {socials.map((social, index) => {
                        const Icon = social.icon;

                        return (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-lg border border-black/15 dark:border-white/15 flex items-center justify-center text-text-secondary hover:text-blue hover:border-blue/30 dark:hover:border-blue/30 hover:bg-blue-accent transition-all duration-300"
                        >
                            <Icon size={16} />
                        </a>
                        );
                    })}
                    </div>
                </div>
            </div>

            {/* Company */}
            <div>
                <h3 className="text-text-primary/80 font-semibold mb-5">
                Company
                </h3>

                <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                    <li key={index}>
                    <Link
                        to={link.to}
                        className="text-sm text-text-secondary hover:text-black/80 dark:hover:text-white/80 transition-all"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Support */}
            <div>
                <h3 className="text-text-primary/80 font-semibold mb-5">
                Support
                </h3>

                <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                    <li key={index}>
                    <Link
                        to={link.to}
                        className="text-sm text-text-secondary hover:text-black/80 dark:hover:text-white/80 transition-colors"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Right Side - Contact Us */}
            <div>
                <h3 className="text-text-primary/80 font-semibold mb-5">
                Contact Us
                </h3>

                <div className="space-y-4">
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                    <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                        <Icon size={18} className=" text-text-primary/90 shrink-0" />
                        <span>{item.text}</span>
                    </div>
                    );
                })}
                </div>
            </div>
            </div>

            {/* Watermark */}
            <div className="hidden md:flex absolute inset-x-0 bottom-0 pointer-events-none select-none">
            <h2 className="text-[120px] lg:text-[180px] text-serif font-black text-text-secondary/8 leading-none">
                MINDEASE
            </h2>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-bg-card px-8 md:px-16 lg:px-18">
            <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4 border-t border-dashed border-black/20 dark:border-white/20">
            
            <p className="text-text-secondary/60 text-xs text-center md:text-left">
                © 2026 MindEase. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
                {trustBadges.map((badge, index) => {

                return (
                    <div
                    key={index}
                    className="rounded-full text-blue py-1 px-3 border bg-blue-ghost border-blue/10 text-xs"
                    >
                    <span>{badge.text}</span>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
        </footer>
    );
}
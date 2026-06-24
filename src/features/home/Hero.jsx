import { CircleCheckBig, Play, Star, Users, Stethoscope, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";

const stats = [
    { icon: Star,           value: "4.9",     label: "Satisfaction Rating",  pos: "top-18 left-6 lg:left-20",      anim: "floatA" },
    { icon: Users,          value: "25,000+", label: "Active Members",       pos: "top-22 right-6 lg:right-20",    anim: "floatB" },
    { icon: Stethoscope,    value: "500+",    label: "Licensed Therapists",  pos: "bottom-10 left-6 lg:left-24",   anim: "floatC" },
    { icon: HeartHandshake, value: "24/7",    label: "Wellness Support",     pos: "bottom-14 right-6 lg:right-26", anim: "floatD" },
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-bg-primary min-h-100dvh w-full flex items-center justify-center px-4 sm:px-10 md:px-20 lg:px-60 py-20">

            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <motion.div
                        key={i}
                        className={`absolute ${stat.pos} hidden lg:flex items-center gap-3 bg-bg-card rounded-2xl border border-color-outline px-4 py-3 z-10 shadow-xs hover:shadow-md hover:scale-110 transition duration-300`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                        style={{
                            animation: `${stat.anim} 3s ease-in-out infinite`,
                            animationDelay: `${i * 0.4}s`,
                        }}
                    >
                        <div className="w-10 h-10 rounded-lg flex items-center text-blue bg-blue-ghost justify-center shrink-0">
                            <Icon size={20} className="text-blue" />
                        </div>
                        <div>
                            <p className="font-bold text-sm text-text-primary leading-tight">{stat.value}</p>
                            <p className="text-xs text-text-secondary">{stat.label}</p>
                        </div>
                    </motion.div>
                );
            })}

            {/* center content */}
            <div className="relative z-10">

                <FadeIn delay={0}>
                    <div className="flex justify-center mb-5">
                        <div className="flex gap-1.25 py-2 px-3 rounded-2xl bg-blue-ghost">
                            <CircleCheckBig size={15} className="text-text-accent" />
                            <p className="text-xs text-text-accent font-bold">Trusted by 50,000+ Members</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold text-center mb-6">
                        Your Mental Wellness <span className="text-btn-primary">Journey Starts Here</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className="lg:mx-12 text-text-secondary text-md sm:text-lg text-center mb-10 leading-relaxed">
                        Access professional therapy, guided mindfulness programs, and personalized mental health support designed to help you thrive every day.
                    </p>
                </FadeIn>

                <FadeIn delay={0.40}>
                    <div className="flex justify-center px-10 md:px-0 gap-2.5 flex-col sm:flex-row">
                        <Button label="Start your Journey" to="/therapists" className="flex justify-center mb-2 sm:mb-0" />
                        <div className="flex items-center justify-center gap-2 px-4 pt-3 pb-3.25 bg-btn-secondary shadow-[0_6px_0_#cfe6fb] dark:shadow-[0_6px_0_#182c50] rounded-lg hover:bg-btn-secondary-hover cursor-pointer">
                            <div className="bg-text-accent p-1.5 rounded-full">
                                <Play stroke="white" fill="white" size={12} />
                            </div>
                            <a className="text-neutral-600 dark:text-white/80 font-medium text-md">Watch How it Works</a>
                        </div>
                    </div>
                </FadeIn>

            </div>

            <style>{`
                @keyframes floatA {
                    0%, 100% { transform: translateY(0px) rotate(-4deg); }
                    50%       { transform: translateY(-8px) rotate(-4deg); }
                }
                @keyframes floatB {
                    0%, 100% { transform: translateY(0px) rotate(2deg); }
                    50%       { transform: translateY(-10px) rotate(4deg); }
                }
                @keyframes floatC {
                    0%, 100% { transform: translateY(0px) rotate(1.5deg); }
                    50%       { transform: translateY(-6px) rotate(3deg); }
                }
                @keyframes floatD {
                    0%, 100% { transform: translateY(0px) rotate(-1deg); }
                    50%       { transform: translateY(-9px) rotate(-3deg); }
                }
            `}</style>
        </section>
    );
}
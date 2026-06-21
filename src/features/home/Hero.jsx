import { CircleCheckBig, Play, Star, Users, Stethoscope, HeartHandshake } from "lucide-react";
import Button from "../../components/ui/Button.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";

const stats = [
    { icon: Star,           color: "#138fe7", bg: "#EBF3FF", value: "4.9",    label: "Satisfaction Rating",  pos: "top-18 left-6 lg:left-20",    anim: "floatA" },
    { icon: Users,          color: "#138fe7", bg: "#EBF3FF", value: "50,000+", label: "Active Members",        pos: "top-22 right-6 lg:right-20",  anim: "floatB" },
    { icon: Stethoscope,    color: "#138fe7", bg: "#EBF3FF", value: "500+",    label: "Licensed Therapists",  pos: "bottom-32 left-6 lg:left-24", anim: "floatC" },
    { icon: HeartHandshake, color: "#138fe7", bg: "#EBF3FF", value: "24/7",    label: "Wellness Support",     pos: "bottom-32 right-6 lg:right-26", anim: "floatD" },
];

export default function Hero() {
    return (
        <FadeIn>
            <section className="relative overflow-hidden bg-bg-primary h-[84vh] sm:h-screen w-full flex items-center sm:items-start justify-center px-4 sm:px-10 md:px-20 lg:px-60 sm:pt-20">

                {/* floating stat cards */}
                {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <div
                    key={i}
                    className={`absolute ${stat.pos} hidden lg:flex items-center gap-3 bg-white rounded-2xl border border-gray-100 px-4 py-3 z-10 shadow-xs hover:shadow-md hover:scale-110 transition duration-300`}
                    style={{
                        animation: `${stat.anim} 3s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`,
                    }}
                    >
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: stat.bg }}
                    >
                        <Icon size={20} style={{ color: stat.color }} />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-text-primary leading-tight">{stat.value}</p>
                        <p className="text-xs text-text-secondary">{stat.label}</p>
                    </div>
                    </div>
                );
                })}

                {/* center content */}
                <div className="relative z-10">
                <div className="flex justify-center mb-5">
                    <div className="flex gap-1.25 py-2 px-3 rounded-2xl bg-blue-50">
                    <CircleCheckBig size={15} className="text-text-accent" />
                    <p className="text-xs text-text-accent font-bold">Trusted by 50,000+ Members</p>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold text-center mb-6">
                    Your Mental Wellness <span className="text-btn-primary">Journey Starts Here</span>
                </h1>
                <p className="lg:mx-12 text-text-secondary text-md sm:text-lg text-center mb-10 leading-relaxed">
                    Access professional therapy, guided mindfulness programs, and personalized mental health support designed to help you thrive every day.
                </p>

                <div className="flex justify-center px-10 gap-2.5 flex-col sm:flex-row">
                    <Button label="Start your Journey" />
                    <div className="flex items-center justify-center gap-2 pb-3 pt-2.75 px-4 border bg-bg-primary border-neutral-200 rounded-lg hover:bg-blue-50 cursor-pointer">
                    <div className="bg-text-accent p-1.5 rounded-full">
                        <Play stroke="white" fill="white" size={12} />
                    </div>
                    <a className="text-neutral-600 font-semibold text-md">Watch How it Works</a>
                    </div>
                </div>
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
        </FadeIn>
    );
}
import CountUp from "../../components/ui/CountUp.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";

const stats = [
    { value: 25000, suffix: "+", label: "Happy Members",       sublabel: "Worldwide community",     color: "#138fe7" },
    { value: 100,  suffix: "+", label: "Licensed Experts",    sublabel: "Certified professionals", color: "#138fe7" },
    { value: 95,   suffix: "%", label: "Positive Outcomes",   sublabel: "Proven effectiveness",    color: "#138fe7" },
    { value: 24,   suffix: "/7",label: "Support Availability",sublabel: "Always here for you",     color: "#138fe7" },
];

export default function WellnessImpact() {
    return (
        <section className="relative w-full bg-bg-primary flex justify-center py-30 sm:py-40 px-4 lg:px-10">
        <div className="w-full max-w-5xl">
            <FadeIn>
            <div className="text-center mb-16">
                <p className="font-medium text-text-accent text-sm uppercase tracking-widest mb-4">
                Wellness Impact
                </p>
                <h2 className="font-black text-4xl text-text-primary">
                The Numbers Speak for Themselves
                </h2>
            </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
                <FadeIn key={i} delay={i * 0.15} className="z-3">
                <div className="bg-bg-card backdrop-blur-sm border border-color-outline rounded-2xl p-8 text-center shadow-sm transition duration-300">
                    <p className="text-4xl font-black mb-2" style={{ color: stat.color }}>
                    <CountUp to={stat.value} duration={1} delay={i * 0.2} separator="," />
                    {stat.suffix}
                    </p>
                    <p className="font-bold text-text-primary mb-1">{stat.label}</p>
                    <p className="text-sm text-text-secondary">{stat.sublabel}</p>
                </div>
                </FadeIn>
            ))}
            </div>
        </div>
        </section>
    );
}
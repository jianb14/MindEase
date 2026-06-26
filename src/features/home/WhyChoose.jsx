import { UserCheck, Sparkles, ClipboardList, Lock, ChartColumn, Heart } from "lucide-react"
import FadeIn from "../../components/ui/FadeIn.jsx";

const cards = [
    { icon: <UserCheck size={24}/>, title: "Personalized Therapy", desc: "Connect with licensed professionals matched to your specific needs, goals, and communication style.", tape: "rotate-[-3deg] left-1/2 -translate-x-1/2", card: "rotate-[-1deg]" },
    { icon: <Sparkles size={24}/>, title: "Guided Mindfulness", desc: "Daily exercises, breathing techniques, and meditations crafted for emotional balance and clarity.", tape: "rotate-[2deg] left-1/2 -translate-x-1/2", card: "rotate-[0.5deg]" },
    { icon: <ClipboardList size={24}/>, title: "Self-Care Programs", desc: "Structured wellness plans tailored to your lifestyle with measurable milestones and checkpoints.", tape: "rotate-[-1.5deg] left-1/2 -translate-x-1/2", card: "rotate-[-0.5deg]" },
    { icon: <Lock size={24}/>, title: "Secure & Private", desc: "Industry-standard encryption and HIPAA-compliant infrastructure keep every session confidential.", tape: "rotate-[3deg] left-1/2 -translate-x-1/2", card: "rotate-[1deg]" },
    { icon: <ChartColumn size={24}/>, title: "Progress Tracking", desc: "Visualize your wellness journey with insightful metrics, mood trends, and milestone celebrations.", tape: "rotate-[-2deg] left-1/2 -translate-x-1/2", card: "rotate-[-0.8deg]" },
    { icon: <Heart size={24}/>, title: "Community Support", desc: "Join moderated peer groups and supportive communities that understand what you're going through.", tape: "rotate-[1.5deg] left-1/2 -translate-x-1/2", card: "rotate-[0.3deg]" },
]

export default function WhyChoose() {
    return (
        <section className="relative bg-transparent w-full flex justify-center py-40 px-4 lg:px-10">
            <div>
                <div className="mx-0 lg:mx-50 mb-15">
                    <FadeIn delay={0}>
                        <p className="font-medium text-center text-text-accent text-sm uppercase tracking-widest mb-4">Why Choose MindEase</p>
                    </FadeIn>
                    <FadeIn delay={0.12}>
                        <h1 className="font-black text-text-primary text-4xl text-center mb-4">Everything You Need to <span className="text-text-accent">Thrive</span></h1>
                    </FadeIn>
                    <FadeIn delay={0.20}>
                        <p className="text-md sm:text-lg text-text-secondary text-center mx-0 sm:mx-10 md:mx-15 lg:mx-20">A complete wellness ecosystem designed around you, from therapy to mindfulness, community to progress tracking.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-6 sm:mx-6 md:mx-10 mx-0">
                    {cards.map((card, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="z-2 relative pt-4">
                            <div className={`relative bg-bg-card border border-color-outline p-7 group rounded-2xl shadow hover:-translate-y-1.75 hover:shadow-lg transition-all duration-300 h-full ${card.card} hover:rotate-0 will-change-transform`}>
                            {/* tape nasa loob ng card */}
                            <div className={`absolute -top-3.5 ${card.tape} z-3 w-20 h-7 bg-blue-accent rounded-sm shadow-sm`}></div>
                            <div className={`h-12 w-12 flex justify-center bg-blue-ghost text-text-accent items-center ${card.bg} rounded-lg mb-5 transition-all group-hover:bg-blue-accent duration-300 group-hover:scale-115`}>
                                {card.icon}
                            </div>
                            <h4 className="font-bold mb-2 text-text-primary">{card.title}</h4>
                            <p className="text-text-secondary">{card.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    )
}
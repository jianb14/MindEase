import { UserCheck, Sparkles, ClipboardList, Lock, ChartColumn, Heart } from "lucide-react"
import FadeIn from "../../components/ui/FadeIn.jsx";

const cards = [
    { bg: "bg-blue-ghost", icon: <UserCheck size={24} className="text-text-accent" />, title: "Personalized Therapy", desc: "Connect with licensed professionals matched to your specific needs, goals, and communication style." },
    { bg: "bg-green-ghost", icon: <Sparkles size={24} className="text-green" />, title: "Guided Mindfulness", desc: "Daily exercises, breathing techniques, and meditations crafted for emotional balance and clarity." },
    { bg: "bg-orange-ghost", icon: <ClipboardList size={24} className="text-orange" />, title: "Self-Care Programs", desc: "Structured wellness plans tailored to your lifestyle with measurable milestones and checkpoints." },
    { bg: "bg-rose-ghost", icon: <Lock size={24} className="text-rose" />, title: "Secure & Private", desc: "Industry-standard encryption and HIPAA-compliant infrastructure keep every session confidential." },
    { bg: "bg-violet-ghost", icon: <ChartColumn size={24} className="text-violet" />, title: "Progress Tracking", desc: "Visualize your wellness journey with insightful metrics, mood trends, and milestone celebrations." },
    { bg: "bg-red-ghost", icon: <Heart size={24} className="text-red" />, title: "Community Support", desc: "Join moderated peer groups and supportive communities that understand what you're going through." },
]

export default function WhyChoose() {
    return (
        <section className="relative bg-bg-primary w-full flex justify-center py-40 px-4 lg:px-10">
            <div>
                <FadeIn className="mx-0 lg:mx-50 mb-15">
                    <p className="font-medium text-text-accent text-center mb-4">Why Choose MindEase</p>
                    <h1 className="font-black text-4xl text-center mb-4">Everything You Need to <span className="text-text-accent">Thrive</span></h1>
                    <p className="text-md sm:text-lg text-text-secondary text-center mx-0 sm:mx-10 md:mx-15 lg:mx-20">A complete wellness ecosystem designed around you, from therapy to mindfulness, community to progress tracking.</p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-6 sm:mx-6 md:mx-10 mx-0">
                    {cards.map((card, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="z-2">
                            <div className="bg-white p-7 group rounded-2xl shadow hover:-translate-y-1.75 hover:shadow-lg transition duration-300 h-full">
                                <div className={`h-12 w-12 flex justify-center items-center ${card.bg} rounded-lg mb-5 transition-transform duration-300 group-hover:scale-115`}>
                                    {card.icon}
                                </div>
                                <h4 className="font-bold mb-2">{card.title}</h4>
                                <p className="text-text-secondary">{card.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
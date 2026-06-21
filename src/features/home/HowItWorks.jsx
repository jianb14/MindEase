import { UserPlus, ClipboardCheck, Handshake, TrendingUp } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn.jsx";

const steps = [
  {
    icon: UserPlus,
    color: "#3B82F6",
    bg: "#EAF4FD",
    badge: "Step 1",
    title: "Create Account",
    desc: "Sign up in minutes. No lengthy forms, no commitments. Just a simple, secure profile to get you started.",
  },
  {
    icon: ClipboardCheck,
    color: "#3B82F6",
    bg: "#EAF4FD",
    badge: "Step 2",
    title: "Complete Wellness Assessment",
    desc: "Answer a few thoughtful questions about your mental health goals and current challenges.",
  },
  {
    icon: Handshake,
    color: "#3B82F6",
    bg: "#EAF4FD",
    badge: "Step 3",
    title: "Get Matched With a Therapist",
    desc: "Our smart matching algorithm connects you with a licensed therapist best suited to your unique needs.",
  },
  {
    icon: TrendingUp,
    color: "#3B82F6",
    bg: "#EAF4FD",
    badge: "Step 4",
    title: "Start Your Wellness Journey",
    desc: "Begin sessions, track progress, and access wellness resources all in one calming, private space.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-bg-primary w-full flex justify-center py-30 sm:py-40 px-4 lg:px-10">
      <div className="w-full max-w-6xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-medium text-text-accent text-sm uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="font-black text-4xl">
              Start Feeling Better in{" "}
              <span className="text-text-accent">4 Simple Steps</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] z-0 border-t-2 border-dashed border-gray-300" />       

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.badge} delay={index * 0.15} className="relaative z-10">
                <div className="gap-2 flex flex-col items-center text-center mb-5 lg-mb-0">
                  <div
                    className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg mb-5 border border-blue/15 hover:scale-110 transition duration-300"
                    style={{ backgroundColor: step.bg }}
                  >
                    <Icon size={38} strokeWidth={1.5} style={{ color: step.color }} aria-hidden="true" />
                    <span
                      className="absolute -top-2.5 -right-2.5 w-14 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white transform rotate-7"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <p className="font-bold text-md text-text-primary mb-2 lg:text-sm">{step.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

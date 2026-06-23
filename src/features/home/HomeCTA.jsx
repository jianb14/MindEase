import FadeIn from "../../components/ui/FadeIn.jsx";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button.jsx";

export default function HomeCTA() {
    return (
        <section className="relative w-full flex justify-center py-40 px-4 lg:px-10 bg-bg-primary">
            <div className="bg-bg-card z-2 py-18 px-4 md:px-30 rounded-[2rem] border">
                <div className="w-full max-w-3xl text-center">

                    <FadeIn delay={0}>
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/5 bg-blue-ghost/50 backdrop-blur-sm text-xs font-semibold text-text-secondary mb-8">
                            <ShieldCheck size={14} className="text-text-accent" />
                            No commitment. Cancel anytime.
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.10}>
                        <h2 className="font-black text-4xl text-text-primary mb-6 leading-tight lg:mx-30">
                            Take the First Step Toward{" "}
                            <span className="text-text-accent">Better Mental Health</span> Today
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.20}>
                        <p className="text-text-secondary text-md leading-relaxed mb-10">
                            Join thousands of people who are improving their emotional well-being with expert support and personalized care.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.30}>
                        <div className="flex justify-center px-8 sm:px-0 gap-4 flex-col sm:flex-row mb-8">
                            <Button label="Get Started Now" to="/register" icon={ArrowRight} />
                            <Button label="Browse Therapists" to="/therapists" variant="accent" />
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.55}>
                        <p className="text-xs text-text-secondary tracking-wide">
                            Trusted by 5,000+ members · HIPAA Compliant · APA Accredited
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
import FadeIn from "../../components/ui/FadeIn.jsx";
import Button from "../../components/ui/Button.jsx";

export default function AboutCTA() {
    return (
        <section className="relative w-full flex justify-center py-32 px-4 lg:px-10 bg-bg-primary">
        <FadeIn>
            <div className="w-full max-w-3xl text-center">
            <p className="font-medium text-blue text-sm uppercase tracking-widest mb-4">
                Get Started
            </p>
            <h2 className="font-black text-4xl text-text-primary mb-6">
                Ready to Start Your <span className="text-blue">Wellness Journey?</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
                Join thousands of members who have already taken the first step toward better mental health. Your journey starts with a single click.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
                <Button label="Get Started for Free" />
                <button className="px-6 py-3 rounded-lg border z-1 bg-bg-primary border-neutral-200 text-neutral-600 font-semibold hover:bg-blue-50 transition duration-300">
                Learn More
                </button>
            </div>
            </div>
        </FadeIn>
        </section>
    );
}
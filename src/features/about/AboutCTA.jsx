import FadeIn from "../../components/ui/FadeIn.jsx";
import { ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button.jsx";

export default function AboutCTA() {
    return (
        <section className="relative w-full flex justify-center py-20 sm:py-30 px-4 lg:px-10 bg-bg-primary">
            <div className="bg-blue-accent z-2 py-18 px-4 md:px-24 rounded-[2rem] border">
                <FadeIn>
                    <div className="w-full max-w-3xl text-center">
                    <h2 className="font-black text-4xl sm:text-5xl text-text-primary mb-6">
                        Ready to Start Your <span className="text-blue">Wellness Journey?</span>
                    </h2>
                    <p className="text-text-secondary text-md leading-relaxed mb-10 lg:mx-10">
                        Join thousands of members who have already taken the first step toward better mental health. Your journey starts with a single click.
                    </p>
                    <div className="flex justify-center px-10 gap-4 flex-col sm:flex-row">
                        <Button label="Get Started for Free" icon={ArrowRight} className="flex justify-center"/>
                        <button className="px-6 py-3 rounded-lg border z-1 bg-bg-primary border-neutral-100 text-neutral-600 font-semibold hover:bg-blue-50 transition duration-300">
                        Learn More
                        </button>
                    </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

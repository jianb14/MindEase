import FadeIn from "../../components/ui/FadeIn.jsx";

export default function AboutHero() {
    return (
        <section className="relative bg-bg-primary h-[50vh] w-full px-4 sm:px-10 md:px-20 lg:px-60 pt-25">
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
        </section>
    );
}
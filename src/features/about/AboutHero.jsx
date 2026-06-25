import FadeIn from "../../components/ui/FadeIn.jsx";

export default function AboutHero() {
    return (
        <section className=" bg-bg-primary h-[65dvh] w-full px-4 sm:px-10 md:px-20 lg:px-60 pt-20">

                <FadeIn delay={0}>
                    <p className="font-medium text-text-accent text-center text-sm uppercase tracking-widest mb-6">
                        About MindEase
                    </p>
                </FadeIn>

                <FadeIn delay={0.10}>
                    <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold text-center mb-6">
                        Supporting Better Mental Health, <span className="text-btn-primary">One Step at a Time</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.20}>
                    <p className="lg:mx-12 text-text-secondary text-md sm:text-lg text-center mb-10 leading-relaxed">
                        MindEase was built to empower individuals with accessible mental wellness tools, secure support systems, and personalized guidance for lasting well-being.
                    </p>
                </FadeIn>
        </section>
    );
}
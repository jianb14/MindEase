import { Check } from "lucide-react";

export default function OurStory() {
    return (
        <section className="w-full bg-transparent py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT: one L-shaped image + a separate card in the cut corner, with a gap */}
            <div
            className="relative w-full max-w-md mx-auto md:mx-0"
            style={{ aspectRatio: "4 / 5" }}
            >
            {/* the image - single shape, fills the whole box except the bottom-right notch */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-white">
                <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-white/70" />
                <div className="absolute top-16 left-24 w-1 h-1 rounded-full bg-white/50" />
                <div className="absolute top-12 right-14 w-1.5 h-1.5 rounded-full bg-white/60" />

                <div className="absolute top-12 left-1/2 -translate-x-1/2">
                </div>

                
            </div>

            {/* notch area: page-colored, holds the card with top/left padding = the gap */}
            <div className="absolute right-0 bottom-0 w-1/2 h-1/3 bg-emerald-50 pt-4 pl-4">
                <div className="w-full h-full bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-center gap-3">
                </div>
            </div>
            </div>

            {/* RIGHT: label, title, subtitle, checklist */}
            <div className="max-w-xl">
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-text-accent border-b-2 border-btn-primary/20 pb-1 mb-5">
        Our Story
    </span>

    <h2 className="font-serif text-3xl md:text-4xl leading-tight text-text-primary mb-6">
        Built from a Simple Idea:
        <span className="text-btn-primary"> Mental Health Support Should Be Easier to Access.</span>
    </h2>

    <p className="text-base leading-relaxed text-text-secondary mb-9">
        MindEase was created with one goal in mind: to make mental wellness
        support more accessible, approachable, and personalized. We saw how
        difficult it can be for individuals to find reliable resources,
        professional guidance, and tools that truly fit their needs. That's why
        we built a platform designed to connect people with meaningful support
        whenever and wherever they need it.
    </p>

    <ul className="space-y-5">
        {[
            "Accessible mental wellness tools for everyday support",
            "Personalized guidance tailored to individual needs",
            "Secure connections with licensed mental health professionals",
            "A supportive environment focused on long-term well-being",
        ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-btn-primary/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-btn-primary" strokeWidth={2.5} />
                </span>

                <span className="text-sm text-text-primary leading-relaxed">
                    {text}
                </span>
            </li>
        ))}
    </ul>
</div>

        </div>
        </section>
    );
}

import { Check } from "lucide-react";
import whoIllustration from "../../assets/who.svg";

const storyHighlights = [
    "Therapist matching shaped around each person's goals and comfort level",
    "Guided mindfulness and self-care programs for daily emotional support",
    "Private progress tracking that helps people notice patterns and growth",
    "A calmer way to ask for help before stress becomes overwhelming",
];

export default function OurStory() {
    return (
        <section className="w-full bg-transparent py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <div className="relative w-full max-w-md mx-auto md:mx-0">
                <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-bg-card p-8 shadow-sm">
                    <div className="absolute inset-x-0 top-0 h-24 bg-blue-accent/70 dark:bg-blue-accent/35" />

                    <img
                        src={whoIllustration}
                        alt="MindEase mental wellness support illustration"
                        className="relative z-10 w-full h-auto"
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="relative z-10 mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-primary p-4">
                        <p className="text-sm font-semibold text-text-primary">Care that meets people where they are</p>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                            MindEase brings therapy, mindfulness, and progress support into one approachable space.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-xl">
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue mb-5">
                    Our Story
                </span>

                <h2 className="font-serif text-4xl md:text-4xl font-bold leading-tight text-text-primary mb-6">
                    Built to Make Support Feel
                    <span className="text-btn-primary"> Simple, Private, and Within Reach.</span>
                </h2>

                <p className="text-base leading-relaxed text-text-secondary mb-9">
                    MindEase started from a problem many people know too well: wanting help,
                    but not knowing where to begin. We built a mental wellness space that
                    connects people with licensed therapists, guided mindfulness, self-care
                    programs, and progress tools so support feels easier to start and easier
                    to continue.
                </p>

                <ul className="space-y-5">
                    {storyHighlights.map((text, i) => (
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
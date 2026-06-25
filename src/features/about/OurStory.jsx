import { Check } from "lucide-react";

const items = [
    "Matched with a licensed therapist in under 48 hours",
    "Daily check-ins that adjust to your actual mood, not a script",
    "Every exercise reviewed by a licensed clinical psychologist",
    "Someone to talk to at 2 a.m., not just 9-to-5",
];

export default function OurStory() {
    return (
        <section className="w-full bg-emerald-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT: one L-shaped image + a separate card in the cut corner, with a gap */}
            <div
            className="relative w-full max-w-md mx-auto md:mx-0"
            style={{ aspectRatio: "4 / 5" }}
            >
            {/* the image — single shape, fills the whole box except the bottom-right notch */}
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
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-700 border-b-2 border-amber-200 pb-1 mb-5">
                Our story
            </span>

            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-emerald-950 mb-6">
                It started at 2 a.m., with a search bar and{" "}
                <em className="italic font-normal text-amber-700">nothing useful</em> in it.
            </h2>

            <p className="text-base leading-relaxed text-emerald-800 mb-9">
                MindEase began on a sleepless night, scrolling through apps that
                didn't get it — generic affirmations, no real guidance, nothing
                built for the actual 2 a.m. spiral. So we built the thing we
                wished existed: real tools, real therapists, and a plan that
                adjusts to how you're actually doing, not how an app assumes you
                should be.
            </p>

            <ul className="space-y-5">
                {items.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-amber-700" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-emerald-950 leading-relaxed">{text}</span>
                </li>
                ))}
            </ul>
            </div>

        </div>
        </section>
    );
}
import FadeIn from "../../components/ui/FadeIn.jsx";
import { motion } from "framer-motion";

const timelineData = [
    {
        number: "01.",
        label: "THE BEGINNING",
        title: "Every meaningful change starts with a simple idea.",
        body: "MindEase was created from a vision to make mental health support more accessible, approachable, and stigma-free. We saw how many people struggled in silence, unsure where to seek help or support.",
    },
    {
        number: "02.",
        label: "UNDERSTANDING THE NEED",
        title: "Listening before building.",
        body: "Before creating MindEase, we spent time understanding the challenges people face when seeking mental health support. Long wait times, limited accessibility, and fear of judgment inspired us to create a better solution.",
    },
    {
        number: "03.",
        label: "BUILDING MINDEASE",
        title: "Designing with empathy at the core.",
        body: "Every screen, feature, and interaction was carefully crafted to provide a safe and welcoming environment. Our goal was not just to build a platform, but to create a space where users feel understood and supported.",
    },
    {
        number: "04.",
        label: "BRINGING IT TO LIFE",
        title: "Turning ideas into impact.",
        body: "After months of planning, designing, and development, MindEase became a reality. We launched with one mission: to connect people with the support they need, whenever they need it.",
    },
    {
        number: "05.",
        label: "EMPOWERING EVERY JOURNEY",
        title: "Supporting growth, one step at a time.",
        body: "Today, MindEase continues to evolve, helping individuals prioritize their mental well-being through accessible resources, professional guidance, and meaningful connections.",
    },
    {
        number: "06.",
        label: "LOOKING AHEAD",
        title: "The journey is just beginning.",
        body: "We envision a future where mental health support is available to everyone, everywhere. MindEase will continue to innovate, expand, and create opportunities for people to thrive emotionally and mentally.",
    },
    ];

    const fadeFrom = (x) => ({
    hidden: {
        opacity: 0,
        x,
        y: 40,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
});

    function TimelineItem({ item, index }) {
    const isEven = index % 2 === 0;

    const NumberBlock = (
        <motion.div
            variants={fadeFrom(isEven ? -80 : 80)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col ${
                isEven
                    ? "items-start"
                    : "items-start md:items-end text-left md:text-right"
            }`}
        >
            <span className="text-[110px] md:text-[180px] font-bold font-serif leading-[0.8] tracking-tighter text-blue select-none">
                {item.number}
            </span>

            <span className="font-semibold text-xs tracking-[2px] uppercase text-text-secondary mt-2">
                {item.label}
            </span>
        </motion.div>
    );

    const TextBlock = (
        <motion.div
            variants={fadeFrom(isEven ? 80 : -80)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-start pt-8"
        >
            <h3 className="text-2xl md:text-4xl font-bold font-serif text-text-primary mb-4">
                {item.title}
            </h3>

            <p className="text-base md:text-md text-text-secondary leading-relaxed max-w-xl">
                {item.body}
            </p>
        </motion.div>
    );

    return (
        <div className="mb-32 md:mb-64">

            {/* Mobile */}
            <div className="flex flex-col gap-6 md:hidden">
                {NumberBlock}
                {TextBlock}
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-16 items-start">

                {isEven ? (
                    <>
                        {/* Number Left */}
                        <div className="col-span-4">
                            {NumberBlock}
                        </div>

                        {/* Text Right */}
                        <div className="col-span-7 col-start-6">
                            {TextBlock}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Text Left */}
                        <div className="col-span-7">
                            {TextBlock}
                        </div>

                        {/* Number Right */}
                        <div className="col-span-4 col-start-9">
                            {NumberBlock}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

    export default function Timeline() {
    return (
        <section className="relative min-h-screen w-full bg-bg-primary pb-40 pt-30 px-4 md:px-16 lg:px-32">
            {/* Header */}
            <div className="mx-0 lg:mx-50 mb-25">
                <FadeIn delay={0}>
                    <p className="font-medium text-text-accent text-sm uppercase text-center tracking-widest mb-4">
                        How It Works
                    </p>
                </FadeIn>
                <FadeIn delay={0.10}>
                    <h2 className="font-black text-4xl mb-4 text-center">
                        The Story Behind{" "}
                        <span className="text-text-accent">MindEase</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.20}>
                    <p className="text-md sm:text-lg text-text-secondary text-center mx-0 sm:mx-10 md:mx-15 lg:mx-20">Discover the journey behind MindEase and our mission to make mental wellness accessible.</p>
                </FadeIn>
            </div>

            {/* Items */}
            <div className="max-w-7xl mx-auto">
                {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}
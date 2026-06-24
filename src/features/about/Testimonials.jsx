import FadeIn from "../../components/ui/FadeIn.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import team1 from "/src/assets/team-1.png";
import team2 from "/src/assets/team-2.png";
import team3 from "/src/assets/team-3.png";
import team4 from "/src/assets/team-4.png";
import team5 from "/src/assets/team-5.png";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Clinical Psychologist",
        image: team1,
        quote: "MindEase provides a safe and supportive environment where individuals can access professional mental health guidance with confidence.",
    },
    {
        name: "Michael Reyes",
        role: "Licensed Therapist",
        image: team2,
        quote: "The platform bridges the gap between people seeking help and professionals ready to support them on their journey.",
    },
    {
        name: "Emily Cruz",
        role: "Mental Health Counselor",
        image: team3,
        quote: "Mental wellness should be accessible to everyone, and MindEase is making that vision a reality.",
    },
    {
        name: "James Tan",
        role: "Psychiatrist",
        image: team4,
        quote: "MindEase combines accessibility, empathy, and technology to create a truly meaningful experience.",
    },
    {
        name: "Olivia Santos",
        role: "Wellness Specialist",
        image: team5,
        quote: "A thoughtful platform that empowers people to prioritize their mental well-being every day.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-40 px-4 md:px-16 lg:px-32 bg-bg-primary">

            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-24">
                <FadeIn>
                    <p className="text-xs uppercase tracking-[4px] text-text-secondary mb-4">
                        Testimonials
                    </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        What People Say About{" "}
                        <span className="text-text-accent">MindEase</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-text-secondary text-lg">
                        Hear from professionals who believe in making mental wellness accessible.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.3}>
                <div className="relative">

                    {/* Left Fade */}
<div className="absolute left-0 top-0 z-10 h-full w-4 md:w-8 pointer-events-none bg-gradient-to-r from-bg-primary to-transparent" />

{/* Right Fade */}
<div className="absolute right-0 top-0 z-10 h-full w-4 md:w-8 pointer-events-none bg-gradient-to-l from-bg-primary to-transparent" />

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        speed={1000}
                        autoplay={{ delay: 8000, disableOnInteraction: false }}
                        pagination={{ el: ".testimonial-pagination", clickable: true }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="max-w-xl mx-auto px-2 pt-12 pb-2">

                                    {/* Card */}
                                    <div className="
                                        relative flex flex-col items-center
                                        bg-bg-card
                                        border dark:border-white/10 border-black/10
                                        rounded-[32px]
                                        px-2 pt-16 pb-7
                                        mt-11
                                    ">
                                        {/* Quote bg mark */}
                                        <span className="absolute top-4 left-4 text-5xl text-blue font-bold leading-none pointer-events-none">
                                            ❝
                                        </span>

                                        {/* Avatar ring */}
                                        <div className="
                                            absolute -top-20 left-1/2 -translate-x-1/2
                                            w-34 h-34 rounded-full p-1.5
                                            bg-bg-card
                                        ">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-[#2a2830]">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <p className="text-text-primary text-md font-semibold text-center mb-[6px]">
                                            {item.name}
                                        </p>

                                        <p className="text-xs font-light text-text-secondary tracking-[0.6px] text-center mb-[10px]">
                                            {item.role}
                                        </p>

                                        {/* Stars */}
                                        <div className="flex gap-[3px] justify-center mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-orange text-[13px] leading-none">
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        {/* Divider */}
                                        <div className="w-5 h-px bg-white/[0.08] mb-3" />

                                        {/* Quote */}
                                        <p className="text-text-secondary text-sm font-light italic leading-[1.85] text-center">
                                            {item.quote}
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    <div className="testimonial-pagination flex justify-center gap-1.5 mt-10" />

                </div>
            </FadeIn>

        </section>
    );
}
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
        quote:
            "MindEase provides a safe and supportive environment where individuals can access professional mental health guidance with confidence.",
    },
    {
        name: "Michael Reyes",
        role: "Licensed Therapist",
        image: team2,
        quote:
            "The platform bridges the gap between people seeking help and professionals ready to support them on their journey.",
    },
    {
        name: "Emily Cruz",
        role: "Mental Health Counselor",
        image: team3,
        quote:
            "Mental wellness should be accessible to everyone, and MindEase is making that vision a reality.",
    },
    {
        name: "James Tan",
        role: "Psychiatrist",
        image: team4,
        quote:
            "MindEase combines accessibility, empathy, and technology to create a truly meaningful experience.",
    },
    {
        name: "Olivia Santos",
        role: "Wellness Specialist",
        image: team5,
        quote:
            "A thoughtful platform that empowers people to prioritize their mental well-being every day.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-40 px-4 md:px-16 lg:px-32 bg-bg-primary">

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <FadeIn>
                    <p className="text-text-accent text-sm uppercase tracking-[3px] font-medium mb-4">
                        Testimonials
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-black mb-5">
                        What People Say About{" "}
                        <span className="text-text-accent">
                            MindEase
                        </span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-text-secondary text-lg">
                        Hear from professionals and individuals who believe in
                        making mental wellness more accessible.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.3}>
    <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-40 pointer-events-none bg-gradient-to-r from-bg-primary to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-40 pointer-events-none bg-gradient-to-l from-bg-primary to-transparent" />

        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            speed={1000}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            pagination={{
                el: ".testimonial-pagination",
                clickable: true,
            }}
        >
            {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="max-w-5xl mx-auto px-2">

                        <div
                            className="
                                relative
                                bg-card
                                border
                                border-border
                                rounded-[32px]
                                p-8 md:p-12
                                min-h-[320px]
                                shadow-[0_20px_80px_rgba(0,0,0,0.25)]
                            "
                        >

                            {/* Quote */}
                            <div className="absolute top-8 right-10 text-[70px] leading-none text-text-accent/20 font-black">
                                ❞
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">

                                {/* Profile */}
                                <div className="w-full md:w-[220px] shrink-0">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                                            w-20 h-20
                                            rounded-full
                                            object-cover
                                            border-4
                                            border-border
                                            mb-5
                                        "
                                    />

                                    <h3 className="font-bold text-2xl text-text-primary">
                                        {item.name}
                                    </h3>

                                    <p className="text-text-accent mt-1">
                                        {item.role}
                                    </p>

                                </div>

                                {/* Quote Text */}
                                <div className="flex-1 flex items-center">

                                    <p className="text-lg md:text-xl leading-[2] text-text-secondary">
                                        {item.quote}
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Pagination */}
        <div className="testimonial-pagination flex justify-center items-center gap-3 mt-10" />

    </div>
</FadeIn>

        </section>
    );
}
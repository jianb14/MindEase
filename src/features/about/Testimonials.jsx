import FadeIn from "../../components/ui/FadeIn.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import review1 from "/src/assets/review-1.jpg";
import review2 from "/src/assets/review-2.jpg";
import review3 from "/src/assets/review-3.jpg";
import review4 from "/src/assets/review-4.jpg";
import review5 from "/src/assets/review-5.jpg";

const testimonials = [
    {
        name: "Sophia Martinez",
        role: "University Student",
        image: review1,
        quote: "MindEase helped me manage academic stress and build healthier habits. The resources were easy to access and made a real difference in my daily life.",
    },
    {
        name: "Ethan Brooks",
        role: "Marketing Manager",
        image: review2,
        quote: "Balancing work and personal life became easier with MindEase. The platform gave me practical tools that improved both my productivity and well-being.",
    },
    {
        name: "Mia Chen",
        role: "Remote Designer",
        image: review3,
        quote: "Working remotely often felt isolating, but MindEase provided support and guidance that helped me stay connected, focused, and mentally healthy.",
    },
    {
        name: "Daniel Carter",
        role: "Parent & Entrepreneur",
        image: review4,
        quote: "As a parent and business owner, finding time for myself was difficult. MindEase reminded me that mental wellness deserves the same attention as physical health.",
    },
    {
        name: "Ava Thompson",
        role: "Healthcare Professional",
        image: review5,
        quote: "MindEase offers a welcoming and supportive experience. It helped me reflect, recharge, and develop healthier ways to manage everyday challenges.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-40 px-4 md:px-16 lg:px-32 bg-transparent">

            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-20">
                <FadeIn>
                    <p className="text-xs uppercase tracking-[4px] text-text-secondary mb-4">
                        Success Stories
                    </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="text-4xl font-black mb-4">
                        Real Stories,{" "}
                        <span className="text-text-accent">Real Growth</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-text-secondary text-lg">
                        Discover how MindEase helps people navigate challenges, build resilience, and prioritize their mental well-being.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.3}>
                <div className="relative">

                <div className="absolute left-0 top-0 z-10 h-full w-4 md:w-8 pointer-events-none bg-linear-to-r from-bg-primary to-transparent" />
                <div className="absolute right-0 top-0 z-10 h-full w-4 md:w-8 pointer-events-none bg-linear-to-l from-bg-primary to-transparent" />

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
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <p className="text-text-primary text-md font-semibold text-center mb-1.5">
                                            {item.name}
                                        </p>

                                        <p className="text-xs font-light text-text-secondary tracking-[0.6px] text-center mb-2.5">
                                            {item.role}
                                        </p>

                                        {/* Stars */}
                                        <div className="flex gap-0.75 justify-center mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-amber-400 text-[13px] leading-none">
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        {/* Divider */}
                                        <div className="w-5 h-px bg-white/8 mb-3" />

                                        {/* Quote */}
                                        <p className="text-text-secondary text-sm mx-8 font-light italic leading-[1.85] text-center">
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

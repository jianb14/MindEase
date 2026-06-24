import { useState } from "react";
import FadeIn from "../../components/ui/FadeIn.jsx";
import team1 from "/src/assets/team-1.png"
import team2 from "/src/assets/team-2.png"
import team3 from "/src/assets/team-3.png"
import team4 from "/src/assets/team-4.png"
import team5 from "/src/assets/team-5.png"

const teamMembers = [
    {
        name: "Dr. Sarah Johnson",
        role: "Clinical Psychologist",
        image: team1,
    },
    {
        name: "Dr. Michael Reyes",
        role: "Licensed Therapist",
        image: team2,
    },
    {
        name: "Dr. Emily Cruz",
        role: "Mental Health Counselor",
        image: team3,
    },
    {
        name: "Dr. James Tan",
        role: "Psychiatrist",
        image: team4,
    },
    {
        name: "Dr. Olivia Santos",
        role: "Wellness Specialist",
        image: team5,
    },
];

export default function TeamSection() {
    const [active, setActive] = useState(null);

    return (
        <section className="relative pb-40 px-4 md:px-16 lg:px-32 bg-bg-primary overflow-hidden">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <FadeIn>
                    <p className="text-blue text-sm uppercase tracking-[3px] font-medium mb-4">
                        Our Team
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-black mb-5">
                        The People Behind{" "}
                        <span className="text-blue">
                            MindEase
                        </span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-text-secondary text-lg">
                        Meet the passionate professionals dedicated to making
                        mental wellness more accessible, compassionate, and
                        effective.
                    </p>
                </FadeIn>
            </div>

            <div
                className="hidden lg:flex h-[500px] gap-4"
                onMouseLeave={() => setActive(null)}
            >
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        style={{
                            flexGrow: active === index ? 5 : 1,
                        }}
                        className="
                            relative z-2 overflow-hidden rounded-3xl cursor-pointer
                            transition-all duration-700 
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                        "
                    >
                        {/* Image */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className={`
                                absolute inset-0 h-full w-full object-cover
                                transition-all duration-700
                                ${active === index ? "scale-115" : "scale-100"}
                            `}
                        />

                        <div
                            className={`
                                absolute inset-0 transition-all duration-500
                                ${
                                    active === index
                                        ? "bg-linear-to-t from-black/75 via-black/30 to-transparent"
                                        : "bg-black/45"
                                }
                            `}
                        />

                        {/* Center Content kapag active */}
                        <div
                            className={`
                                absolute inset-0 flex flex-col items-center justify-center
                                pt-60
                                text-center text-white px-8
                                transition-all duration-300
                                ${
                                    active === index
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                }
                            `}
                        >

                            <h3 className="text-4xl font-bold mb-2">
                                {member.name}
                            </h3>

                            <p className="text-white/80 text-lg">
                                {member.role}
                            </p>
                        </div>

                        {active !== index && (
                            <div className="absolute bottom-6 left-0 right-0 px-4">
                                <p className="text-white font-semibold text-sm text-center truncate">
                                    {member.name}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile */}
            <div className="relative z-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative h-105 overflow-hidden rounded-3xl"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">
                                {member.name}
                            </h3>

                            <p className="text-white/80">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
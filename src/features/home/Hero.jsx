import { CircleCheckBig, Play } from "lucide-react";
import Button from "../../components/ui/Button.jsx";  
import FadeIn from "../../components/ui/FadeIn.jsx";

export default function Hero() {
    return(
            <FadeIn>
                <section className="relative overflow-hidden bg-bg-primary h-[82vh] sm:h-screen w-full flex items-center sm:items-start justify-center px-4 sm:px-10 md:px-20 lg:px-60 sm:pt-20">
                    <div className="relative z-10">
                        <div className="flex justify-center mb-5">
                            <div className="flex gap-1.25 py-2 px-3 rounded-2xl bg-blue-50">
                                <CircleCheckBig size={15} className="text-text-accent"/>
                                <p className="text-xs text-text-accent font-bold">Trusted by 50,000+ Members</p>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif text-text-primary font-bold text-center mb-6">Your Mental Wellness <span className="text-btn-primary">Journey Starts Here</span></h1>
                        <p className="lg:mx-12 text-text-secondary text-md sm:text-lg text-center mb-10 leading-relaxed">Access professional therapy, guided mindfulness programs, and personalized mental health support designed to help you thrive every day.</p>

                        <div className="flex justify-center px-10 gap-2.5 flex-col sm:flex-row">
                            <Button
                                label="Start your Journey"
                            />

                            <div className="flex items-center justify-center gap-2 pb-3 pt-2.75 px-4 border bg-bg-primary border-neutral-200 rounded-lg hover:bg-blue-50 cursor-pointer">
                                <div className="bg-text-accent p-1.5    rounded-full">
                                    <Play stroke="white" fill="white" size={12}/>
                                </div>
                                <a className=" text-neutral-600 font-semibold text-md">Watch How it Works</a>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

    );
}
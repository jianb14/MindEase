import { CircleCheckBig, Play } from "lucide-react";
import Button from "../../components/ui/Button.jsx";  
import DotField from "../../components/ui/DotField.jsx";   

export default function Hero() {
    return(
            <section className="h-screen w-full bg-bg-primary flex justify-center px-5 pt-14 sm:pt-20">
                <div className="absolute inset-0">
                    <DotField />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-center mb-5">
                        <div className="flex gap-1.25 py-2 px-3 rounded-2xl bg-blue-50">
                            <CircleCheckBig size={15} className="text-text-accent"/>
                            <p className="text-xs text-text-accent font-bold">Trusted by 50,000+ Members</p>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-text-primary font-bold text-center mb-6">Your Mental Wellness <br/><span className="text-btn-primary">Journey Starts Here</span></h1>
                    <p className="text-text-secondary text-sm sm:text-lg text-center mb-10 leading-relaxed">Access professional therapy, guided mindfulness programs, and personalized <br/> mental health support designed to help you thrive every day.</p>

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

    );
}
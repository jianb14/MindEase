import DotField from "../components/ui/DotField.jsx";  
import Hero from "../features/home/Hero.jsx"
import LogoMarquee from "../features/home/LogoMarquee.jsx"
import WhyChoose from "../features/home/WhyChoose.jsx"
import HowItWorks from "../features/home/HowItWorks.jsx"
import WellnessImpact from "../features/home/WellnessImpact.jsx"
import HomeCTA from "../features/home/HomeCTA.jsx"

export default function Home() {
    return (
        <div className="relative min-h-screen pointer-events-none">
            <div className="absolute inset-0 h-full w-full">
                <DotField dotSpacing={16}/>
            </div>
            <Hero />
            <LogoMarquee />
            <WhyChoose />
            <HowItWorks />
            <WellnessImpact />
            <HomeCTA />
            
        </div>
    );
}
import DotField from "../components/ui/DotField.jsx";  
import Hero from "../features/home/Hero.jsx"
import LogoMarquee from "../features/home/LogoMarquee.jsx"
import WhyChoose from "../features/home/WhyChoose.jsx"

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <DotField />
            <Hero />
            <LogoMarquee />
            <WhyChoose />
            
        </div>
    );
}
import DotField from "../components/ui/DotField.jsx"; 
import Timeline from "../features/about/Timeline.jsx" 
import AboutCTA from "../features/about/AboutCTA.jsx" 
import TeamSection from "../features/about/TeamSection.jsx" 
import Testimonials from "../features/about/Testimonials.jsx";

export default function About() {
    return (

        <div className="relative min-h-screen">
            <div className="absolute inset-0 h-full w-full">
                <DotField dotSpacing={16}/>
            </div>

            <Timeline />
            <TeamSection />
            <Testimonials />
            <AboutCTA />
            
        </div>

    );
}
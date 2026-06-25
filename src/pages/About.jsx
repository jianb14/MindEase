import DotField from "../components/ui/DotField.jsx"; 
import Timeline from "../features/about/Timeline.jsx" 
import AboutCTA from "../features/about/AboutCTA.jsx" 
import TeamSection from "../features/about/TeamSection.jsx" 
import Testimonials from "../features/about/Testimonials.jsx";
import AboutHero from "../features/about/AboutHero.jsx";
import OurStory from "../features/about/OurStory.jsx";

export default function About() {
    return (

        <div className="relative min-h-screen pointer-events-none">
            <div className="absolute inset-0 h-full w-full">
                <DotField interactive={false} dotSpacing={16}/>
            </div>

            <AboutHero />
            <OurStory />
            <Timeline />
            <TeamSection />
            <Testimonials />
            <AboutCTA />
            
        </div>

    );
}
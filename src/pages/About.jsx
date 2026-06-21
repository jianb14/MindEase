import DotField from "../components/ui/DotField.jsx"; 
import AboutCTA from "../features/about/AboutCTA.jsx" 

export default function About() {
    return (

        <div className="relative min-h-screen">
            <div className="absolute inset-0 h-full w-full">
                <DotField dotSpacing={16}/>
            </div>

            <AboutCTA />
        </div>

    );
}
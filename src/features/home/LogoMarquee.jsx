import LogoLoop from "../../components/ui/LogoLoop.jsx";
import DotField from "../../components/ui/DotField.jsx";
import APA from "/src/assets/apa.png"
import MHA from "/src/assets/mha2.jpg"
import NIHM from "/src/assets/nihm2.jpg"
import WHO from "/src/assets/who.png"
import DOH from "/src/assets/doh.png"

const logos = [
    { src: APA, alt: 'Logo 1' },
    { src: MHA, alt: 'Logo 2' },
    { src: NIHM, alt: 'Logo 3' },
    { src: WHO, alt: 'Logo 4' },
    { src: DOH, alt: 'Logo 4' },
];

export default function LogoMarquee() {
    return (
        <section className="relative overflow-hidden bg-bg-primary w-full">
            <div className="absolute inset-0">
                <DotField />
            </div>
            <div className="py-15 mx-1 sm:mx-20 md:mx-30 lg:mx-40">
                <LogoLoop
                    logos={logos}
                    speed={60}
                    logoHeight={60}
                    gap={60}
                    pauseOnHover
                    fadeOut
                />
            </div>
        </section>
        
    );
}
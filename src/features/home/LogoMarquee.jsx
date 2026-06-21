import LogoLoop from "../../components/ui/LogoLoop.jsx";
import APA from "/src/assets/apa.svg"
import MHA from "/src/assets/mha.svg"
import NIHM from "/src/assets/nimh.svg"
import WHO from "/src/assets/who.svg"
import DOH from "/src/assets/doh.svg"

const logos = [
    { src: APA, alt: 'Logo 1' },
    { src: MHA, alt: 'Logo 2' },
    { src: NIHM, alt: 'Logo 3' },
    { src: WHO, alt: 'Logo 4' },
    { src: DOH, alt: 'Logo 4' },
];

export default function LogoMarquee() {
    return (
        <section className="relative bg-bg-primary w-full">
            <div className="py-15 sm:pt-0 sm:px-10 md:px-30 lg:px-50">
                <h4 className="text-blue mb-12 text-center font-medium">Trusted by Individuals, Families, and Organizations</h4>
                
                <LogoLoop
                    logos={logos}
                    speed={60}
                    logoHeight={50}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                />

            </div>
        </section>
        
    );
}
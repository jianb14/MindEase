import LogoLoop from "../../components/ui/LogoLoop.jsx";
import DotField from "../../components/ui/DotField.jsx";
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
        <section className="relative bg-bg-primary w-full -mt-3">
            <div className="absolute inset-0">
                <DotField />
            </div>
            <div className="py-5">
                <LogoLoop
                    logos={logos}
                    speed={60}
                    logoHeight={70}
                    gap={80}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                />
            </div>
        </section>
        
    );
}
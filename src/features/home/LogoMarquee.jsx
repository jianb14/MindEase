import LogoLoop from "../../components/ui/LogoLoop.jsx";
import APA from "/src/assets/apa.png"
import MHA from "/src/assets/mha.png"
import NIHM from "/src/assets/nihm.jpg"
import WHO from "/src/assets/who.png"

const logos = [
    { src: APA, alt: 'Logo 1' },
    { src: MHA, alt: 'Logo 2' },
    { src: NIHM, alt: 'Logo 3' },
    { src: WHO, alt: 'Logo 4' },
];

export default function LogoMarquee() {
    return (
        <div className="h-50 sm:mx-20 md:mx-30 lg:mx-40">
            <LogoLoop
            logos={logos}
            speed={60}
            logoHeight={40}
            gap={48}
            pauseOnHover
            fadeOut
        />
        </div>
        
    );
}
import LogoLoop from "../../components/ui/LogoLoop.jsx";
import APA from "/src/assets/apa.png"
const logos = [
    { src: APA, alt: 'Logo 1' },
    { src: '/src/assets/mha.png', alt: 'Logo 2' },
    { src: '/src/assets/nihm.jpg', alt: 'Logo 3' },
    { src: '/src/assets/who.png', alt: 'Logo 4' },
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
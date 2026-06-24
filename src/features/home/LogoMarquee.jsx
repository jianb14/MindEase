import LogoLoop from "../../components/ui/LogoLoop.jsx";
import { Award, ShieldCheck, Lock } from "lucide-react";
import APA from "/src/assets/apa.svg"
import MHA from "/src/assets/mha.svg"
import NIHM from "/src/assets/nimh.svg"
import WHO from "/src/assets/who.svg"
import DOH from "/src/assets/doh.svg"

const logos = [
    { src: APA, alt: 'Logo 1' },
    { src: MHA, alt: 'Logo 2' },
    { src: WHO, alt: 'Logo 3' },
    { src: NIHM, alt: 'Logo 4' },
    { src: DOH, alt: 'Logo 4' },
];

export default function LogoMarquee() {
    return (
        <section className="relative bg-bg-primary w-full">
            <div className="py-35 sm:py-40 sm:px-10 md:px-30 lg:px-50">
                <h4 className="text-blue mb-14 text-center font-medium mx-4">Trusted by Individuals, Families, and Organizations</h4>
                
                <LogoLoop
                    logos={logos}
                    speed={60}
                    logoHeight={60}
                    gap={30}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="var(--color-bg-primary)"
                    renderItem={(item) => (
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="h-(--logoloop-logoHeight) w-auto object-contain dark:invert dark:opacity-80 transition-transform duration-300 ease-in-out group-hover/item:scale-120"
                            draggable={false}
                        />
                    )}
                />

                <div className="flex justify-center gap-4 mt-18 flex-wrap">
                    <div className="flex items-center gap-1 bg-blue-ghost relative z-5 py-1.5 px-2.5 rounded-2xl">
                        <ShieldCheck size={16} className="text-blue"/>
                        <p className="text-xs font-medium text-text-secondary">HIPAA Compliant</p>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-ghost relative z-5 py-1.5 px-2.5 rounded-2xl">
                        <Award size={16} className="text-blue"/>
                        <p className="text-xs font-medium text-text-secondary">APA Accredited</p>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-ghost relative z-5 py-1.5 px-2.5 rounded-2xl">
                        <Lock size={15} className="text-blue"/>
                        <p className="text-xs font-medium text-text-secondary">256-bit SSL Encrypted</p>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
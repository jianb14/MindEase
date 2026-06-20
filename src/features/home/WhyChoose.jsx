import { 
    UserCheck, 
    Sparkles,
    ClipboardList,
    Lock,
    ChartColumn,
    Heart,
} from "lucide-react"

export default function WhyChoose() {
    return(

        <section className="relative bg-bg-primary w-full flex justify-center py-40 px-4 lg:px-10">
            <div>
                <div className="mx-0 lg:mx-50 mb-15">
                    <p className="font-medium text-text-accent text-center mb-4">Why Choose MindEase</p>
                    <h1 className="font-black text-4xl text-center mb-4">Everything You Need to <span className="text-text-accent">Thrive</span></h1>
                    <p className="text-lg text-text-secondary text-center mx-0 sm:mx-10 md:mx-15 lg:mx-20">A complete wellness ecosystem designed around you, from therapy to mindfulness, community to progress tracking.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-6 sm:mx-6 md:mx-10 mx-0">
                    <div className="bg-white z-2 p-7 rounded-2xl shadow">
                        <div className="h-12 w-12 flex justify-center items-center bg-blue-ghost rounded-lg mb-5">
                            <UserCheck 
                                size={24}
                                className="text-text-accent"
                            />
                        </div>
                        <h4 className="font-bold mb-2">Personalized Therapy</h4>
                        <p className="text-text-secondary">Connect with licensed professionals matched to your specific needs, goals, and communication style.</p>
                    </div>

                    <div className="bg-white z-2 p-7 rounded-2xl shadow">
                        <div className="h-12 w-12 flex justify-center items-center bg-green-ghost rounded-lg mb-5">
                            <Sparkles
                                size={24}
                                className="text-green"
                            />
                        </div>
                        <h4 className="font-bold mb-2">Guided Mindfulness</h4>
                        <p className="text-text-secondary">Daily exercises, breathing techniques, and meditations crafted for emotional balance and clarity.</p>
                    </div>

                    <div className="bg-white z-2 p-7 rounded-2xl shadow">
                        <div className="h-12 w-12 flex justify-center items-center bg-orange-ghost rounded-lg mb-5 group-hover:scale-125">
                            <ClipboardList
                                size={24}
                                className="text-orange"
                            />
                        </div>
                        <h4 className="font-bold mb-2">Self-Care Programs</h4>
                        <p className="text-text-secondary">Structured wellness plans tailored to your lifestyle with measurable milestones and checkpoints.</p>
                    </div>

                    <div className="bg-white z-2 p-7 rounded-2xl shadow">
                        <div className="h-12 w-12 flex justify-center items-center bg-rose-ghost rounded-lg mb-5">
                            <Lock
                                size={24}
                                className="text-rose"
                            />
                        </div>
                        <h4 className="font-bold mb-2">Secure & Private</h4>
                        <p className="text-text-secondary">Industry-standard encryption and HIPAA-compliant infrastructure keep every session confidential.</p>
                    </div>

                    <div className="bg-white z-2 p-7 rounded-2xl shadow">
                        <div className="h-12 w-12 flex justify-center items-center bg-violet-ghost rounded-lg mb-5">
                            <ChartColumn
                                size={24}
                                className="text-violet"
                            />
                        </div>
                        <h4 className="font-bold mb-2">Progress Tracking</h4>
                        <p className="text-text-secondary">Visualize your wellness journey with insightful metrics, mood trends, and milestone celebrations.</p>
                    </div>

                    <div className="bg-white z-2 p-7 rounded-2xl shadow">
                        <div className="h-12 w-12 flex justify-center items-center bg-red-ghost rounded-lg mb-5">
                            <Heart
                                size={24}
                                className="text-red"
                            />
                        </div>
                        <h4 className="font-bold mb-2">Community Support</h4>
                        <p className="text-text-secondary">Join moderated peer groups and supportive communities that understand what you're going through.</p>
                    </div>

                </div>
            </div>
        </section>

    )
}
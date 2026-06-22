import { useState } from "react";
import { useForm } from "react-hook-form";
import DotField from "../../components/ui/DotField.jsx"; 
import { Eye, EyeOff, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const perks = [
    { icon: Check,          title: "Matched Instantly",    desc: "Get paired with a licensed therapist in minutes." },
    { icon: Check,          title: "Fully Confidential",   desc: "Your sessions are HIPAA-compliant and always private." },
    { icon: Check,          title: "Cancel Anytime",       desc: "No contracts, no commitments. You're in control." },
    { icon: Check,          title: "24/7 Support",         desc: "Access wellness resources whenever you need them." },
];

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const password = watch("password");

    function onSubmit(data) {
        console.log("register", data);
    }

    const inputClass = (error) =>
    `w-full px-4 py-2.5 rounded-lg border text-sm transition duration-200 outline-offset-2 ${
        error
        ? "border-red-400 bg-red-50 outline-none"
        : "border-gray-200 bg-white focus:outline-2 focus:outline-[#138fe7]"
    }`;

    const navigate = useNavigate();

    function onSubmit(data) {
        console.log("register", data);
        navigate("/login");
    }

    return (
        <div className="relative min-h-screen bg-bg-primary flex items-center">
            <div className="absolute inset-0 h-full w-full">
                <DotField dotSpacing={16}/>
            </div>

            {/* LEFT SIDE */}
            <motion.div
                className="hidden lg:flex flex-col justify-between w-1/2 px-16 py-12"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                <div>
                    <h2 className="font-black text-4xl text-text-primary leading-tight mb-4">
                        Take Care of Your Mind <br />
                        <span className="text-blue">the Way It Deserves</span>
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-10">
                        Creating an account takes less than 2 minutes. Start your personalized wellness journey with a therapist matched just for you.
                    </p>

                    <div className="flex flex-col gap-5">
                        {perks.map((perk, i) => {
                        const Icon = perk.icon;
                        return (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-white border border-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon size={17} className="text-blue" />
                                </div>
                                <div>
                                    <p className="font-bold text-text-primary/70 text-sm">{perk.title}</p>
                                    <p className="text-text-secondary text-sm">{perk.desc}</p>
                                </div>
                            </div>
                        );
                        })}
                    </div>
                </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
                className="flex-1 flex items-center z-2 justify-center px-4 py-12"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                <div className="w-full max-w-md">

                {/* card */}
                <div className="bg-white rounded-2xl z-2 relative shadow-lg border p-8">
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-3 w-25 h-7 bg-blue-accent rounded-sm shadow-sm`}></div>

                    <div className="mb-6">
                        <h1 className="font-black text-2xl text-text-primary mb-1">Create your account</h1>
                        <p className="text-sm text-text-secondary">Start your mental wellness journey today.</p>
                    </div>

                    <div className="flex flex-col gap-4">

                    {/* name */}
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">First Name <span className="text-red-500">*</span></label>
                            <input
                                {...register("firstName", { required: "Firstname is Required" })}
                                placeholder="Juan"
                                className={inputClass(errors.firstName)}
                            />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Last Name <span className="text-red-500">*</span></label>
                            <input
                                {...register("lastName", { required: "Lastname is Required" })}
                                placeholder="Dela Cruz"
                                className={inputClass(errors.lastName)}
                            />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    {/* email */}
                    <div>
                        <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Email Address <span className="text-red-500">*</span></label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                            })}
                            type="email"
                            placeholder="juan@email.com"
                            className={inputClass(errors.email)}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* password */}
                    <div>
                        <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Minimum 8 characters" },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)/,
                                    message: "Must include uppercase and a number",
                                },
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                className={inputClass(errors.password)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {/* confirm password */}
                    <div>
                        <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Confirm Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (val) => val === password || "Passwords do not match",
                                })}
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm your password"
                                className={inputClass(errors.confirmPassword)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                            >
                                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    {/* submit */}
                    <button
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="w-full bg-btn-primary text-white py-2.5 rounded-lg shadow-[0_5px_0_#0f74ba] hover:bg-btn-primary-hover font-semibold text-sm transition duration-200 mt-2 disabled:opacity-60"
                    >
                        Create Account
                    </button>

                    </div>

                    <p className="text-center text-xs text-text-secondary mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-text-accent font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>

                    <p className="text-center text-xs text-text-secondary mt-3">
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-text-accent hover:underline">Terms</a>{" "}
                        and{" "}
                        <a href="#" className="text-text-accent hover:underline">Privacy Policy</a>.
                    </p>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}
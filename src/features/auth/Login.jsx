import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, } from "lucide-react";
import { Link } from "react-router-dom";
import DotField from "../../components/ui/DotField.jsx"; 

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(data) {
        console.log("login", data);
    }

    const inputClass = (error) =>
    `w-full px-4 py-2.5 rounded-lg border text-sm transition duration-200 outline-offset-2 ${
        error
        ? "border-red-400 bg-red-50 outline-none"
        : "border-gray-200 bg-white focus:outline-2 focus:outline-[#138fe7]"
    }`;

    const navigate = useNavigate();

    function onSubmit(data) {
        console.log("login", data);
        navigate("/"); // redirect to home
    }

    return (
        <div className="h-[85vh] bg-bg-primary flex items-center justify-center px-4">
            <div className="absolute inset-0 h-full w-full">
                <DotField dotSpacing={16}/>
            </div>
            <div className="w-full max-w-md relative z-2">
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-3 w-25 h-7 bg-blue-accent rounded-sm shadow-sm`}></div>

                <div className="bg-white rounded-2xl border shadow-lg p-8">
                    <div className="mb-6">
                        <h1 className="font-black text-2xl text-text-primary mb-1">Welcome back</h1>
                        <p className="text-sm text-text-secondary">Sign in to continue your wellness journey.</p>
                    </div>

                    <div className="flex flex-col gap-4">

                        <div>
                            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Email Address</label>
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

                        <div>
                            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Password</label>
                            <div className="relative">
                                <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Minimum 8 characters" },
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your Password"
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

                        {/* remember me + forgot password */}
                        <div className="flex items-center justify-between pl-0.5 -mt-0.5">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                type="checkbox"
                                {...register("rememberMe")}
                                className="w-4 h-4 rounded border-gray-200 accent-blue cursor-pointer"
                                />
                                <span className="text-xs text-text-secondary">Remember me</span>
                            </label>
                            <a href="#" className="text-xs text-text-accent hover:underline">Forgot password?</a>
                        </div>

                        <button
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            className="w-full bg-btn-primary text-white py-2.5 rounded-lg font-medium text-sm hover:bg-blue-600 transition duration-200 mt-2 disabled:opacity-60"
                        >
                            Sign In
                        </button>

                    </div>

                    <p className="text-center text-xs text-text-secondary mt-6">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-text-accent font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
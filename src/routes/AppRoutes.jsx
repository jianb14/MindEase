import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import ClickSpark from "../components/ui/ClickSpark.jsx";  

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Therapists from "../pages/Therapists.jsx";
import Resources from "../pages/Resources.jsx";
import Pricing from "../pages/Pricing.jsx";
import Contact from "../pages/Contact.jsx";

import Login from "../features/auth/Login.jsx"
import Register from "../features/auth/Register.jsx"

export default function AppRoutes() {
    return (

        <ClickSpark sparkColor="#138fe7" sparkSize={12} sparkCount={8}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/therapists" element={<Therapists />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ClickSpark>

    );
}
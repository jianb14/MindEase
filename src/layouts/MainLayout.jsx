import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import DotField from "../components/ui/DotField.jsx";

export default function MainLayout() {
    return (
        <div className="relative">
            <DotField />

            <div className="relative z-10">
                <Navbar />

                <main>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}
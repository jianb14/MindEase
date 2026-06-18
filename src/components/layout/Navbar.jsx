import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "../ui/NavItem";
import logo from "/src/assets/mindease-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/therapists", label: "Therapists" },
    { to: "/resources", label: "Resources" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  // ✅ auto close sidebar when switching to desktop
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = (e) => {
      if (e.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="py-3 pr-2 pl-3 flex items-center justify-between">

          <img src={logo} alt="MindEase Logo" className="h-8 sm:h-9" />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavItem key={item.to} to={item.to}>
                {item.label}
              </NavItem>
            ))}
          </div>
          
          <div className="flex gap-1.5 items-center">
              <div className="hidden md:flex gap-2">
                <button className="px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                  Login
                </button>

                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
                  Get Started
                </button>
              </div>

              <button className="md:hidden px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
                Get Started
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-full hover:bg-blue-50 transition"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
          </div>
        </div>
      </nav>

      {/* Blur Background */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed top-16 left-0 w-full h-[calc(100vh-64px)] z-40 transition-all duration-300
          ${open ? "opacity-100 backdrop-blur-md bg-black/5" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-15.75 left-0 w-72 h-[calc(100vh-64px)]
          bg-white border-r shadow-lg z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col p-2 gap-1">

          {navLinks.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              mobile
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavItem>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <button className="py-3 rounded-lg border hover:bg-gray-50 transition">
              Login
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}
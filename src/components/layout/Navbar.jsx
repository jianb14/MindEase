import { useState, useEffect } from "react";
import NavItem from "../ui/NavItem";
import logo from "/src/assets/mindease-logo.png";
import { 
  Menu,
  X, 
  House,
  Info,
  Briefcase,
  Users,
  BookOpen,
  CreditCard,
  Phone, 
} from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: House },
    { to: "/about", label: "About", icon: Info },
    { to: "/services", label: "Services", icon: Briefcase },
    { to: "/therapists", label: "Therapists", icon: Users },
    { to: "/resources", label: "Resources", icon: BookOpen },
    { to: "/pricing", label: "Pricing", icon: CreditCard },
    { to: "/contact", label: "Contact", icon: Phone },
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
      <nav className="sticky top-0 z-50 bg-white">
        <div className="py-3 md:py-4 pr-2 pl-3 sm:px-4 md:px-5 lg:px-6 flex items-center justify-between">

          <img src={logo} alt="MindEase Logo" className="h-8 sm:h-9" />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavItem key={item.to} to={item.to}>
                {item.label}
              </NavItem>
            ))}
          </div>
          
          <div className="flex gap-1 items-center">
              <div className="hidden md:flex gap-2">
                <button className="px-4 py-2 rounded-lg hover:bg-blue-50 text-sm transition">
                  Login
                </button>

                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-500 transition">
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
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </div>
      </nav>

      {/* Blur Background */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed top-16 left-0 w-full h-[calc(100vh-64px)] z-40 transition-all duration-300
          ${open ? "opacity-100 backdrop-blur-xs bg-black/5" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16.50 left-0 w-72 h-[calc(100vh-64px)]
          bg-white shadow-lg z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full justify-between p-4">
        
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                mobile
                icon={<item.icon size={18} />}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavItem>
            ))}
          </div>

          <button className="py-2.75 rounded-lg border font-medium hover:bg-gray-100 transition">
              Login
          </button>

        </div>
      </aside>
    </>
  );
}
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavItem from "../ui/NavItem.jsx";
import logo from "/src/assets/mindease-logo.png";
import ThemeToggle from "../ui/ThemeToggle.jsx";
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
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      {/* Navbar */}
        <nav
        className={`
          sticky top-0
          z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-white/60 dark:bg-bg-primary/60 dark:border-b-white/10  backdrop-blur-xl border border-b-white/30 shadow-xs"
              : "bg-bg-primary dark:bg-bg-primary dark:border-bg-primary backdrop-blur-lg border border-b-white/10"
          }
        `}
      >
        <div className="py-3 md:py-4 pr-2 pl-3 sm:px-4 md:px-5 lg:px-6 flex items-center justify-between">
          <img src={logo} alt="MindEase Logo" className="h-8 sm:h-9" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavItem key={item.to} to={item.to}>
                {item.label}
              </NavItem>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex gap-1 items-center">
            <div className="hidden md:flex gap-2 -mt-1">
              <div className="mt-1">
                  <ThemeToggle/> 
              </div>
              <div className="flex gap-2 my-1.5">
                <Link
                  to="/login"
                  className="px-4 py-1 rounded-lg text-sm transition cursor-pointer bg-btn-secondary border border-color-outline flex items-center hover:bg-btn-secondary-hover shadow-[0_6px_0_#cfe6fb] dark:shadow-[0_6px_0_#182c50] text-text-secondary"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1 rounded-lg bg-btn-primary text-white text-sm shadow-[0_5px_0_#0f74ba] hover:bg-blue-500 transition flex items-center cursor-pointer"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <Link
              to="/register"
              className="md:hidden px-3 py-1.5 text-sm rounded-lg bg-btn-primary -mt-1 shadow-[0_5px_0_#0f74ba] text-white hover:bg-blue-500 transition cursor-pointer"
            >
              Get Started
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-blue-ghost text-text-secondary transition"
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
          bg-bg-primary shadow-lg z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full justify-between gap-10 px-4 py-6">

          <div className="flex flex-col gap-5">
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
            
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="py-2.75 rounded-lg w-full text-white bg-btn-primary shadow-[0_6px_0_#0f74ba] font-medium transition cursor-pointer text-center"
            >
              Login
            </Link>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-color-outline">
            <p className="text-text-secondary text-xs">Theme</p>
            <ThemeToggle /> 
          </div>

        </div>
      </aside>
    </>
  );
}
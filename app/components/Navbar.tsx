"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Doctors", href: "/doctor" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Determiner for white text vs dark text
  // On Home: Transparent/White text until scrolled
  // On Others: Scrolled state (Solid/Dark text) always or by default
  const isScrolledState = scrolled || !isHome;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolledState ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
        }`}
    >
      <div className="max-width-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col group gap-0.5">
            <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${isScrolledState ? "text-brand-primary" : "text-white"}`}>
              Jeevan <span className="font-light">Parivartan</span>
            </span>
            <span className={`text-[10px] md:text-xs font-semibold tracking-wider transition-colors duration-500 ${isScrolledState ? "text-brand-secondary" : "text-brand-surface opacity-80"}`}>
              Nasha Mukti Kendra
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-bold tracking-tight transition-all hover:text-brand-secondary relative group ${isScrolledState ? "text-slate-700" : "text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full ${pathname === link.href ? "w-full" : "w-0"}`}></span>
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border transition-colors ${isScrolledState ? "text-slate-900 border-slate-200" : "text-white border-white/20"}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden fixed inset-x-4 top-24 z-[60] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 text-lg font-bold rounded-2xl transition-all ${pathname === link.href ? "bg-slate-50 text-brand-secondary" : "text-slate-800 hover:bg-slate-50"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <a
                  href="tel:08423667868"
                  className="flex items-center justify-center gap-3 bg-brand-primary text-white w-full py-5 rounded-3xl font-bold text-lg shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

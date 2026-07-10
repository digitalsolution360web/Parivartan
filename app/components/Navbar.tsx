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
      className={`fixed w-full z-50 transition-all duration-500 bg-brand-accent/90 backdrop-blur-xl border-b border-white/5 ${isScrolledState ? "py-2 md:py-3" : "py-3 md:py-5"
        }`}
    >
      <div className="max-width-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col group gap-0">
            <span className={`text-[17px] sm:text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${isScrolledState ? "text-white" : "text-white"}`}>
              Jeevan <span className="text-brand-secondary font-light">Parivartan</span>
            </span>
            <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${isScrolledState ? "bg-brand-secondary" : "bg-brand-secondary"}`} />
            <span className={`text-[8px] sm:text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolledState ? "text-slate-400" : "text-white/80"}`}>
              Nasha Mukti Kendra
            </span>
          </Link>
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold tracking-wider uppercase transition-all hover:text-brand-secondary relative group ${isScrolledState ? "text-slate-200" : "text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-secondary transition-all rounded-full group-hover:w-full ${pathname === link.href ? "w-full" : "w-0"}`}></span>
              </Link>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className={`px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${isScrolledState ? "bg-brand-secondary text-brand-primary hover:bg-white" : "bg-white text-brand-primary hover:bg-brand-secondary hover:text-white"}`}>
              Get Help Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border transition-all ${isScrolledState ? "text-white border-white/10" : "text-white border-white/20"}`}
            >
              {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
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
            className="lg:hidden fixed inset-x-4 top-16 sm:top-20 z-[60] bg-brand-accent/95 backdrop-blur-3xl rounded-3xl shadow-3xl border border-white/10 overflow-hidden"
          >
            <div className="p-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 text-sm font-bold rounded-xl transition-all uppercase tracking-widest ${pathname === link.href ? "bg-white/10 text-brand-secondary" : "text-slate-300 hover:bg-white/5"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <a
                  href="tel:08423667868"
                  className="flex items-center justify-center gap-4 bg-brand-secondary text-brand-primary w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl"
                >
                  <Phone className="w-5 h-5" />
                  Call Support
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

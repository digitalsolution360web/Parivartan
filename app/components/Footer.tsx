import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Facebook = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const Instagram = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-24 pb-12">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8 text-center md:text-left">
            <Link href="/" className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white tracking-tight">
                Jeevan <span className="font-light">Parivartan</span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-brand-secondary">
                Professional De-Addiction Center
              </span>
            </Link>
            <p className="text-base leading-relaxed">
              We provide compassionate and comprehensive addiction treatment to help you reclaim your life through professional care and holistic recovery.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-xl group">
                <Facebook className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-xl group">
                <Twitter className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-xl group">
                <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8 text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-8">Navigation</h3>
            <ul className="space-y-4 font-medium">
              <li><Link href="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Services</Link></li>
              <li><Link href="/doctor" className="hover:text-brand-secondary transition-colors">Doctors</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-secondary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-8">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm leading-relaxed">
                  GGI Rd, Harikanshgadi,<br />
                  Mohanlalganj, Lucknow,<br />
                  Uttar Pradesh 226301
                </span>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold tracking-wide">084236 67868</span>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold tracking-wide text-xs">info@jeevanparivartan.com</span>
              </li>
            </ul>
          </div>

          {/* Emergency Support */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-8">Emergency Helpline</h3>
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-xs font-bold tracking-widest mb-4 opacity-80 uppercase">Available 24/7</p>
                <a href="tel:08423667868" className="text-2xl font-black block mb-4 hover:scale-105 transition-transform origin-left tracking-tight">
                  084236 67868
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full transition-all">
                  Request Callback
                </Link>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white opacity-5 rounded-full group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© 2024 Jeevan Parivartan. Helping people lead drug-free lives.</p>
          <p className="flex items-center gap-2 font-medium">
            Developed with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

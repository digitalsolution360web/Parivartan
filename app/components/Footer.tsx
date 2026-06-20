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
    <footer className="bg-[#022c22] text-slate-300 pt-24 pb-12">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8 text-center md:text-left">
            <Link href="/" className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white tracking-tighter">
                Jeevan <span className="font-light text-brand-secondary">Parivartan</span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-secondary/80">
                Premium De-Addiction Center
              </span>
            </Link>
            <p className="text-base leading-relaxed opacity-80">
              Transforming lives through compassionate care, expert medical guidance, and a holistic approach to long-term recovery.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary transition-all shadow-xl group">
                <Facebook className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary transition-all shadow-xl group">
                <Twitter className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary transition-all shadow-xl group">
                <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8 text-center md:text-left">
            <h3 className="text-white text-xl font-black mb-8 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4 font-bold">
              <li><Link href="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-secondary transition-colors">Services</Link></li>
              <li><Link href="/doctor" className="hover:text-brand-secondary transition-colors">Our Doctors</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-secondary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-black mb-8 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm leading-relaxed opacity-90">
                  GGI Rd, Harikanshgadi,<br />
                  Mohanlalganj, Lucknow,<br />
                  UP 226301
                </span>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0 border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold tracking-wider opacity-90">084236 67868</span>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0 border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold tracking-wider opacity-90">info@jeevanparivartan.com</span>
              </li>
            </ul>
          </div>

          {/* Emergency Support */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-black mb-8 uppercase tracking-widest">Support</h3>
            <div className="bg-gradient-to-br from-brand-primary to-[#042f2e] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/10">
              <div className="relative z-10">
                <p className="text-[10px] font-black tracking-[0.3em] mb-4 opacity-70 uppercase">24/7 Helpline</p>
                <a href="tel:08423667868" className="text-2xl font-black block mb-6 hover:text-brand-secondary transition-colors tracking-tighter">
                  084236 67868
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center w-full gap-2 text-xs font-black uppercase tracking-widest bg-brand-secondary text-brand-primary border-b-4 border-amber-600 hover:translate-y-1 hover:border-b-0 py-4 rounded-2xl transition-all">
                  Request Help
                </Link>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase">
          <p className="opacity-50">© 2024 Jeevan Parivartan. Healing Paths.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-brand-secondary fill-brand-secondary" /> in Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

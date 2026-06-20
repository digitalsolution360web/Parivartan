"use client";

import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  UserRoundCheck,
  Stethoscope,
  Users,
  Sun,
  Shield,
  Clock,
  Sparkles,
  Phone,
  Frown,
  BatteryLow,
  Activity,
  TrendingDown,
  Target,
  Leaf,
  Award,
  Home as HomeIcon,
  Lock,
  Wind,
  PhoneCall
} from "lucide-react";

// Animated Counter Component
const Counter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const slides = [
  { img: "/1.webp", title: "Holistic Healing for Mind & Body", subtitle: "Comprehensive addiction treatment and mental health support tailored for lasting recovery." },
  { img: "/2.webp", title: "A Supportive Sanctuary", subtitle: "24/7 professional guidance in a safe, structured, and compassionate environment." },
  { img: "/3.webp", title: "Restore Your Inner Peace", subtitle: "Specialized therapy programs designed for long-term sobriety and mental wellness." },
  { img: "/4.webp", title: "Empowering Your Future", subtitle: "Wellness programs and holistic recovery protocols for a balanced, drug-free life." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Slider - Entry Animation */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].img}
              alt="Center Hero"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-width-container w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="text-brand-secondary font-bold text-[10px] tracking-[0.4rem] uppercase mb-4 leading-none">
                #1 Trusted Recovery Center
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-white text-base md:text-lg mb-10 leading-relaxed max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-secondary text-brand-primary px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl"
                >
                  Start Healing Now
                </Link>
                <div className="flex items-center gap-4 px-2">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none mb-1">Direct Help</p>
                    <p className="text-base font-bold text-white tracking-tight">084236 67868</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? "bg-brand-secondary w-10" : "bg-white/40 w-4 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar - Animated Counter & Different Subtle Background */}
      <section className="py-12 bg-[#F0FDF4]/50 border-y border-emerald-100">
        <div className="max-width-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Recovery Rate", value: "98", suffix: "%", icon: <CheckCircle2 className="w-5 h-5"/> },
              { label: "Available Care", value: "24", suffix: "/7", icon: <ShieldCheck className="w-5 h-5"/> },
              { label: "Success Stories", value: "5000", suffix: "+", icon: <HeartPulse className="w-5 h-5"/> },
              { label: "Expert Staff", value: "30", suffix: "+", icon: <Users className="w-5 h-5"/> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-none mb-0.5">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Sliding Animation & White Background */}
      <section className="section-padding bg-white">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[5/4] border border-slate-100">
                <Image src="/5.webp" alt="Center" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-brand-secondary font-bold text-[10px] mb-3 block tracking-[0.3em] uppercase">About Our Center</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">Compassionate Care with Medical Precision</h2>
              <p className="text-slate-700 text-base mb-8 leading-relaxed">
                Jeevan Parivartan provides a healing environment where scientific protocols meet emotional support. Our multidisciplinary team works tirelessly to rebuild lives affected by addiction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Evidence-Based Care",
                  "Medical Detox Setup",
                  "Trauma-Informed Therapy",
                  "Long-term Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 font-semibold text-[11px] tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all">
                Full Mission Detail <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process - Sliding Up & Soft Amber Background */}
      <section className="section-padding bg-[#FFFBF0] border-y border-amber-100">
        <div className="max-width-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-bold text-[10px] mb-3 block tracking-[0.3em] uppercase opacity-70">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Structured Recovery Pathway</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Assessment", icon: <Stethoscope />, desc: "Clinical health and psychological vetting." },
              { title: "Managed Detox", icon: <Sparkles />, desc: "Medical oversight during stabilization." },
              { title: "Active Therapy", icon: <Users />, desc: "Rebuilding resilience via counseling." },
              { title: "Permanent Support", icon: <Sun />, desc: "Ensuring long-term sobriety success." },
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3 tracking-tight">{p.title}</h3>
                <p className="text-slate-700 text-[11px] font-bold leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine & Schedule - Sliding In & Soft Gray Background */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Daily Schedule Card - Slides from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/5 bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-5 h-5 text-brand-primary" />
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">The Blueprint of Change</h3>
              </div>
              <div className="space-y-3">
                {[
                  { t: "06:30 AM", d: "Spiritual Yoga & Meditation" },
                  { t: "08:30 AM", d: "Protein-Rich Breakfast" },
                  { t: "10:30 AM", d: "Clinical Self-Actualization Class" },
                  { t: "01:00 PM", d: "Nutritional Lunch Reset" },
                  { t: "04:00 PM", d: "Creative Therapy & Refreshments" },
                  { t: "08:00 PM", d: "Restoration Dinner" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors px-2 rounded-lg">
                    <span className="text-brand-primary font-bold text-[11px]">{row.t}</span>
                    <span className="text-slate-800 font-bold text-[11px] uppercase tracking-wider">{row.d}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* High Visibility Rules Section */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5 flex flex-col gap-6"
            >
              <div className="bg-brand-accent p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border border-white/10 group h-full">
                <div className="flex items-center gap-3 mb-8">
                  <Shield className="w-6 h-6 text-brand-secondary" />
                  <h3 className="text-xl font-bold tracking-tight">Main Center Rules</h3>
                </div>
                
                <div className="space-y-6 relative z-10">
                  {[
                    { t: "Isolation Period", d: "First 21 days for stabilization (No visitors)." },
                    { t: "Prohibited Items", d: "Strictly no drugs, alcohol, or tobacco inside." },
                    { t: "Fixed Routine", d: "Compulsory attendance in all therapy sessions." },
                    { t: "Behavior", d: "Respectful communication with staff and peers." },
                    { t: "Phones", d: "Personal phones not allowed during treatment." }
                  ].map((rule, idx) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                      <div>
                        <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.2em] mb-1">{rule.t}</p>
                        <p className="text-sm font-bold opacity-100 text-white leading-tight">{rule.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <Link href="/contact" className="inline-flex items-center gap-4 text-brand-secondary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                    Download Full Rulebook <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weekly Diet - Soft Indigo Surface */}
      <section className="section-padding bg-[#F5F3FF] border-t border-indigo-100">
        <div className="max-width-container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-indigo-100 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="px-8 py-5 border-b border-indigo-50 flex justify-between items-center bg-indigo-50/20">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Nutrient-Dense Menu</h3>
              <div className="text-[9px] font-bold text-indigo-600 uppercase tracking-[0.2em] border border-indigo-200 px-3 py-1 rounded-full">
                Vegetarian Pure
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-indigo-50/50">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-900 border-b border-indigo-100">Day</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-900 border-b border-indigo-100">Morning Vitality</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-900 border-b border-indigo-100">Lunch Energy</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-900 border-b border-indigo-100">Dinner Restoration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { d: "MON", m: "Paratha Mix", l: "Dal / Rice", n: "Rajma Masala" },
                    { d: "TUE", m: "Sprouted Chana", l: "Masoor Dal / Veg", n: "Green Harvest" },
                    { d: "WED", m: "Aloo Paratha", l: "Chana Dal / Rice", n: "Soya Medley" },
                    { d: "THU", m: "Nutri Daliya", l: "Urad Dal / Rice", n: "Kadhi Pakoda" },
                    { d: "FRI", m: "Veg Paratha", l: "Tahri Feast", n: "Kofta Masala" },
                    { d: "SAT", m: "Halwa Vitality", l: "Matar Dal / Veg", n: "Chana Dry" },
                    { d: "SUN", m: "Poha Medley", l: "Panch Dal / Mix", n: "Shahi Paneer" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-indigo-50/30 transition-colors group">
                      <td className="px-8 py-4 text-xs font-black text-indigo-600 bg-indigo-50/20">{row.d}</td>
                      <td className="px-8 py-4 text-[11px] font-bold text-slate-800 uppercase tracking-wide group-hover:text-brand-primary">{row.m}</td>
                      <td className="px-8 py-4 text-[11px] font-bold text-slate-800 uppercase tracking-wide group-hover:text-brand-primary">{row.l}</td>
                      <td className="px-8 py-4 text-[11px] font-bold text-slate-900 uppercase tracking-wide bg-indigo-50/10 group-hover:bg-indigo-50/30 group-hover:text-brand-primary">{row.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA - Soft Professional Light Theme */}
      <section className="py-16 bg-emerald-50/50 border-y border-emerald-100">
        <div className="max-width-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-emerald-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center gap-6 relative z-10 text-left">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-secondary shadow-lg">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-1">Emergency Support 24/7</p>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter tabular-nums">084236 67868</p>
              </div>
            </div>
            <Link href="/contact" className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all relative z-10 shadow-lg">
              Seek Help Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Closing CTA - Very Light Balanced Background */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="max-width-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Your Transformation Begins Today.</h2>
            <p className="text-slate-500 text-base mb-10 max-w-lg mx-auto font-medium">Join the thousands who have reclaimed their lives at Jeevan Parivartan. The best time for recovery is right now.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:08423667868" className="bg-brand-primary text-white px-8 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-lg">
                Consult a Specialist
              </a>
              <Link href="/contact" className="bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                Admission Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

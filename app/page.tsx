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
  { img: "/slider1.webp", title: "Holistic Healing for Mind & Body", subtitle: "Comprehensive addiction treatment and mental health support tailored for lasting recovery." },
  { img: "/slider2.webp", title: "A Supportive Sanctuary", subtitle: "24/7 professional guidance in a safe, structured, and compassionate environment." },
  { img: "/slider3.webp", title: "Restore Your Inner Peace", subtitle: "Specialized therapy programs designed for long-term sobriety and mental wellness." },
  // { img: "/27.webp", title: "Empowering Your Future", subtitle: "Wellness programs and holistic recovery protocols for a balanced, drug-free life." },
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
      <section className="relative w-full bg-black" style={{ minHeight: "320px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slides[currentSlide].img}
              alt="Center Hero"
              className="w-full h-auto block"
              style={{ maxHeight: "90vh", width: "100%", objectFit: "contain" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/30 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Text overlay - absolutely positioned on top */}
        <div className="absolute inset-0 z-10 flex items-center">
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
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
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
              { label: "Recovery Rate", value: "98", suffix: "%", icon: <CheckCircle2 className="w-5 h-5" /> },
              { label: "Available Care", value: "24", suffix: "/7", icon: <ShieldCheck className="w-5 h-5" /> },
              { label: "Success Stories", value: "5000", suffix: "+", icon: <HeartPulse className="w-5 h-5" /> },
              { label: "Expert Staff", value: "30", suffix: "+", icon: <Users className="w-5 h-5" /> },
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[5/4.9] border border-slate-100">
                <Image src="/image1.webp" alt="Center" fill className="object-cover" />
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

      {/* Director Highlight - Home Page */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/10.webp"
                  alt="Dr. Jyoti Pal - Director"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-60" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-brand-secondary" />
                <span className="text-brand-secondary font-bold text-[10px] uppercase tracking-[0.4em]">Director's Message</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                Led by Empathy, <br />
                <span className="text-brand-primary">Driven by Results.</span>
              </h2>
              <div className="relative mb-10">
                <span className="absolute -top-6 -left-4 text-8xl text-brand-primary/10 font-serif leading-none">"</span>
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed relative z-10 italic">
                  At Jeevan Parivartan, we don't just treat addiction; we rediscover the human spirit. Our dedicated team is committed to providing the highest quality care to help you reclaim your life and future.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 mb-1">Dr. Jyoti Pal</p>
                <p className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.3em]">Director - Jeevan Parivartan</p>
              </div>
              <div className="mt-10">
                <Link href="/about" className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-lg">
                  Learn About Our Vision <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl -ml-48 -mb-48" />
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
              { title: "Assessment", icon: <Stethoscope />, desc: "Comprehensive clinical health screening and psychological vetting to design your personalized recovery plan." },
              { title: "Managed Detox", icon: <Sparkles />, desc: "24/7 medically supervised detoxification with expert oversight to ensure safe and comfortable stabilization." },
              { title: "Active Therapy", icon: <Users />, desc: "Intensive individual and group counseling sessions focused on rebuilding resilience and mental strength." },
              { title: "Permanent Support", icon: <Sun />, desc: "Ongoing aftercare and relapse prevention programs ensuring long-term sobriety and sustainable success." },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-accent p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-secondary mb-6 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors border border-white/10">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-3 tracking-tight">{p.title}</h3>
                <p className="text-slate-300 text-[12px] leading-relaxed">{p.desc}</p>
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

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 h-full min-h-[500px]">
                <Image
                  src="/16.webp"
                  alt="Center Rules and Guidelines"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
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

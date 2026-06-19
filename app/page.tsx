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
  Heart,
  Zap,
  Star,
  Smile,
  PhoneCall
} from "lucide-react";

const slides = [
  { img: "/1.webp", title: "Begin Your Path to Healing", subtitle: "Comprehensive addiction treatment & mental health support tailored for you." },
  { img: "/2.webp", title: "A Supportive Environment", subtitle: "24/7 residential care and professional guidance in a safe haven." },
  { img: "/3.webp", title: "Restore Your Hope", subtitle: "Specialized therapy programs designed for long-term recovery and peace." },
  { img: "/4.webp", title: "Empower Your Future", subtitle: "Wellness programs and holistic recovery for a drug-free life." },
];

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setDisplayValue(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center text-center p-11 rounded-[3rem] bg-brand-secondary/[0.03] border border-brand-secondary/10 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-secondary/20 transition-all group hover:-translate-y-3"
    >
      <div className={`w-20 h-20 rounded-3xl ${stat.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${stat.color}`}>
        {stat.icon}
      </div>
      <h3 className="text-5xl font-bold mb-3 text-slate-900 tracking-tight">
        {displayValue}{stat.suffix}
      </h3>
      <p className="text-sm font-semibold text-slate-500 tracking-widest uppercase leading-none">{stat.label}</p>
    </motion.div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Slider */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].img}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-width-container w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block bg-brand-secondary/20 backdrop-blur-md text-brand-secondary font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 text-xs md:text-sm border border-brand-secondary/30">
                  Welcome to Jeevan Parivartan
                </span>
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  key={`sub-${currentSlide}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-medium"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    href="/contact"
                    className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-brand-secondary transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
                  >
                    Get Help Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all text-center"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-12 right-12 z-20 flex flex-col gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? "bg-brand-secondary w-12" : "bg-white/30 w-6 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>



      {/* Featured Stats */}
      <section className=" py-24">
        <div className="max-width-container ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { label: "Recovery Rate", value: 98, suffix: "%", icon: <CheckCircle2 />, color: "text-blue-600", bg: "bg-blue-50" },
              { label: "Active Care", value: 24, suffix: "/7", icon: <ShieldCheck />, color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Success Stories", value: 5000, suffix: "+", icon: <HeartPulse />, color: "text-rose-600", bg: "bg-rose-50" },
              { label: "Expert Doctors", value: 25, suffix: "+", icon: <UserRoundCheck />, color: "text-indigo-600", bg: "bg-indigo-50" },
            ].map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - One Large Image with Reveal */}
      <section className="section-padding bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[1rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[5/4.5] border border-white/20">
                <Image src="/5.webp" alt="Rehabilitation Center" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-brand-primary p-12 rounded-[2.5rem] shadow-3xl z-20 text-white hidden md:block"
              >
                <p className="text-5xl font-bold mb-1 tracking-tighter">10+</p>
                <p className="text-sm font-semibold opacity-80 uppercase tracking-widest leading-none">Years Service</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <span className="text-brand-secondary font-bold text-sm mb-6 block tracking-wide">Our Rehabilitation Goal</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 leading-[1.1] text-slate-900 tracking-tight">Dedicated to your lasting recovery</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                At Jeevan Parivartan Nasha Mukti Kendra, we believe every individual has the strength to overcome addiction. Our center provides a safe haven where healing begins, supported by medical excellence and deep emotional care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14 font-semibold text-slate-700">
                <div className="flex items-center gap-4 hover:text-brand-primary transition-colors cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                  Evidence-Based Therapy
                </div>
                <div className="flex items-center gap-4 hover:text-brand-primary transition-colors cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                  Medical Detox Protocols
                </div>
                <div className="flex items-center gap-4 hover:text-brand-primary transition-colors cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                  Group Support Sessions
                </div>
                <div className="flex items-center gap-4 hover:text-brand-primary transition-colors cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                  Holistic Wellness Programs
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-black transition-all shadow-xl active:scale-95">
                More About Our Mission <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Staggered Reveal */}
      <section className="section-padding bg-white relative">
        <div className="max-width-container">
          <div className="text-center mb-24">
            <span className="text-brand-secondary font-bold text-sm mb-4 block tracking-wide">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">How we help you heal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            {[
              { step: "01", title: "Assessment", desc: "Detailed physical and psychological evaluation by our expert team.", icon: <Stethoscope /> },
              { step: "02", title: "Detoxification", desc: "Supervised medical detox to safely manage withdrawal symptoms.", icon: <Sparkles /> },
              { step: "03", title: "Rehabilitation", desc: "Intensive counseling, group therapy, and community support.", icon: <Users /> },
              { step: "04", title: "Aftercare", desc: "Ongoing monitoring and relapse prevention for long-term sobriety.", icon: <Sun /> },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative group"
              >
                <div className="text-8xl font-black text-[#f1f5f9] absolute -top-16 -left-6 group-hover:text-brand-secondary/5 transition-colors z-0 tracking-tighter select-none">
                  {p.step}
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-brand-primary shadow-sm border border-slate-50 group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                    {p.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{p.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities - Side Revels */}
      <section className="section-padding bg-[#0f172a] text-white overflow-hidden">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <span className="text-brand-secondary font-bold text-sm mb-4 block tracking-wide">Our Environment</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Modern facilities for best care</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Link href="/gallery" className="bg-white/10 hover:bg-white/20 px-10 py-4 rounded-2xl font-bold text-base border border-white/10 transition-all active:scale-95">
                View Gallery
              </Link>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[10, 11, 12].map((imgNum, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className={`space-y-10 ${i === 1 ? "pt-16" : ""}`}
              >
                <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl">
                  <Image src={`/${imgNum}.webp`} alt="Facility" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 tracking-tight">
                        {i === 0 ? "Yoga & Meditation" : i === 1 ? "Hygienic Dining" : "Peaceful Suites"}
                      </h4>
                      <p className="text-slate-400 font-medium">Focused on mental and physical rejuvenation.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Reveal */}
      <section className="section-padding bg-white">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <Image src="/13.webp" alt="Professional Care" width={800} height={900} className="rounded-[4rem] shadow-2xl w-full object-cover aspect-square border border-slate-100" />
                <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-brand-secondary/10 rounded-full blur-[60px] -z-10" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <span className="text-brand-secondary font-bold text-sm mb-6 block tracking-wide">Proven Outcomes</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12 leading-[1.1] tracking-tight">Why families choose Jeevan Parivartan?</h2>
              <div className="space-y-12">
                {[
                  { title: "24/7 Professional Supervision", desc: "Constant medical and psychological monitoring by certified experts.", icon: <Shield /> },
                  { title: "Personalized Care Plans", desc: "We design unique recovery journeys tailored to specific needs.", icon: <UserRoundCheck /> },
                  { title: "Holistic Healing Approach", desc: "Equilibrium for mind, body, and soul through yoga and meditation.", icon: <Sparkles /> },
                  { title: "Relapse Prevention Support", desc: "Lifetime follow-ups and group sessions to ensure lasting sobriety.", icon: <Clock /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="shrink-0 w-16 h-16 bg-[#f8fafc] rounded-[1.5rem] flex items-center justify-center text-brand-primary border border-slate-50 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anxiety and Depression Comprehensive Section */}
      <section className="bg-gray-200 py-20 relative overflow-hidden">
        <div className="max-width-container">
          {/* Top Branding Section matching screenshot */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-24 h-24 rounded-full border-4 border-[#0b4d24] flex items-center justify-center p-4 mb-4 bg-white shadow-xl">
              <Sun className="w-12 h-12 text-[#0b4d24]" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0b4d24] leading-tight mb-2">जीवन परिवर्तन <br className="md:hidden" /> नशामुक्ति केंद्र</h2>
            <p className="text-xl md:text-2xl font-bold text-slate-700">हमारा संकल्प – नशामुक्त समाज, स्वस्थ समाज</p>
          </div>

          {/* Main Title Banner */}
          <div className="bg-[#0b4d24] text-white rounded-3xl p-8 mb-16 text-center shadow-lg transform hover:scale-[1.01] transition-transform">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">एंजाइटी और डिप्रेशन</h2>
            <p className="text-xl md:text-2xl opacity-90">आप अकेले नहीं हैं, हम आपके साथ हैं।</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column: Problems */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="bg-slate-100/80 p-4 rounded-2xl inline-block mb-4">
                <h3 className="text-xl font-bold text-slate-800">क्या आप इन समस्याओं से जूझ रहे हैं?</h3>
              </div>
              {[
                { text: "लगातार चिंता और परेशानी", icon: <Frown className="w-6 h-6" /> },
                { text: "उदासी, अकेलापन और निराशा", icon: <Activity className="w-6 h-6" /> },
                { text: "थकान, ऊर्जा की कमी और नींद न आना", icon: <BatteryLow className="w-6 h-6" /> },
                { text: "घबराहट, बेचैनी, घुटन और डर", icon: <Activity className="w-6 h-6" /> },
                { text: "आत्मविश्वास की कमी और नकारात्मक विचार", icon: <TrendingDown className="w-6 h-6" /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="font-bold text-slate-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Middle Image Column */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/mental_health_transformation.png"
                alt="Mental Health Transformation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Right Column: Solutions */}
            <div className="space-y-8 order-3 text-right">
              <div className="bg-[#0b4d24]/10 p-4 rounded-2xl inline-block mb-4">
                <h3 className="text-xl font-bold text-[#0b4d24]">हम कैसे आपकी मदद करते हैं?</h3>
              </div>
              {[
                { text: "विशेषज्ञ काउंसिलिंग और मनोचिकित्सा", icon: <UserRoundCheck className="w-6 h-6" /> },
                { text: "योग, ध्यान और माइंडफुलनेस थेरेपी", icon: <Wind className="w-6 h-6" /> },
                { text: "सकारात्मक माहौल और ग्रुप थेरेपी", icon: <Users className="w-6 h-6" /> },
                { text: "संतुलित आहार और स्वस्थ जीवनशैली", icon: <Leaf className="w-6 h-6" /> },
                { text: "जीवन में लक्ष्य, नई दिशा और आत्मविश्वास", icon: <Target className="w-6 h-6" /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group flex-row-reverse"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0b4d24] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className=" font-bold text-slate-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 mb-16">
            <p className="text-2xl font-bold text-slate-800">
              उम्मीद है... बदलाव संभव है... और हम आपके साथ हैं।
            </p>
          </div>

          {/* Bottom Features Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { text: "अनुभवी और प्रशिक्षित स्टाफ", icon: <Award className="w-8 h-8" /> },
              { text: "सुरक्षित, स्वच्छ और शांत वातावरण", icon: <HomeIcon className="w-8 h-8" /> },
              { text: "व्यक्तिगत देखभाल और पूर्ण गोपनीयता", icon: <Lock className="w-8 h-8" /> },
              { text: "24x7 देखभाल और सहयोग", icon: <Clock className="w-8 h-8" /> },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                <div className="text-[#0b4d24] mb-4">{item.icon}</div>
                <p className="font-bold text-slate-800">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Dark Green Banner with Circles */}
          <div className="bg-[#0b4d24] text-white rounded-[1rem] p-12 mb-16 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-white/20" />
            <h3 className="text-1xl md:text-2xl font-bold text-center mb-8">नशा मुक्त जीवन की ओर पहला कदम बढ़ाएं – हम हैं आपके साथ हर कदम पर।</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { text: "मानसिक शांति और स्थिरता", icon: <Wind className="w-8 h-8" /> },
                { text: "बेहतर रिश्ते और सामाजिक जीवन", icon: <Heart className="w-8 h-8" /> },
                { text: "आत्मविश्वास और सकारात्मक सोच", icon: <Zap className="w-8 h-8" /> },
                { text: "उज्जवल भविष्य और सफलता", icon: <Star className="w-8 h-8" /> },
                { text: "स्वस्थ शरीर, स्वस्थ मन, सुखी जीवन", icon: <Smile className="w-8 h-8" /> },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <p className="text-sm font-bold leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Bar */}
          <div className="bg-blue-100 text-[#0b4d24] rounded-full p-5 flex flex-col md:flex-row items-center justify-between px-12 shadow-xl">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-12 h-12  border-[#0b4d24] flex items-center justify-center">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider">अभी संपर्क करें:</p>
                <p className="text-4xl font-black">8423667868</p>
              </div>
            </div>
            <p className="text-xl font-bold text-center md:text-right">जीवन को नई दिशा दें हमारे साथ परिवर्तन की शुरुआत करें।</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-24 bg-red-100 relative overflow-hidden">
        <div className="max-width-container text-center relative z-10 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-black font-bold mb-10 leading-tight tracking-tight"
          >
            Your transformation starts with <br /> a single phone call.
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:08423667868"
              className="bg-white text-brand-primary px-12 py-6 rounded-[2rem] font-bold text-xl shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" /> Call 084236 67868
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="bg-brand-secondary text-white px-12 py-6 rounded-[2rem] font-bold text-xl shadow-2xl block">
                Book Admission
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[50px] border-white/5 rounded-full -mr-64 -mt-64" />
      </section>
    </div>
  );
}

"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Heart, Target, Award, CheckCircle2, History, Sparkles, MapPin, Phone } from "lucide-react";

// Animated Counter Component
const CounterValue = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function AboutPage() {
  const values = [
    {
      title: "Compassion",
      desc: "We treat every individual with empathy, dignity, and respect throughout their recovery process.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Integrity",
      desc: "Our programs are ethical, transparent, and focused solely on the wellbeing of our patients.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Excellence",
      desc: "We maintain the highest standards of medical care and psychological therapy.",
      icon: <Award className="w-6 h-6" />,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Community",
      desc: "We believe in the power of a supportive environment and family involvement.",
      icon: <Users className="w-6 h-6" />,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Banner - Slide Down */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/1.webp" alt="About Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-brand-accent/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-secondary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Our Legacy</span>
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Restoring Lives, <span className="text-brand-secondary">Rebuilding Hope</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-2xl mx-auto opacity-90">
              Leading the way in personalized addiction recovery with over a decade of clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Counting Animation */}
      <section className="py-12 bg-brand-accent/20 border-y border-slate-100">
        <div className="max-width-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: 10, suffix: "+" },
              { label: "Successful Recoveries", value: 1000, suffix: "+" },
              { label: "Expert Doctors", value: 15, suffix: "+" },
              { label: "Success Rate", value: 95, suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-black mb-1">
                  <CounterValue value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[12px] font-bold text-black tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section - Professional Reveal */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden shadow-2xl border-2 border-white group">
                <Image
                  src="/10.webp"
                  alt="Dr. Jyoti Pal - Director"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-1">Dr. Jyoti Pal</h3>
                  <p className="text-brand-secondary font-bold text-xs uppercase tracking-[0.3em]">Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-brand-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block opacity-70">Leadership</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                A Visionary Guide in <span className="text-brand-primary">Recovery & Wellness</span>
              </h2>
              <div className="space-y-6 text-slate-700">
                <p className="text-lg font-medium leading-relaxed italic border-l-4 border-brand-secondary pl-6 mb-8">
                  "Our mission is not just treatment, but true transformation. We believe in restoring the dignity and health of every individual who walks through our doors."
                </p>
                <p className="text-base leading-relaxed mb-6 font-medium font-bold">
                  Dr. Jyoti Pal, as the Director of Jeevan Parivartan, brings years of dedication to mental health and addiction recovery. Her leadership ensures that our center remains a sanctuary of hope, clinical excellence, and compassionate care.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <p className="text-brand-primary font-bold text-xl mb-1">10+ Years</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Clinical Leadership</p>
                  </div>
                  <div>
                    <p className="text-brand-primary font-bold text-xl mb-1">24/7</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Expert Oversight</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy - Slide Left/Right */}

      {/* History Timeline - Alternating Left/Right */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-width-container relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">The Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Decade of Impact</h2>
          </div>

          <div className="space-y-20">
            {[
              {
                title: "Clinical Expansion & Advanced Medical Care",
                desc: "Over the years, Jeevan Parivartan has continuously modernized its medical infrastructure to stay at the forefront of addiction medicine. We integrated advanced psychiatric therapies, brought in specialized neurological assessment tools, and expanded our team of expert clinicians. Our evidence-based treatment protocols now encompass dual-diagnosis care, trauma-informed therapy, and next-generation relapse prevention — ensuring every patient receives the most comprehensive care possible.",
                highlights: ["Advanced Psychiatric Unit", "Dual-Diagnosis Treatment", "Expert Clinical Team", "Evidence-Based Protocols"],
                image: "/11.webp", side: "right", step: "01", bg: "bg-amber-50/50", border: "border-amber-100"
              },
              {
                title: "State-of-the-Art Bio-Centric Campus",
                desc: "We launched our flagship residential recovery campus — a bio-centric sanctuary designed to heal body, mind, and spirit. The campus features premium residential suites, meditation gardens, therapeutic recreation zones, a fully equipped clinical wing, and state-of-the-art counseling rooms. Every design element was intentionally crafted to create a calm, healing atmosphere that supports the recovery journey from day one to long-term aftercare.",
                highlights: ["Premium Residential Suites", "Meditation & Yoga Zone", "Therapeutic Recreation", "24/7 Clinical Monitoring"],
                image: "/12.webp", side: "left", step: "02", bg: "bg-indigo-50/50", border: "border-indigo-100"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${step.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-20 p-8 md:p-14 rounded-[3rem] ${step.bg} border ${step.border} relative overflow-hidden`}
              >
                <motion.div
                  initial={{ opacity: 0, x: step.side === "left" ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: step.side === "left" ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 space-y-6"
                >
                  <span className="text-5xl md:text-7xl font-bold text-slate-200 block leading-none">{step.step}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight">{step.title}</h3>
                  <p className="text-slate-700 text-base leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {step.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-center gap-2 text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary shrink-0" />
                        <span className="text-xs font-bold tracking-wide">{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/60 rounded-full blur-3xl -mr-20 -mt-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Sliding Up & Soft Indigo Background */}
      <section className="section-padding bg-indigo-50/30 border-y border-indigo-50">
        <div className="max-width-container">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-3 block">Our Core DNA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Values That Guide Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-primary/20 transition-all group shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center ${v.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900 tracking-tight">{v.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline - Alternating Left/Right */}
      <section className="section-padding bg-white">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden h-64 mt-8 border border-slate-100">
                <Image src="/8.webp" alt="Facility" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-72 border border-slate-100">
                <Image src="/9.webp" alt="Counseling" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-brand-secondary font-bold text-[10px] mb-4 block tracking-[0.3em] uppercase">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 tracking-tight">
                Holistic Healing for a <span className="text-brand-primary">Drug-Free Life</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Physical Stabilization", text: "Medically supervised detox ensuring safe withdrawal." },
                  { title: "Mental Restoration", text: "Expert psychiatric support to heal root traumas." },
                  { title: "Social Integration", text: "Tools for returning to society with permanent strength." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-primary/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-800 text-xs font-bold leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Final Section */}
      <section className="py-16 bg-white">
        <div className="max-width-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Your Transformation Begins Today.</h2>
              <p className="text-slate-300 text-base font-medium max-w-xl">Join the thousands who have reclaimed their lives at Jeevan Parivartan.</p>
            </div>
            <Link href="/contact" className="bg-brand-secondary text-brand-primary px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

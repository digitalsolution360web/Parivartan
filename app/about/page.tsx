"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Heart, Target, Award, CheckCircle2, History, Sparkles } from "lucide-react";

const Counter = ({ stat }: { stat: any }) => {
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
    <div ref={ref} className="group cursor-default">
      <p className="text-4xl font-bold text-slate-900 mb-1 group-hover:text-brand-secondary transition-colors duration-300">
        {displayValue}{stat.suffix}
      </p>
      <p className="text-slate-500 font-bold text-sm tracking-wide uppercase">{stat.label}</p>
    </div>
  );
};

export default function AboutPage() {
  const values = [
    {
      title: "Compassion",
      desc: "We treat every individual with empathy, dignity, and respect throughout their recovery process.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-rose-500/10 text-rose-500"
    },
    {
      title: "Integrity",
      desc: "Our programs are ethical, transparent, and focused solely on the wellbeing of our patients.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Excellence",
      desc: "We maintain the highest standards of medical care and psychological therapy.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-amber-500/10 text-amber-500"
    },
    {
      title: "Community",
      desc: "We believe in the power of a supportive environment and family involvement.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-emerald-500/10 text-emerald-500"
    },
  ];

  const stats = [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Successful Recoveries", value: 1000, suffix: "+" },
    { label: "Expert Doctors", value: 15, suffix: "+" },
    { label: "Success Rate", value: 95, suffix: "%" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Breadcrumb Hero Banner */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/1.webp" alt="About Us Banner" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
              About <span className="text-teal-500">us</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Empowering lives and restoring futures through compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Banner with Background Image */}


      {/* Philosophy Section */}
      <section className="section-padding overflow-hidden">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden h-64 mt-12"
              >
                <Image src="/8.webp" alt="Facility" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden h-80"
              >
                <Image src="/9.webp" alt="Counseling" fill className="object-cover" />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 tracking-tight text-slate-900 leading-tight">

                <span className="text-brand-secondary underline decoration-brand-secondary/20 underline-offset-8">Holistic</span> Healing for the Whole Self
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Physical Detoxification", text: "Medical supervised processes to safely clear metabolic waste." },
                  { title: "Psychological Support", text: "Expert psychiatric care to address root causes of addiction." },
                  { title: "Social Reintegration", text: "Building tools for a successful return to family and society." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-3xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Values Grid */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-width-container relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-secondary font-bold text-sm tracking-[0.2em] uppercase mb-4 block"
            >
              Our Foundation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold tracking-tight text-white"
            >
              The Dna of our care
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 rounded-[1rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-16 h-16 rounded-[1.25rem] ${v.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium transition-colors group-hover:text-slate-300">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-gray-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

        <div className="max-width-container relative z-10">
          <div className="text-center mb-24">

            <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900 leading-tight">
              A Decade of <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-slate-500 font-bold text-sm max-w-2xl mx-auto  tracking-widest opacity-80">Tracing our footsteps from a dream to reality.</p>
          </div>

          <div className="max-w-8xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-slate-200 to-transparent md:-translate-x-1/2" />

            <div className="space-y-32">
              {[
                { title: "The Foundation", desc: "Started with a vision to provide specialized addiction care for the region, focusing on manual detoxification and family counseling.", image: "/10.webp", color: "from-blue-500 to-cyan-500" },
                { title: "Clinical Breakthroughs", desc: "Modernized our medical facilities and integrated evidence-based psychiatric therapies into our core recovery programs.", image: "/11.webp", color: "from-emerald-500 to-teal-500" },
                { title: "Expanding the Mission", desc: "Launched our state-of-the-art campus designed specifically for residential recovery, with capacity for over 50 patients.", image: "/12.webp", color: "from-amber-500 to-orange-500" },
                { title: "Holistic Health Leader", desc: "Now recognized as the region's premier de-addiction center, specializing in dual-diagnosis and community reintegration.", image: "/13.webp", color: "from-brand-secondary to-indigo-600" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-32 relative`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-secondary shadow-[0_0_20px_rgba(37,99,235,0.4)] z-20" />

                  {/* Content Card */}
                  <div className={`flex-1 w-full text-left ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block"
                    >
                      {/* <span className={`text-7xl md:text-8xl font-black text-slate-100 mb-6 block leading-none`}>{step.year}</span> */}
                      <div className={`bg-white p-10 rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative group overflow-hidden`}>
                        <div className={`absolute top-0 ${i % 2 === 0 ? "right-0" : "left-0"} w-2 h-full bg-gradient-to-b ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <h3 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">{step.title}</h3>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Card */}
                  <div className="flex-1 w-full group/main transform hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden shadow-2xl border-2 border-white">
                      <Image src={step.image} alt={step.title} fill className="object-cover transition-transform duration-1000 group-hover/main:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/main:opacity-100 transition-all duration-500 flex items-end p-10">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-full text-center">
                          <span className="font-bold text-white text-lg">Impactful Recovery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-width-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[1rem] p-5 md:p-15 text-center relative overflow-hidden"
          >
            {/* Shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 tracking-tight">Your transformation begins today.</h2>
              <p className="text-white/70 text-xl font-medium mb-12">Take the first courageous step towards a clean, fulfilling life. Our team is ready to walk with you.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="/contact" className="px-5 py-4 bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-2xl font-bold transition-all shadow-xl hover:shadow-brand-secondary/20 hover:-translate-y-1">
                  Start Your Journey
                </a>
                <a href="tel:+911234567890" className="px-5 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold transition-all backdrop-blur-sm">
                  Call Emergency Helpline
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

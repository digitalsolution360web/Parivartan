"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Award, GraduationCap, Clock, Phone } from "lucide-react";
import Link from "next/link";

const Linkedin = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function DoctorPage() {
  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Senior Psychiatrist & Founder",
      qualification: "MD in Psychiatry, MBBS",
      experience: "15+ Years",
      img: "/15.webp",
      bio: "Dr. Sharma is a visionary in the field of addiction medicine. He has pioneered several holistic rehabilitation protocols that are followed across northern India.",
      side: "left"
    },
    {
      name: "Dr. Ananya Verma",
      role: "Lead Clinical Psychologist",
      qualification: "Ph.D. in Clinical Psychology",
      experience: "12+ Years",
      img: "/16.webp",
      bio: "Dr. Verma specializes in Trauma-Informed CBT and neuro-rehabilitation. She leads our counseling wing with a focus on deep psychological restoration.",
      side: "right"
    },
    {
      name: "Mr. Sunil Kumar",
      role: "Chief Addiction Expert",
      qualification: "M.Sc. in Psychology",
      experience: "10+ Years",
      img: "/14.webp",
      bio: "Sunil has a deep clinical understanding of the recovery process. He works one-on-one with patients to develop impenetrable relapse prevention strategies.",
      side: "left"
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Header Banner - Slide Down */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/4.webp" alt="Medical Team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-brand-accent/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-secondary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Our Elite Team</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Qualified Medical <span className="text-brand-secondary">Leadership</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-2xl mx-auto opacity-90">
              Guided by the region's most experienced psychiatrists and addiction specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr. Jyoti Pal - Director Profile */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-width-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row border border-slate-100 hover:shadow-xl transition-all group"
          >
            <div className="lg:w-[42%] relative min-h-[500px] overflow-hidden">
              <Image src="/10.webp" alt="Dr. Jyoti Pal" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <p className="text-brand-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-1">Director</p>
                  <p className="text-white text-xl font-bold tracking-tight">Dr. Jyoti Pal</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[58%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-0.5 bg-brand-secondary" />
                <span className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest">Founder & Director</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-none">Dr. Jyoti Pal</h2>

              <div className="flex flex-wrap gap-6 mb-8 border-y border-slate-100 py-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-brand-primary" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">M.Sc. in Psychology & Rehabilitation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-primary" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">10+ Years Experience</span>
                </div>
              </div>

              <div className="space-y-5 mb-10">
                <p className="text-slate-700 text-base leading-relaxed font-medium italic border-l-4 border-brand-secondary pl-5">
                  "Our mission is not just treatment, but true transformation. We believe in restoring the dignity and health of every individual who walks through our doors."
                </p>
                <p className="text-slate-700 text-base leading-relaxed">
                  Dr. Jyoti Pal is the visionary founder and Director of Jeevan Parivartan Nasha Mukti Kendra. With over a decade of dedicated service in the field of mental health and addiction recovery, she has transformed hundreds of lives through compassionate, evidence-based care. Her leadership is rooted in the belief that every individual deserves a second chance at a dignified, sober life.
                </p>
                <p className="text-slate-700 text-base leading-relaxed">
                  Under Dr. Pal's guidance, Jeevan Parivartan has grown into one of the most trusted de-addiction centers in Uttar Pradesh, offering a holistic blend of medical detoxification, psychiatric support, individual therapy, and long-term aftercare programs. She personally oversees all clinical protocols to ensure the highest standards of care and patient safety.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-primary mb-1">10+</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Years of Service</p>
                </div>
                <div className="text-center border-x border-slate-200">
                  <p className="text-2xl font-bold text-brand-primary mb-1">1000+</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Lives Transformed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-primary mb-1">95%</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Success Rate</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="tel:08423667868" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-lg">
                  <Phone className="w-4 h-4" /> Consult Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - Soft Amber Background */}
      <section className="section-padding bg-[#FFFBF0] border-y border-amber-100">
        <div className="max-width-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Clinical Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Built on Scientific Integrity</h2>
            <div className="h-1 w-20 bg-brand-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Neuro-Tailored Care", desc: "Our doctors design treatments based on the latest neurological addiction research.", icon: <Award className="w-6 h-6"/> },
              { title: "Patient-Centricity", desc: "Every clinical decision is made with the patient's individual dignity and history in mind.", icon: <Target className="w-6 h-6"/> },
              { title: "Constant Vigilance", desc: "Medical monitoring is active 24/7 during the critical neural stabilization phases.", icon: <ShieldCheck className="w-6 h-6"/> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white/50 rounded-2xl border border-amber-50 group hover:bg-white transition-all shadow-sm"
              >
                <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary mb-6 mx-auto group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-[11px] font-semibold leading-relaxed opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Closing Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="max-width-container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-accent text-white rounded-3xl p-10 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="relative z-10 w-full md:w-auto">
              <span className="text-brand-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Get Expert Help</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">Ready for a Clinical Consultation?</h2>
              <p className="text-slate-300 text-sm font-medium max-w-lg mb-0">Our medical team is ready to guide you towards a brighter, clinical recovery path.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
              <Link href="/contact" className="bg-brand-secondary text-brand-primary px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white text-center transition-all shadow-xl">
                Consult With Doctor
              </Link>
              <a href="tel:08423667868" className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 text-center transition-all">
                Call Helpline
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const Target = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

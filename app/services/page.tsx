"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Stethoscope,
  MessagesSquare,
  UserPlus,
  Home as HomeIcon,
  Users,
  Activity,
  Sprout,
  Zap,
  GraduationCap,
  LifeBuoy,
  Utensils,
  Car,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "1. Assessment & Diagnosis",
    icon: <ClipboardCheck className="w-6 h-6" />,
    items: ["Comprehensive addiction profiling", "Psychiatric evaluation", "Physical health screening", "Personalized treatment maps"],
  },
  {
    title: "2. Clinical Detoxification",
    icon: <Stethoscope className="w-6 h-6" />,
    items: ["Medically supervised protocols", "Withdrawal management", "24/7 clinical monitoring", "Biological stabilization"],
  },
  {
    title: "3. Intensive Counseling",
    icon: <MessagesSquare className="w-6 h-6" />,
    items: ["Individual depth therapy", "Cognitive Behavioral Therapy", "Relapse prevention training", "Trauma-informed support"],
  },
  {
    title: "4. Psychiatric Support",
    icon: <UserPlus className="w-6 h-6" />,
    items: ["Medication management", "Dual-diagnosis treatment", "Mental health restoration", "Emotional equilibrium care"],
  },
  {
    title: "5. Residential Rehab",
    icon: <HomeIcon className="w-6 h-6" />,
    items: ["Safe sanctuary living", "Structured discipline", "Therapeutic community", "Life skills rebuilding"],
  },
  {
    title: "6. Family Restoration",
    icon: <Users className="w-6 h-6" />,
    items: ["Relationship restoration", "Family education days", "Caregiver support", "Healing the home unit"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Banner - Slide Down */}
      <section className="relative h-[25vh] md:h-[45vh] min-h-[240px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/3.webp" alt="Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-brand-accent/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-secondary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Our Expertise</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Clinical <span className="text-brand-secondary">Excellence</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-2xl mx-auto opacity-90">
              A comprehensive spectrum of recovery services designed for permanent transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Staggered Entry Animation & Gray Background */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-primary/20 transition-all shadow-sm group"
              >
                <div className="w-12 h-12 bg-brand-primary/5 text-brand-primary rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-7 tracking-tight border-b border-slate-100 pb-4">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-semibold leading-relaxed">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities - Soft Emerald Background */}
      <section className="section-padding bg-[#ECFDF5] border-y border-emerald-100 overflow-hidden">
        <div className="max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-emerald-600 font-bold text-[10px] mb-4 block tracking-[0.3em] uppercase">Premium Care</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Luxury Healing Environment</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Bio-Centric Living", icon: <HomeIcon className="w-6 h-6" /> },
              { text: "Nutritional Support", icon: <Utensils className="w-6 h-6" /> },
              { text: "Secure Facility", icon: <ShieldCheck className="w-6 h-6" /> },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-50 flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">{f.icon}</div>
                <span className="text-sm font-bold text-slate-800 tracking-tight">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Closing Section */}
      <section className="section-padding bg-white">
        <div className="max-width-container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-accent text-white rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">Need Medical Consultation?</h2>
              <p className="text-slate-300 text-base font-medium max-w-lg mb-0">Our clinical team is available 24/7 to guide you through our specialized programs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
              <Link href="/contact" className="bg-brand-secondary text-brand-primary px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white text-center transition-all shadow-xl">
                Book Consultation
              </Link>
              <a href="tel:08423667868" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 text-center transition-all">
                Call Support
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

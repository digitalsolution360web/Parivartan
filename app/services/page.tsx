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
  ShieldCheck
} from "lucide-react";

const services = [
  {
    title: "1. Assessment & Diagnosis",
    icon: <ClipboardCheck className="w-10 h-10" />,
    items: [
      "Comprehensive addiction assessment",
      "Psychiatric evaluation",
      "Psychological assessment",
      "Physical health screening",
      "Individual treatment planning"
    ]
  },
  {
    title: "2. Detoxification Services",
    icon: <Stethoscope className="w-10 h-10" />,
    items: [
      "Medically supervised detoxification",
      "Withdrawal symptom management",
      "Medication-assisted treatment (where appropriate)",
      "24/7 medical monitoring"
    ]
  },
  {
    title: "3. Counseling & Therapy",
    icon: <MessagesSquare className="w-10 h-10" />,
    items: [
      "Individual counseling",
      "Group therapy sessions",
      "Cognitive Behavioral Therapy (CBT)",
      "Motivational Enhancement Therapy (MET)",
      "Relapse prevention counseling",
      "Trauma-informed therapy"
    ]
  },
  {
    title: "4. Psychiatric Services",
    icon: <UserPlus className="w-10 h-10" />,
    items: [
      "Psychiatric consultation",
      "Medication management",
      "Treatment of co-occurring mental health disorders",
      "Anxiety and depression management"
    ]
  },
  {
    title: "5. Residential Rehabilitation",
    icon: <HomeIcon className="w-10 h-10" />,
    items: [
      "Inpatient rehabilitation programs",
      "Structured daily routine",
      "Therapeutic community support",
      "Life skills training"
    ]
  },
  {
    title: "6. Family Support Services",
    icon: <Users className="w-10 h-10" />,
    items: [
      "Family counseling",
      "Family education programs",
      "Relationship restoration sessions",
      "Caregiver support groups"
    ]
  },
  {
    title: "7. Recovery & Rehabilitation Programs",
    icon: <Activity className="w-10 h-10" />,
    items: [
      "Alcohol addiction treatment",
      "Drug addiction treatment",
      "Tobacco/nicotine cessation programs",
      "Behavioral addiction counseling (gaming, internet, gambling, etc.)",
      "Dual-diagnosis treatment"
    ]
  },
  {
    title: "8. Wellness & Holistic Care",
    icon: <Sprout className="w-10 h-10" />,
    items: [
      "Yoga and meditation",
      "Stress management programs",
      "Physical fitness activities",
      "Nutritional counseling",
      "Mindfulness training"
    ]
  },
  {
    title: "9. Aftercare & Relapse Prevention",
    icon: <LifeBuoy className="w-10 h-10" />,
    items: [
      "Follow-up counseling",
      "Alumni support groups",
      "Recovery monitoring",
      "Relapse prevention planning",
      "Tele-counseling support"
    ]
  },
  {
    title: "10. Community & Educational Programs",
    icon: <GraduationCap className="w-10 h-10" />,
    items: [
      "Awareness workshops",
      "School and college outreach programs",
      "Corporate de-addiction awareness sessions",
      "Community support meetings"
    ]
  },
  {
    title: "11. Emergency & Crisis Support",
    icon: <Zap className="w-10 h-10" />,
    items: [
      "Crisis intervention",
      "Suicide risk assessment and support",
      "Emergency referral services"
    ]
  }
];

const facilities = [
  { text: "24/7 Residential care", icon: <ShieldCheck /> },
  { text: "Safe and secure accommodation", icon: <ShieldCheck /> },
  { text: "Recreational activities", icon: <ShieldCheck /> },
  { text: "Healthy meals and nutrition support", icon: <Utensils /> },
  { text: "Transportation assistance", icon: <Car /> },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary pt-44 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[50px] border-white rounded-full -mr-64 -mt-64" />
        </div>
        <div className="max-width-container text-center relative z-10 text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-4xl lg:text-3xl font-bold mb-8 tracking-tight"
          >
            Our Professional Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto font-medium leading-relaxed opacity-90"
          >
            Comprehensive addiction treatment and rehabilitation services tailored to your unique journey.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.8 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col group hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-brand-primary/5 text-brand-primary rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-8 text-slate-900 border-b border-slate-50 pb-6 tracking-tight leading-tight">{service.title}</h3>
                <ul className="space-y-4 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-600 text-[15px] font-medium leading-relaxed">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2.5 shrink-0 shadow-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-[#0f172a] text-white overflow-hidden relative">
        <div className="max-width-container">
          <div className="text-center mb-24 relative z-10">
            <span className="text-brand-secondary font-bold text-sm mb-6 block tracking-wide">Our Quality Standards</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Additional Premium Facilities</h2>
            <p className="text-slate-400 max-w-3xl mx-auto font-medium text-lg leading-relaxed">Providing a safe, comfortable, and nurturing environment for your recovery journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] text-center flex flex-col items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all group shadow-2xl"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-secondary mb-8 shadow-xl group-hover:scale-110 group-hover:bg-white transition-all">
                  {facility.icon}
                </div>
                <span className="text-sm font-bold tracking-tight">{facility.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-width-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-slate-900 leading-tight tracking-tight">Need more detailed information?</h2>
          <p className="text-slate-500 mb-14 text-lg font-medium max-w-3xl mx-auto leading-relaxed">Contact our 24/7 helpdesk for a detailed consultation about our treatment programs and admission process.</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:08423667868"
            className="inline-block bg-brand-primary text-white px-14 py-6 rounded-full font-bold text-lg shadow-[0_20px_50px_rgba(30,58,138,0.3)]"
          >
            Call 24/7 Helpline: 084236 67868
          </motion.a>
        </div>
      </section>
    </div>
  );
}

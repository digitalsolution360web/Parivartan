"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Award, GraduationCap, Clock } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

export default function DoctorPage() {
  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Senior Psychiatrist & Founder",
      qualification: "MD in Psychiatry, MBBS",
      experience: "15+ Years",
      img: "/15.webp",
      bio: "Dr. Sharma is a visionary in the field of addiction medicine. With over 15 years of experience, he has pioneered several holistic rehabilitation protocols that are followed nationwide."
    },
    {
      name: "Dr. Ananya Verma",
      role: "Lead Clinical Psychologist",
      qualification: "Ph.D. in Clinical Psychology",
      experience: "12+ Years",
      img: "/16.webp",
      bio: "Dr. Verma specializes in Cognitive Behavioral Therapy and trauma-informed care. She leads our counseling department with a focus on long-term behavioral changes."
    },
    {
      name: "Mr. Sunil Kumar",
      role: "Senior Addiction Counselor",
      qualification: "M.Sc. in Psychology",
      experience: "10+ Years",
      img: "/14.webp",
      bio: "Sunil has a deep understanding of the recovery process. He works closely with patients to develop relapse prevention strategies and life skills."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-green-100 pt-40 pb-24 border-b border-slate-100 font-bold">
        <div className="max-width-container text-center font-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-secondary font-black tracking-widest text-sm mb-4 block"
          >
            Meet Our Experts
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-4xl font-bold text-slate-900 mb-5"
          >
            Qualified Medical <span className="text-brand-primary">Team</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-bold"
          >
            Our team consists of highly experienced psychiatrists, clinical psychologists, and addiction specialists dedicated to your recovery.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="max-width-container">
          <div className="grid grid-cols-1 gap-12">
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col lg:flex-row hover:shadow-2xl transition-all border border-slate-100"
              >
                <div className="lg:w-1/3 relative h-[400px] lg:h-auto overflow-hidden group">
                  <Image src={doc.img} alt={doc.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bold to-transparent flex items-end p-8">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center">
                  <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-2 block">{doc.role}</span>
                  <h2 className="text-2xl md:text-4xl font-bold  mb-6 text-slate-900">{doc.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-3 text-slate-700">
                      <GraduationCap className="w-6 h-6 text-brand-primary" />
                      <span className="font-bold uppercase tracking-wider text-sm">{doc.qualification}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <Clock className="w-6 h-6 text-brand-primary" />
                      <span className="font-bold uppercase tracking-wider text-sm">{doc.experience} Experience</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                    {doc.bio}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Psychiatry</span>
                    <span className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Addiction Medicine</span>
                    <span className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Therapy</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-gray-300 text-black overflow-hidden relative">
        <div className="max-width-container relative z-10 font-bold">
          <div className="text-center mb-16 font-bold">
            <h2 className="text-2xl md:text-4xl font-bold">Why Our Medical Team?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-bold">
            <div className="text-center font-bold">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto font-bold">
                <Award className="w-10 h-10 font-bold" />
              </div>
              <h3 className="text-2xl font-black mb-4 font-bold">Certified Experts</h3>
              <p className="opacity-80 font-bold">All our doctors are board-certified with specialized training in addiction psychiatry.</p>
            </div>
            <div className="text-center font-bold">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto font-bold">
                <Users className="w-10 h-10 font-bold" />
              </div>
              <h3 className="text-2xl font-black mb-4 font-bold">Patient-First Approach</h3>
              <p className="opacity-80 font-bold">We focus on personalized care plans that respect individual journey and pace.</p>
            </div>
            <div className="text-center font-bold">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto font-bold">
                <ShieldCheck className="w-10 h-10 font-bold" />
              </div>
              <h3 className="text-2xl font-black mb-4 font-bold">24/7 Monitoring</h3>
              <p className="opacity-80 font-bold">A medical team is always on duty to ensure safety during critical recovery phases.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

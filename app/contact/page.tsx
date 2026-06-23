"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Banner - Slide Down */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/contact_hero.webp" alt="Contact Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-brand-accent/90 backdrop-blur-[2px]" />

        <div className="relative z-10 max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-secondary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Reach Out</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Connect with our <span className="text-brand-secondary">Care Team</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-2xl mx-auto opacity-90">
              We are available 24/7 to provide guidance, support, and immediate admission assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards - Slide Up */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Direct Helpline", value: "084236 67868", icon: <Phone className="w-5 h-5" />, bg: "bg-brand-primary" },
              { title: "Support Email", value: "info@jeevan.com", icon: <Mail className="w-5 h-5" />, bg: "bg-brand-accent" },
              { title: "Center Location", value: "Lucknow, UP", icon: <MapPin className="w-5 h-5" />, bg: "bg-slate-900" },
              { title: "Availability", value: "Open 24/7", icon: <Clock className="w-5 h-5" />, bg: "bg-brand-secondary" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bg} text-white flex items-center justify-center mb-6 shadow-lg`}>
                  {card.icon}
                </div>
                <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">{card.title}</h3>
                <p className="text-slate-900 font-bold text-sm tracking-tight">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Sliding Left/Right */}
      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Form - Slides Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 tracking-tight">Direct Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-brand-primary transition-all text-sm font-medium" placeholder="Ex: Rahul Kumar" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input required type="tel" className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-brand-primary transition-all text-sm font-medium" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message Detail</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:border-brand-primary transition-all text-sm font-medium resize-none" placeholder="Tell us about the patient or your requirement..." />
                </div>
                <button
                  disabled={formStatus !== "idle"}
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-secondary transition-all disabled:opacity-50"
                >
                  {formStatus === "idle" && <><Send className="w-4 h-4" /> Finalize Inquiry</>}
                  {formStatus === "sending" && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === "sent" && <><CheckCircle2 className="w-4 h-4" /> Message Delivered</>}
                </button>
              </form>
            </motion.div>

            {/* Info & Map - Slides Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-12"
            >
              <div className="bg-brand-accent text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl border border-white/5">
                <div className="relative z-10 space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-secondary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest mb-3">Our Campus Address</h4>
                      <p className="text-sm md:text-lg font-bold leading-relaxed opacity-90">
                        GGI Rd, Harikanshgadi, Mohanlalganj,<br /> Lucknow, UP 226301
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-secondary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest mb-3">24/7 Clinical Help</h4>
                      <p className="text-sm md:text-2xl font-bold ">084236 67868</p>
                      <p className="text-sm md:text-2xl font-bold ">099361 22163</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] bg-white rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.792897003013!2d80.9658125!3d26.7190625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfbcd9f3eacd1%3A0x119034aac2d6c346!2sJeevan%20parivartan%20Nasha%20Mukti%20kendra!5e0!3m2!1sen!2sin!4v1782185566142!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

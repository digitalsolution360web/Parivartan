"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-primary pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[50px] border-white rounded-full -mr-64 -mt-64" />
        </div>
        <div className="max-width-container text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Get in <span className="text-brand-secondary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-xl max-w-2xl mx-auto font-medium"
          >
            We are here to help you 24/7. Reach out to us for any queries or to start your journey towards recovery.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Direct Call", value: "084236 67868", icon: <Phone />, color: "bg-blue-600" },
              { title: "Email Support", value: "info@jeevan.com", icon: <Mail />, color: "bg-brand-primary" },
              { title: "Location", value: "Mohanlalganj, UP", icon: <MapPin />, color: "bg-brand-accent" },
              { title: "Working Hours", value: "Open 24/7", icon: <Clock />, color: "bg-slate-900" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 hover:scale-105 transition-transform"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                  {card.icon}
                </div>
                <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-3">{card.title}</h3>
                <p className="text-slate-900 font-black text-xl">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="section-padding bg-slate-50">
        <div className="max-width-container">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Form */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-10 text-slate-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-primary focus:shadow-xl outline-none transition-all font-bold"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-primary focus:shadow-xl outline-none transition-all font-bold"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Subject</label>
                  <select className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-primary focus:shadow-xl outline-none transition-all font-black uppercase tracking-widest text-xs h-[66px]">
                    <option>Admission Inquiry</option>
                    <option>General Counseling</option>
                    <option>Family Support</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-primary focus:shadow-xl outline-none transition-all resize-none font-medium"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button 
                  disabled={formStatus !== "idle"}
                  className="w-full bg-brand-primary text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-brand-secondary transition-all disabled:opacity-50 shadow-2xl shadow-brand-primary/20"
                >
                  {formStatus === "idle" && <><Send className="w-5 h-5" /> Send Message Now</>}
                  {formStatus === "sending" && <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === "sent" && <><CheckCircle2 className="w-5 h-5" /> Message Sent Successfully!</>}
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="lg:w-1/2 space-y-16">
              <div>
                <h2 className="text-4xl font-black mb-10 text-slate-900 text-center lg:text-left">Visit Our Center</h2>
                <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 space-y-10">
                    <div className="flex gap-8">
                      <div className="shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-secondary shadow-inner">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4">Our Address</h4>
                        <p className="text-xl leading-relaxed font-bold">
                          GGI Rd, Harikanshgadi,<br />
                          Mohanlalganj, Lucknow,<br />
                          Uttar Pradesh 226301
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-secondary shadow-inner">
                        <Phone className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4">24/7 Helpline</h4>
                        <p className="text-3xl font-black">084236 67868</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-[120px] -mr-40 -mt-40" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-primary/10 rounded-full blur-[100px] -ml-30 -mb-30" />
                </div>
              </div>

              {/* Map */}
              <div className="h-[450px] bg-white rounded-[3rem] overflow-hidden border border-slate-200 relative shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.089408544078!2d80.957267!3d26.693665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQxJzM3LjIiTiA4MMKwNTcnMjYuMiJF!5e0!3m2!1sen!2sin!4v171872659301!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { src: "/1.webp", category: "Facilities" },
    { src: "/2.webp", category: "Training" },
    { src: "/3.webp", category: "Wellness" },
    { src: "/4.webp", category: "Exterior" },
    { src: "/5.webp", category: "Counseling" },
    { src: "/6.webp", category: "Activities" },
    { src: "/7.webp", category: "Interior" },
    { src: "/8.webp", category: "Facilities" },
    { src: "/9.webp", category: "Training" },
    { src: "/10.webp", category: "Wellness" },
    { src: "/11.webp", category: "Exterior" },
    { src: "/12.webp", category: "Counseling" },
  ];

  const categories = ["All", "Facilities", "Wellness", "Activities", "Exterior"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero - Slide Down */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/gallery_hero.webp" alt="Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-brand-accent/90 backdrop-blur-[2px]" />

        <div className="relative z-10 max-width-container text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-secondary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Visual Tour</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Our Healing <span className="text-brand-secondary">Environment</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-2xl mx-auto opacity-90">
              A visual glimpse into our state-of-the-art facilities and nurturing campus life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter - Sticky & Professional */}
      <section className="py-8 border-b border-slate-100 flex justify-center sticky top-[60px] z-30 bg-white/95 backdrop-blur-md">
        <div className="flex flex-wrap gap-3 justify-center px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${activeCategory === cat
                ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                : "bg-white text-slate-500 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid - Sliding From Bottom Staggered */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-width-container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                key={img.src}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-zoom-in border border-slate-100"
                onClick={() => setSelectedImg(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary scale-75 group-hover:scale-100 transition-all">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all border border-white/10">
                  {img.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-brand-accent/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full h-full max-w-5xl"
          >
            <Image src={selectedImg} alt="Center Facility" fill className="object-contain" />
            <button className="absolute -top-12 right-0 text-white" onClick={() => setSelectedImg(null)}>
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        </div>
      )}

      {/* Closing CTA - Slide Up */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-width-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary text-white rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl border border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Visit Our Healing Sanctuary</h2>
            <p className="text-slate-200 text-base mb-10 max-w-2xl mx-auto font-medium">Experience our world-class recovery facilities in person. We offer guided tours for families.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-brand-secondary text-brand-primary px-8 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                Schedule Center Tour
              </Link>
              <a href="tel:08423667868" className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                Contact Office
              </a>
            </div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-brand-secondary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

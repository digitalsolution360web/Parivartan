"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

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
    { src: "/13.webp", category: "Activities" },
    { src: "/14.webp", category: "Staff" },
    { src: "/15.webp", category: "Staff" },
    { src: "/16.webp", category: "Staff" },
    { src: "/17.jpeg", category: "Campus" },
    { src: "/18.jpeg", category: "Campus" },
    { src: "/19.jpeg", category: "Campus" },
    { src: "/20.jpeg", category: "Campus" },
    { src: "/21.jpeg", category: "Campus" },
    { src: "/22.jpeg", category: "Campus" },
  ];

  const categories = ["All", "Facilities", "Wellness", "Campus", "Activities", "Staff"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 pt-40 pb-24 text-white text-center">
        <div className="max-width-container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Visual <span className="text-brand-secondary">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl max-w-2xl mx-auto font-medium"
          >
            A glimpse into the life and facilities at Jeevan Parivartan Nasha Mukti Kendra.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 border-b border-slate-100 flex justify-center sticky top-[72px] z-30 bg-white/80 backdrop-blur-md">
        <div className="flex flex-wrap gap-4 justify-center px-4 font-black uppercase tracking-widest text-[10px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-black transition-all border ${
                activeCategory === cat 
                ? "bg-brand-primary text-white border-brand-primary shadow-xl shadow-brand-primary/20" 
                : "bg-white text-slate-500 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="max-width-container">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={img.src}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all cursor-pointer border border-slate-100"
                onClick={() => setSelectedImg(img.src)}
              >
                <Image 
                  src={img.src} 
                  alt={`Gallery Image ${i + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-primary transform translate-y-8 group-hover:translate-y-0 transition-all shadow-2xl">
                      <Maximize2 className="w-8 h-8" />
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 px-6 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full opacity-0 group-hover:opacity-100 transition-all border border-white/20">
                   {img.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
          >
            <Image src={selectedImg} alt="Enlarged" fill className="object-contain" />
            <button 
              className="absolute -top-16 right-0 text-white hover:text-brand-secondary transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-10 h-10" />
            </button>
          </motion.div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-width-container text-center">
          <h2 className="text-4xl font-black mb-6 text-slate-900">Want to See Our Center in Person?</h2>
          <p className="text-slate-500 mb-12 text-lg font-medium max-w-2xl mx-auto">We welcome family visits and offer tours to help you feel confident about our facilities.</p>
          <button className="bg-brand-primary text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-2xl">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
}

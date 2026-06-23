"use client";

import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "918423667868";
  const message = "Hello! I would like to know more about Jeevan Parivartan.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <>
      {/* Inject keyframes directly so they always work */}
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .wa-bounce {
          animation: wa-bounce 1.6s ease-in-out infinite;
        }
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .wa-ping {
          animation: wa-ping 1.6s ease-out infinite;
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-bounce fixed bottom-6 right-6 z-[9999] group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse ring */}
        <div
          className="wa-ping absolute inset-0 rounded-full bg-green-400"
          style={{ opacity: 0.3 }}
        />

        {/* Main Button */}
        <div className="relative bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-active:scale-95 border-2 border-white/30">
          <i className="bi bi-whatsapp" style={{ fontSize: "28px", lineHeight: 1 }}></i>

          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg border border-slate-100">
            Chat with us
          </span>
        </div>
      </a>
    </>
  );
};

export default WhatsAppButton;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919818532972?text=Hare%20Krishna!%20I%20want%20to%20know%20more%20about%20your%20spiritual%20tour%20packages."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 animate-bounce">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
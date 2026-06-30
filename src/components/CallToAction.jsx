import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="py-0 bg-[#FEFCFA]"> {/* Background match with other sections */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Banner Container with Gradient */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#F78F30] to-[#FFB76B] px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          {/* Subtle Background Pattern (Optional: If you want those faded temple silhouettes like the image) */}
          {/* Main content ke piche design ke liye */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                 backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                 backgroundBlendMode: "overlay"
               }}>
          </div>

          {/* Left Side: Icon + Text */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 z-10">
            
            {/* Outline Temple Icon Circle */}
            <div className="w-20 h-20 shrink-0 rounded-full border border-white/40 flex items-center justify-center bg-white/10">
              {/* Custom Temple SVG mimicking the line art */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 6M12 6L8 10V22H16V10L12 6ZM8 10L4 14V22H8M16 10L20 14V22H16" />
                <path d="M10 22V16H14V22" />
                <circle cx="12" cy="11" r="1" fill="white"/>
              </svg>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="text-white/90 text-[15px] max-w-xl leading-relaxed">
                Let us take care of the journey while you focus on devotion, 
                peace, and creating beautiful memories.
              </p>
            </div>

          </div>

          {/* Right Side: Button */}
          <div className="z-10 shrink-0">
            <button className="bg-white text-[#F78F30] px-8 py-4 rounded-full font-bold text-[15px] hover:bg-gray-50 hover:shadow-lg transition duration-300 flex items-center gap-3">
              Book Your Journey Now <FaArrowRight className="text-sm" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;
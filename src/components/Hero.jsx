import React from "react";
import { Link } from "react-scroll";
import BookingForm from "./BookingForm";
import mainImage from "../assets/mainImage.jpeg";
import topImage from "../assets/topImage.jpeg";
import bottomImage from "../assets/bottomImage.jpeg";
import {
  FaArrowRight,
  FaMapMarkedAlt,
  FaAward,
  FaPlane,
} from "react-icons/fa";
import { FiPhone, FiUsers } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-[#FEFCFA] pt-30 pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="z-10">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-[#F78F30]/30 bg-[#FFF6EE] text-[#F78F30] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            Spiritual Journeys, Lasting Memories
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-serif font-bold text-[#0E1238] leading-[1.1]">
            Experience Journeys <br />
            <span className="text-[#F78F30]">Stay Forever</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-6 text-lg max-w-lg leading-relaxed">
            Premium spiritual tours, family trips, corporate retreats,
            and unforgettable travel experiences crafted with comfort
            and devotion.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            {/* Explore Tours */}
            <Link
              to="destinations"
              smooth={true}
              duration={700}
              offset={-90}
              spy={true}
            >
              <button className="bg-[#F78F30] hover:bg-[#e67e20] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2.5 transition shadow-[0_8px_20px_rgba(247,143,48,0.3)] cursor-pointer">
                Explore Tours
                <FaArrowRight className="text-sm" />
              </button>
            </Link>

            {/* Contact */}
            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-90}
              spy={true}
            >
              <button className="border border-gray-300 text-[#0E1238] px-8 py-3.5 rounded-full font-semibold flex items-center gap-2.5 hover:border-[#F78F30] hover:text-[#F78F30] transition cursor-pointer">
                <FiPhone className="text-lg" />
                Contact Us
              </button>
            </Link>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-gray-200/60">

            <div className="flex items-center gap-3">
              <FiUsers className="text-[#F78F30] text-[28px]" />
              <div>
                <h4 className="font-bold text-[#0E1238] text-xl leading-none">
                  10K+
                </h4>
                <p className="text-[11px] font-medium text-gray-500 mt-1">
                  Happy Travelers
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-[#F78F30] text-[28px]" />
              <div>
                <h4 className="font-bold text-[#0E1238] text-xl leading-none">
                  300+
                </h4>
                <p className="text-[11px] font-medium text-gray-500 mt-1">
                  Destinations
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            <div className="flex items-center gap-3">
              <FaAward className="text-[#F78F30] text-[28px]" />
              <div>
                <h4 className="font-bold text-[#0E1238] text-xl leading-none">
                  8+
                </h4>
                <p className="text-[11px] font-medium text-gray-500 mt-1">
                  Years Experience
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative h-[600px] w-full hidden lg:block">

          <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFE8D6] rounded-full blur-3xl -z-10 opacity-70"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFF3E8] rounded-full blur-3xl -z-10 opacity-70"></div>

          <div className="absolute top-10 left-10 w-12 h-12 bg-[#F78F30] rounded-full flex items-center justify-center text-white z-20 shadow-[0_8px_20px_rgba(247,143,48,0.4)]">
            <FaPlane className="text-xl -rotate-45" />
          </div>

          <img
  src={mainImage}
  alt="Main Travel"
  className="absolute top-14 right-12 w-[380px] h-[480px] object-cover rounded-[40px] border-[8px] border-white shadow-2xl rotate-[6deg] z-10"
/>

          <div className="absolute top-0 right-[-20px] bg-white p-2.5 rounded-[24px] shadow-2xl w-[190px] rotate-[12deg] z-20">
            <img
  src={topImage}
  alt="Spiritual Retreats"
  className="rounded-[16px] w-full h-[140px] object-cover"
/>
            <div className="p-2 text-center mt-1">
              <h3 className="font-bold text-[#F78F30] text-[13px]">
                Spiritual Retreats
              </h3>
              <p className="text-gray-500 text-[11px] mt-0.5">
                Find peace within
              </p>
            </div>
          </div>

          <div className="absolute bottom-14 left-6 bg-white p-2.5 rounded-[24px] shadow-2xl w-[220px] z-30">
            <img
  src={bottomImage}
  alt="Sacred Experiences"
  className="rounded-[16px] w-full h-[150px] object-cover"
/>
            <div className="p-2 mt-1">
              <h3 className="font-bold text-[#F78F30] text-[14px]">
                Sacred Experiences
              </h3>
              <p className="text-gray-500 text-[12px] mt-0.5">
                Divine moments
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* <div className="max-w-7xl mx-auto px-6 relative z-40 -mt-20 lg:-mt-0">
        <BookingForm />
      </div> */}

    </section>
  );
};

export default Hero;
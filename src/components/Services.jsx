import React from "react";
import spiritual from "../assets/spiritual.jpg";
import corporate from "../assets/corporate.jpg";
import family from "../assets/family.jpg";
import seminar from "../assets/seminar.jpeg";
import { FaPlaceOfWorship, FaBriefcase, FaGift, FaUserTie } from "react-icons/fa";

const services = [
  {
    title: "Spiritual Tours",
    desc: "Peaceful retreats focused on mindfulness, devotion and spiritual growth.",
    image: spiritual,
    icon: <FaPlaceOfWorship />,
  },
  {
    title: "Corporate Retreats",
    desc: "Team-building experiences designed for productivity and bonding.",
    image: corporate,
    icon: <FaBriefcase />,
  },
  {
    title: "Family Celebrations",
    desc: "Memorable birthday and family events crafted with love and joy.",
    image: family,
    icon: <FaGift />,
  },
  {
    title: "Seminar Management",
    desc: "Professional planning and execution of conferences and seminars.",
    image: seminar,
    icon: <FaUserTie />,
  },
];

const Services = () => {
  return (
    <section className="py-10 bg-[#FEFCFA]"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= TOP HEADER ================= */}
        <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F78F30" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 10.5 6 7.5 7.5C4.5 9 2 12 2 12C2 12 6 13.5 7.5 16.5C9 19.5 12 22 12 22C12 22 13.5 18 16.5 16.5C19.5 15 22 12 22 12C22 12 18 10.5 16.5 7.5C15 4.5 12 2 12 2Z"/>
              </svg>
              <p className="text-[#F78F30] uppercase tracking-[3px] font-bold text-xs">
                Our Premium Services
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0E1238] leading-tight">
              We Create
              <span className="text-[#F78F30]"> Meaningful </span>
              Experiences
            </h2>

            <p className="text-gray-500 mt-4 text-[17px]">
              Joyful moments, perfectly planned for you.
            </p>
          </div>

          <button className="border border-gray-300 text-[#0E1238] px-7 py-3 rounded-full text-sm font-semibold hover:border-[#F78F30] hover:text-[#F78F30] transition duration-300 flex items-center gap-2">
            View All Services <span className="text-lg leading-none">&rarr;</span>
          </button>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition duration-400 flex flex-col group"
            >
              
              {/* IMAGE & ICON WRAPPER */}
              <div className="relative">
                
                {/* Sirf image wale div par overflow-hidden rakha hai taaki zoom bahar na nikle */}
                <div className="h-[200px] w-full rounded-t-[24px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* ICON CIRCLE - Ab ye overflow-hidden ke bahar hai, isliye theek se dikhega */}
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-white w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] text-[28px] text-[#F78F30] z-10">
                  {item.icon}
                </div>

              </div>

              {/* CONTENT SECTION */}
              <div className="pt-14 pb-8 px-5 text-center flex flex-col flex-grow bg-white rounded-b-[24px] z-0 relative">
                
                <h3 className="text-[22px] font-bold text-[#0E1238] mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[14.5px] leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                <button className="text-[#F78F30] font-semibold text-[14.5px] hover:text-[#e67e20] hover:tracking-wide transition-all duration-300 flex items-center justify-center gap-1">
                  Explore More <span className="text-lg leading-none">&rarr;</span>
                </button>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
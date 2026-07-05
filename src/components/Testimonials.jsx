import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Team Images
import neha from "../assets/team/pushpender.jpeg";
import lokesh from "../assets/team/akash.jpeg";
import pankaj from "../assets/team/ashok.jpeg";

const testimonialsData = [
  {
    name: "Pushpender Singhal",
    location: "Travel Consultant",
    review:
      "Helping devotees experience the beauty of holy dham with comfort, care, and unforgettable memories.",
    img: neha,
  },
  {
    name: "Akash Singh",
    location: "Founder & Event Planner",
    review:
      "We ensure every pilgrimage is well-planned with quality accommodation, transport, and dedicated support.",
    img: lokesh,
  },
  {
    name: "Ashok Aggarwal",
    location: "Marketing Specialist",
    review:
      "From booking to your safe return, we take care of every detail so you can focus on your spiritual journey.",
    img: pankaj,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#F78F30"
              >
                <path d="M12 2C12 2 10.5 6 7.5 7.5C4.5 9 2 12 2 12C2 12 6 13.5 7.5 16.5C9 19.5 12 22 12 22C12 22 13.5 18 16.5 16.5C19.5 15 22 12 22 12C22 12 18 10.5 16.5 7.5C15 4.5 12 2 12 2Z" />
              </svg>

              <p className="text-[#F78F30] font-bold text-xs uppercase tracking-[2px]">
                MEET OUR TEAM
              </p>
            </div>

            <h2 className="text-4xl md:text-[40px] font-serif font-bold text-[#0E1238]">
              Our Dedicated Travel Experts
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-[#F78F30] hover:text-[#F78F30] transition">
              <FaChevronLeft />
            </button>

            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-[#F78F30] hover:text-[#F78F30] transition">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF6EE] rounded-3xl p-8 hover:shadow-xl transition duration-300"
            >
              {/* Review */}
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl text-[#F78F30] leading-none">
                  “
                </span>

                <p className="text-[#0E1238] leading-7 text-lg">
                  {item.review}
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-gray-200 shadow"
                  loading="lazy"
                />

                <div>
                  <h3 className="font-bold text-[#0E1238] text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
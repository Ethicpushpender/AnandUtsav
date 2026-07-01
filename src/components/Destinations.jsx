import React, { useRef } from "react";
import Vrindavan from "../assets/Vrindavan.webp";
import ayodiya from "../assets/ayodiya.webp";
import Jagannath from "../assets/Jagannath.webp";
import Haridwar from "../assets/Haridwar.jpg";
import Rishikesh from "../assets/Rishikesh.webp";
import badrinath from "../assets/badrinath.webp";
import Kedarnath from "../assets/Kedarnath.webp";


import { FaMapMarkerAlt, FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destinationsData = [
  {
    name: "Vrindavan",
    state: "Uttar Pradesh",
    rating: "4.8",
    reviews: "320",
    desc: "The land of Krishna's divine leelas.",
    price: "2,499",
    img: Vrindavan, 
  },
    {
    name: "Rishikesh",
    state: "Uttarakhand",
    rating: "4.8",
    reviews: "200",
    desc: "The Yoga Capital of the World.",
    price: "4,499",
    img: Rishikesh,
  },
  {
    name: "Ayodhya",
    state: "Uttar Pradesh",
    rating: "4.9",
    reviews: "180",
    desc: "The sacred city of Lord Ram and ancient glory.",
    price: "5,499",
    img: ayodiya,
  },
  {
    name: "Jagannath Puri",
    state: "Odisha",
    rating: "4.8",
    reviews: "260",
    desc: "The divine abode of Lord Jagannath.",
    price: "6,499",
    img: Jagannath,
  },
  {
    name: "Haridwar",
    state: "Uttarakhand",
    rating: "4.7",
    reviews: "140",
    desc: "The gateway to God and the holy Ganga.",
    price : "3,999",
    img: Haridwar,
  },
  {
    name: "Kedarnath",
    state: "Uttarakhand",
    rating: "4.9",
    reviews: "540",
    desc: "The sacred abode of Lord Shiva in the Himalayas.",
    price: "8,999",
    img: Kedarnath,
  },
  {
    name: "Badrinath",
    state: "Uttarakhand",
    rating: "4.8",
    reviews: "410",
    desc: "The holy shrine of Lord Vishnu in the snowy peaks.",
    price: "7,499",
    img: badrinath,
  }
];

const Destinations = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; 
      
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 bg-[#FEFCFA]"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F78F30" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 10.5 6 7.5 7.5C4.5 9 2 12 2 12C2 12 6 13.5 7.5 16.5C9 19.5 12 22 12 22C12 22 13.5 18 16.5 16.5C19.5 15 22 12 22 12C22 12 18 10.5 16.5 7.5C15 4.5 12 2 12 2Z"/>
              </svg>
              <p className="text-[#F78F30] font-bold text-sm uppercase tracking-[2px]">
                Explore Divine Destinations
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0E1238]">
              Popular Destinations
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 border border-gray-300 px-6 py-2.5 rounded-full text-sm font-semibold text-[#0E1238] hover:bg-gray-50 transition">
            View All Destinations <FaArrowRight className="text-gray-600" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Left Arrow (Absolute positioning on the left) */}
          <button 
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-gray-700 hover:bg-[#F78F30] hover:text-white hover:border-[#F78F30] transition duration-300"
            aria-label="Scroll Left"
          >
            <FaChevronLeft className="text-base pr-0.5" />
          </button>

          {/* Scrollable Cards Div */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {destinationsData.map((place, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[280px] snap-start flex-shrink-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="h-[140px] w-full object-cover"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#0E1238] text-[17px]">
                    {place.name}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-1">
                    <FaMapMarkerAlt className="text-[#F78F30] text-xs" />
                    <p className="text-gray-500 text-[13px] font-medium">{place.state}</p>
                  </div>

                  <div className="flex items-center gap-1 mt-2">
                    <FaStar className="text-[#F78F30] text-xs" />
                    <p className="text-[#F78F30] font-bold text-[13px] ml-0.5">{place.rating}</p>
                    <p className="text-gray-500 text-[13px]">({place.reviews})</p>
                  </div>

                  <p className="text-gray-600 text-[13px] mt-3 leading-relaxed flex-grow">
                    {place.desc}
                  </p>

                  <div className="flex justify-between items-end mt-5 pt-3">
                    <div>
                      <p className="text-gray-500 text-[11px] mb-0.5">From</p>
                      <p className="font-bold text-[#0E1238] text-lg leading-none">
                        ₹{place.price}
                      </p>
                    </div>

                    <button
  onClick={() =>
    window.open(
      "https://forms.gle/PCRT4iipCaovANMo9",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="bg-[#F78F30] hover:bg-[#e67e20] text-white px-5 py-2 rounded-full text-[13px] font-semibold transition"
>
  Book Now
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow (Absolute positioning on the right) */}
          <button 
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-gray-700 hover:bg-[#F78F30] hover:text-white hover:border-[#F78F30] transition duration-300"
            aria-label="Scroll Right"
          >
            <FaChevronRight className="text-base pl-0.5" />
          </button>
          
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-4 flex justify-center md:hidden">
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-2.5 rounded-full text-sm font-semibold text-[#0E1238]">
              View All Destinations <FaArrowRight className="text-gray-600" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Destinations;
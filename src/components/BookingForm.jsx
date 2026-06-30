import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaLayerGroup,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";



const BookingForm = () => {
  // 1. Data collect karne ke liye State banayi
  const [formData, setFormData] = useState({
    destination: "",
    travelDate: "",
    guests: "",
    tourType: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  // 2. Jab bhi user kuch type karega, ye function data save karega
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Jab button click hoga tab ye function chalega aur Make.com ko data bhejega
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page ko refresh hone se rokega
    setStatus("Submitting...");

    try {
      // Yahan apna Make.com wala link daalein
      const response = await fetch("https://hook.us2.make.com/2vmbb85gward8bttqclaipbg4q5cnku2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Booking Request Sent! We will contact you soon.");
        // Data bhejne ke baad form khali kar do
        setFormData({ destination: "", travelDate: "", guests: "", tourType: "", phone: "" });
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending data. Please check your internet connection.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 relative md:-bottom-8 z-40">
      <div className="bg-white rounded-3xl shadow-xl border border-[#f3e7db] p-3 relative">
        
        {/* div ko form me badla aur onSubmit lagaya */}
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-3">
          
          {/* DESTINATION */}
          <div className="border border-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:border-[#F78F30] transition bg-white shadow-sm">
            <FaMapMarkerAlt className="text-[#F78F30] text-base shrink-0" />
            <div className="w-full">
              <p className="text-[#F78F30] text-[11px] font-semibold mb-0.5">
                Destination
              </p>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                placeholder="Where to?"
                className="w-full outline-none bg-transparent text-[#0E1238] font-bold text-sm placeholder:text-[#0E1238]/60"
              />
            </div>
          </div>

          {/* DATE */}
          <div className="border border-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:border-[#F78F30] transition bg-white shadow-sm">
            <FaCalendarAlt className="text-[#F78F30] text-base shrink-0" />
            <div className="w-full">
              <p className="text-[#F78F30] text-[11px] font-semibold mb-0.5">
                Travel Date
              </p>
              <input
                type="text"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
                placeholder="Select date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                className="w-full outline-none bg-transparent text-[#0E1238] font-bold text-sm placeholder:text-[#0E1238]/60"
              />
            </div>
          </div>

          {/* GUESTS */}
          <div className="border border-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:border-[#F78F30] transition bg-white shadow-sm">
            <FaUsers className="text-[#F78F30] text-base shrink-0" />
            <div className="w-full">
              <p className="text-[#F78F30] text-[11px] font-semibold mb-0.5">
                Guests
              </p>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                placeholder="2 Adults"
                className="w-full outline-none bg-transparent text-[#0E1238] font-bold text-sm placeholder:text-[#0E1238]/60"
              />
            </div>
          </div>

          {/* TOUR TYPE */}
          <div className="border border-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:border-[#F78F30] transition bg-white shadow-sm">
            <FaLayerGroup className="text-[#F78F30] text-base shrink-0" />
            <div className="w-full">
              <p className="text-[#F78F30] text-[11px] font-semibold mb-0.5">
                Tour Type
              </p>
              <select 
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent text-[#0E1238] font-bold text-sm appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>
                  Select type
                </option>
                <option value="Spiritual Tour">Spiritual Tour</option>
                <option value="Corporate Retreat">Corporate Retreat</option>
                <option value="Family Celebration">Family Celebration</option>
                <option value="Seminar">Seminar</option>
              </select>
            </div>
          </div>

          {/* PHONE */}
          <div className="border border-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-3 hover:border-[#F78F30] transition bg-white shadow-sm">
            <FaPhoneAlt className="text-[#F78F30] text-base shrink-0" />
            <div className="w-full">
              <p className="text-[#F78F30] text-[11px] font-semibold mb-0.5">
                Phone Number
              </p>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter number"
                className="w-full outline-none bg-transparent text-[#0E1238] font-bold text-sm placeholder:text-[#0E1238]/60"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button 
            type="submit"
            className="bg-[#F78F30] hover:bg-[#eb7f1b] text-white rounded-2xl px-4 py-2.5 font-bold text-sm flex items-center justify-center gap-2 transition duration-300 shadow-md"
          >
            Book Your Journey
            <FaArrowRight className="text-xs" />
          </button>
          
        </form>

        {/* 4. Agar status message hai toh form ke niche dikhao */}
        {status && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#0E1238] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
            {status}
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingForm;
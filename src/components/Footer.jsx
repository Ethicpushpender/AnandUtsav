import React from "react";
import logo from "../assets/logo.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=61576644241942",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/anandutsav.official/",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/channel/UCyR4hTPwy5oaynYL_fuusbA",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/anandutsav-undefined-6519243b9/",
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/anandutsav50939",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/919818532972",
    },
  ];

  return (
    <footer className="bg-[#0C1230] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-y-10 gap-x-8">

        {/* Brand */}
        <div className="lg:col-span-4 lg:pr-8">
          <img
            src={logo}
            alt="AnandUtsav Logo"
            className="w-44 md:w-52 h-auto mb-6"
            loading="lazy"
          />

          <p className="text-gray-300 text-[15px] leading-8 mb-8">
            We create meaningful spiritual journeys and travel experiences
            filled with devotion, comfort and unforgettable memories.
          </p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#F78F30] hover:border-[#F78F30] hover:text-white transition"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Popular Tours */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
          <h3 className="font-semibold text-lg mb-6">Popular Tours</h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "Vrindavan Tour",
              "Mathura Tour",
              "Chardham Yatra",
              "Ayodhya Tour",
              "Jagannath Puri Tour",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#F78F30] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
          <h3 className="font-semibold text-lg mb-6">Support</h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "FAQs",
              "Cancellation Policy",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#F78F30] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
          <h3 className="font-semibold text-lg mb-6">Contact Us</h3>

          <div className="flex items-start gap-3 mb-5">
            <FaPhoneAlt className="text-[#F78F30] mt-1 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed">
              +91 98185 32972
              <br />
              +91 93540 92497
            </p>
          </div>

          <div className="flex items-start gap-3 mb-5">
            <FaEnvelope className="text-[#F78F30] mt-1 flex-shrink-0" />
            <p className="text-gray-300 break-all">
              info@anandutsav.com
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#F78F30] mt-1 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed">
              G-157B, Prem Nagar Ist Kirari Suleman Nagar,
              <br />
              Nangloi, Delhi - 110086, India
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p className="text-center md:text-left">
          © 2026 AnandUtsav. All rights reserved.
        </p>

        <p className="text-center md:text-right">
          Made with <span className="text-red-500">❤️</span> for spiritual
          travelers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
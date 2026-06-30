import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "Destinations", to: "destinations" },
    { name: "Services", to: "tours" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={logo}
          alt="AnandUtsav"
          className="w-36 lg:w-48 h-auto object-contain relative z-50"
        />

        {/* Desktop Menu - Changed from md to lg to prevent cramping at 768px */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-90}
                activeClass="active-link"
                className="cursor-pointer relative text-[#0E1238] hover:text-[#F78F30] transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Desktop Book Now + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Book Now Button - Changed to lg:block */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScdguzIq5zNFuPDJZCob4ZUFYwUtwVBu1KN7IbpGf7Xm_QynQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <button className="bg-[#F78F30] hover:bg-[#e67e20] text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Book Now
            </button>
          </a>

          {/* Hamburger Menu Toggle - Changed to lg:hidden */}
          <button
            className="lg:hidden text-[#0E1238] focus:outline-none relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close (X) Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Changed to lg:hidden */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-medium">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-90}
                activeClass="active-link"
                onClick={() => setIsOpen(false)} // Close menu on click
                className="cursor-pointer relative text-[#0E1238] hover:text-[#F78F30] transition-colors text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
          
          {/* Mobile Book Now Button */}
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScdguzIq5zNFuPDJZCob4ZUFYwUtwVBu1KN7IbpGf7Xm_QynQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              <button className="bg-[#F78F30] hover:bg-[#e67e20] text-white px-8 py-3 mt-2 rounded-full font-semibold transition-all duration-300 shadow-md">
                Book Now
              </button>
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        .active-link {
          color: #F78F30;
          font-weight: 600;
          position: relative;
        }

        .active-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 2px;
          background: #F78F30;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
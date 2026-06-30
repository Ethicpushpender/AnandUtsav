import { 
  BiCar, 
  BiUserVoice, 
  BiBuildings, 
  BiBowlHot, 
  BiTagAlt, 
  BiHeadphone 
} from "react-icons/bi";

// Data array jisme icons, titles aur unke exact descriptions hain
const featuresData = [
  {
    title: "Comfortable Travel",
    desc: "Luxury vehicles and comfortable journey experience.",
    icon: <BiCar />,
  },
  {
    title: "Trusted Guides",
    desc: "Experienced and professional spiritual guides.",
    icon: <BiUserVoice />,
  },
  {
    title: "Premium Stay",
    desc: "Handpicked hotels and accommodations for your comfort.",
    icon: <BiBuildings />,
  },
  {
    title: "Pure Veg Food",
    desc: "Delicious, hygienic and pure vegetarian meals.",
    icon: <BiBowlHot />,
  },
  {
    title: "Affordable Packages",
    desc: "Best services at unbeatable and fair prices.",
    icon: <BiTagAlt />,
  },
  {
    title: "24x7 Support",
    desc: "We're always here for you anytime, anywhere.",
    icon: <BiHeadphone />,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header Label */}
        <div className="flex items-center gap-2 mb-10 justify-start">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#F78F30" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 10.5 6 7.5 7.5C4.5 9 2 12 2 12C2 12 6 13.5 7.5 16.5C9 19.5 12 22 12 22C12 22 13.5 18 16.5 16.5C19.5 15 22 12 22 12C22 12 18 10.5 16.5 7.5C15 4.5 12 2 12 2Z"/>
          </svg>
          <p className="text-[#F78F30] font-bold text-xs uppercase tracking-[2px]">
            WHY TRAVEL WITH ANANDUTSAV?
          </p>
        </div>

        {/* Features Grid */}
        {/* divide-y (mobile ke liye) aur md:divide-x (desktop par vertical lines ke liye) use kiya gaya hai */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-6 md:py-0 transition hover:-translate-y-1 duration-300"
            >
              {/* Orange Outline Icon */}
              <div className="text-4xl text-[#F78F30] mb-4">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-[#0E1238] text-[15px] mb-2 leading-tight">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[180px]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
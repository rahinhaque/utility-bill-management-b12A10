import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import electricity from "../../assets/electricityBill.png";
import gas from "../../assets/GasBill.png";
import online from "../../assets/onlineBill.png";
import water from "../../assets/WaterBill.png";

const slides = [
  {
    image: water,
    title: "Manage All Your Bills in One Place",
    subtitle: "Electricity, Gas, Water, Internet — Pay Seamlessly",
  },
  {
    image: online,
    title: "Secure & Fast Online Payments",
    subtitle: "Pay your current month’s bills instantly and safely.",
  },
  {
    image: gas,
    title: "Track & Download Payment History",
    subtitle: "Keep your records organized — download with one click.",
  },
  {
    image: electricity,
    title: "Smart & Responsive Dashboard",
    subtitle: "Access your bills anytime, anywhere — beautifully simple.",
  },
];

const Banner = () => {
  return (
    <div className="w-full mt-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[380px] md:h-[480px]">
             
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-90"
              />

            
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h2 className="text-2xl md:text-4xl font-semibold mb-3 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg opacity-90 animate-fadeIn delay-100">
                  {slide.subtitle}
                </p>

              
                <Link
                  to="/about-us"
                  className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white font-medium shadow-md transition"
                >
                  See More Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .delay-100 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;

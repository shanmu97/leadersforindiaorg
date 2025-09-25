import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom styles for darkening non-active slides
const swiperStyles = `
  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.8 !important;
  }
  
  .swiper-slide:not(.swiper-slide-active) .slide-wrapper {
    filter: brightness(0.5) !important;
  }
  
  .swiper-slide-active {
    opacity: 1 !important;
  }
  
  .swiper-slide-active .slide-wrapper {
    filter: brightness(1) !important;
  }
  
  .swiper-slide {
    transition: opacity 0.5s ease, filter 0.5s ease !important;
  }
`;

const AtlasSection1 = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    {
      subtitle: "~ What guides us",
      title: "We play the long game with urgency",
      copy: "Patience, discipline, and vision to bring new transformational medicines to life.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/Discover-intro1-1024x960.jpg?strip=all&lossy=0&ssl=1",
    },
    {
      subtitle: "~ What guides us",
      title: "We are relentless truth-seekers",
      copy: "Our seed-led investment model uncovers the most promising opportunities.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/Discover-intro2-1024x960.jpg?strip=all&lossy=0&ssl=1",
    },
    {
      subtitle: "~ What guides us",
      title: "We understand the power of community",
      copy: "We prioritize a collaborative, science-first, patient-centric culture.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/Discover-intro3-1024x960.jpg?strip=all&lossy=0&ssl=1",
    },
    {
      subtitle: "~ What guides us",
      title: "We keep people at the center",
      copy: "Every company, experiment, decision is guided by a singular goal - improving the lives of patients.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/Discover-intro4-1024x960.jpg?strip=all&lossy=0&ssl=1",
    },
  ];

  const handlePrevSlide = () => {
    console.log("Previous button clicked", swiperInstance);
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextSlide = () => {
    console.log("Next button clicked", swiperInstance);
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    console.log("Slide changed to:", swiper.activeIndex);
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="w-full bg-black text-white relative pt-16">
      <div className="w-full absolute z-10 flex items-center justify-center ">
        <h1 className="px-10  max-w-7xl text-2xl lg:text-4xl font-[350] text-white text-start lg:-ml-14">
          Exceptional entrepreneurs and scientists translate innovation into <br />
          <span className="text-cyan-400">novel medicines</span>.
        </h1>
      </div>
      <div className="sticky top-0 w-full min-h-[100vh] bg-black text-white flex items-center justify-center">
        {/* Inject custom styles */}
        <style dangerouslySetInnerHTML={{ __html: swiperStyles }} />
        <div className="w-full h-full relative z-0">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 350,
              modifier: 1,
              slideShadows: true,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full h-full swiper-container backdrop-blur-xl"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="w-auto max-w-6xl">
                <div className="slide-wrapper h-full flex items-center justify-center p-12 bg-transparent min-h-[100vh]">
                  <div className="flex items-center gap-16 w-full max-w-7xl">
                    <div className="text-content flex-1 text-left">
                      <h4 className="subtitle md:text-lg text-cyan-400 mb-6 font-[400]">
                        {slide.subtitle}
                      </h4>
                      <h3 className="title text-[28px] md:text-5xl lg:text-7xl font-light text-white mb-8 lg:leading-[1]">
                        {slide.title}
                      </h3>
                      <div className="copy text-gray-200 text-sm md:text-xl leading-relaxed max-w-2xl">
                        {slide.copy}
                      </div>
                    </div>
                    <div className="image flex-shrink-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-[300px] h-[250px] lg:w-[500px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation */}
            <div className="carousel-controls absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-50">
              {/* Previous Arrow Button */}
              <button
                onClick={handlePrevSlide}
                className="arrow-button prev-arrow w-16 h-16 rounded-full border-2 border-white/40 bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                aria-label="Previous slide"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-180 text-white group-hover:text-cyan-400 transition-colors duration-300"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Progress Bar */}
              <div className="progress-container flex items-center gap-4">
                <div className="progress-bar w-240 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="progress-fill h-full bg-white transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    }}
                  />
                </div>

              </div>

              {/* Next Arrow Button */}
              <button
                onClick={handleNextSlide}
                className="arrow-button next-arrow w-16 h-16 rounded-full border-2 border-white/40 bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                aria-label="Next slide"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white group-hover:text-cyan-400 transition-colors duration-300"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AtlasSection1;

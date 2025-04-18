import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ImageSlider = ({ imgGroup = [] }) => {
  const [imageOrientations, setImageOrientations] = useState([]);
  const [groupedSlides, setGroupedSlides] = useState([]);
  const [isLoopEnabled, setIsLoopEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // 🔹 state สำหรับจับขนาดจอ

  // ✅ จับขนาดหน้าจอ
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 600);
    checkScreen(); // run ครั้งแรก
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;

    setImageOrientations((prev) => {
      const newOrientations = [...prev];
      newOrientations[index] =
        naturalWidth < naturalHeight ? "portrait" : "landscape";
      return newOrientations;
    });
  };

  useEffect(() => {
    if (imageOrientations.length === imgGroup.length) {
      const tempSlides = [];
      let i = 0;

      if (isMobile) {
        // 🔹 มือถือ: แสดงทีละ 1 รูป
        imgGroup.forEach((img) => tempSlides.push([img]));
      } else {
        // 🔹 Desktop: แสดงคู่ ถ้า portrait
        while (i < imgGroup.length) {
          if (imageOrientations[i] === "portrait" && i + 1 < imgGroup.length) {
            tempSlides.push([imgGroup[i], imgGroup[i + 1]]);
            i += 2;
          } else {
            tempSlides.push([imgGroup[i]]);
            i += 1;
          }
        }
      }

      setGroupedSlides(tempSlides);
      setIsLoopEnabled(tempSlides.length > 1);
    }
  }, [imageOrientations, imgGroup, isMobile]);

  useEffect(() => {
    if (groupedSlides.length > 0) {
      setActiveIndex(0);
    }
  }, [groupedSlides]);

  return (
    <div className="relative w-full">
      {/* preload images */}
      <div className="hidden">
        {imgGroup.map((img, index) => (
          <img
            key={`preload-${index}`}
            src={img}
            alt={`preload-${index}`}
            onLoad={(e) => handleImageLoad(e, index)}
          />
        ))}
      </div>

      {groupedSlides.length > 0 && (
        <Swiper
          loop={isLoopEnabled}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, EffectFade]}
          effect="fade"
          onSlideChange={(swiper) => {
            const index = Number(swiper?.realIndex);
            if (!isNaN(index)) setActiveIndex(index);
          }}
          preloadImages={true}
          watchSlidesProgress={true}
          className="w-full rounded-2xl"
        >
          {groupedSlides.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center space-x-2 rounded-2xl">
                {group.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Slide ${index}-${idx}`}
                    className={`w-auto h-[320px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:object-contain transition-opacity duration-500 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 font-color-secondary bg-[#293b2b] text-md md:text-xl z-1 rounded-full w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        ❮
      </button>
      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 font-color-secondary bg-[#293b2b] text-md md:text-xl z-1 rounded-full w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;

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
  const [activeIndex, setActiveIndex] = useState(0); // 🔹เพิ่ม state สำหรับ track index

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

      while (i < imgGroup.length) {
        if (imageOrientations[i] === "portrait" && i + 1 < imgGroup.length) {
          tempSlides.push([imgGroup[i], imgGroup[i + 1]]);
          i += 2;
        } else {
          tempSlides.push([imgGroup[i]]);
          i += 1;
        }
      }

      setGroupedSlides(tempSlides);
      setIsLoopEnabled(tempSlides.length > 1);
    }
  }, [imageOrientations, imgGroup]);

  return (
    <div className="relative w-full px-3 sm:px-18 xl:px-28">
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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 🔹 อัปเดต activeIndex
        className="w-full rounded-2xl"
      >
        {groupedSlides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center space-x-2">
              {index === activeIndex &&
                group.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Slide ${index}-${idx}`}
                    className="w-auto h-[320px] sm:h-[500px] rounded-2xl object-contain"
                  />

                  // <div className="flex justify-center items-center w-full h-[320px] sm:h-[500px] bg-gray-100">
                  //   <img
                  //     key={idx}
                  //     src={img}
                  //     alt={`Slide ${index}-${idx}`}
                  //     className="object-contain max-h-full max-w-full"
                  //   />
                  // </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 font-color-secondary bg-[#293b2b] text-md md:text-xl z-1 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        ❮
      </button>
      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 font-color-secondary bg-[#293b2b] text-md md:text-xl z-1 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;

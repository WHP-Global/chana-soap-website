/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = ({ imgGroup = [] }) => (
  <div className="relative w-full px-3 sm:px-18 xl:px-28 ">
    <Swiper
      loop={true}
      spaceBetween={20}
      slidesPerView={2}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation]}
      className="w-full"
      breakpoints={{
        0: { slidesPerView: 1 }, // หน้าจอเล็กกว่า sm (640px) แสดง 1 รูป
        1026: { slidesPerView: 2 }, // หน้าจอใหญ่กว่า sm แสดง 2 รูป
      }}
    >
      {imgGroup?.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-[320px] sm:h-[500px] rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons */}
    <button className="custom-prev absolute  left-0 top-1/2 -translate-y-1/2 font-color-secondary bg-[#293b2b] text-md md:text-xl z-1  rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      ❮
    </button>
    <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 font-color-secondary bg-[#293b2b] text-md md:text-xl z-1  rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      ❯
    </button>
  </div>
);

export default ImageSlider;

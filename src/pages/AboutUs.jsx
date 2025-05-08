import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import tennis from "/AboutUs/tennis.jpg";
import swimming from "/AboutUs/swimming.jpg";
import banner1 from "/AboutUs/banner1.jpg";
import banner2 from "/AboutUs/banner2.jpg";
import banner from "/AboutUs/hero.jpeg";
import founder from "/AboutUs/founder.jpg";
import Banner from "../components/Banner";
import { BoldTextBySlash } from "../services/BoldText";
import ImageSlider from "../components/ImageSlider";
import imgSlide1 from "/AboutUs/imgSlide-1.jpg";
import imgSlide2 from "/AboutUs/imgSlide-2.jpg";
import imgSlide3 from "/AboutUs/imgSlide-3.jpg";
import imgSlide4 from "/AboutUs/imgSlide-4.jpg";
import imgSlide5 from "/AboutUs/imgSlide-5.jpg";
import imgSlide6 from "/AboutUs/imgSlide-6.jpg";
import imgSlide7 from "/AboutUs/imgSlide-7.jpg";
import imgSlide8 from "/AboutUs/imgSlide-8.jpg";
import imgSlide9 from "/AboutUs/imgSlide-9.jpg";
import imgSlide1SI from "/AboutUs/SourcingIngredients/imgSlide-1.jpg";
import imgSlide2SI from "/AboutUs/SourcingIngredients/imgSlide-2.jpg";
import imgSlide3SI from "/AboutUs/SourcingIngredients/imgSlide-3.jpg";
import imgSlide4SI from "/AboutUs/SourcingIngredients/imgSlide-4.jpg";
import imgSlide5SI from "/AboutUs/SourcingIngredients/imgSlide-5.jpg";
import imgSlide6SI from "/AboutUs/SourcingIngredients/imgSlide-6.jpg";
import imgSlide7SI from "/AboutUs/SourcingIngredients/imgSlide-7.jpg";
import imgSlide8SI from "/AboutUs/SourcingIngredients/imgSlide-8.jpg";
import imgSlide9SI from "/AboutUs/SourcingIngredients/imgSlide-9.jpg";
import imgSlide10SI from "/AboutUs/SourcingIngredients/imgSlide-10.jpg";
import imgSlide11SI from "/AboutUs/SourcingIngredients/imgSlide-11.jpg";
import ImgTwo from "../components/ImgTwo";

export default function AboutUs() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();
  const imgSlider = [
    imgSlide1,
    imgSlide2,
    imgSlide3,
    imgSlide4,
    imgSlide5,
    imgSlide6,
    imgSlide7,
    imgSlide8,
    imgSlide9,
  ];

  const imgSliderSoucingIngredients = [
    imgSlide1SI,
    imgSlide2SI,
    imgSlide3SI,
    imgSlide4SI,
    imgSlide5SI,
    imgSlide11SI,
    imgSlide6SI,
    imgSlide7SI,
    imgSlide8SI,
    imgSlide9SI,
    imgSlide10SI,
  ];

  // ดึงข้อมูลจากชีต "about us"
  const aboutUsData = getLocalizedData("about us");

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }
    }
  }, [location]);

  return (
    <div>
      {/*1. our story */}
      <div id="our-story"></div>
      {/* banner */}
      <div className="relative w-full h-[450px] sm:h-[587] md:h-[678px] flex justify-center items-center">
        <img src={banner} alt={banner} className="h-full w-full object-cover" />

        {/* ด้านล่างมืดลงเพื่อให้อ่านข้อความได้ชัด */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <div className="absolute bottom-4 left-4 font-color-secondary">
          <div className="font-header">{aboutUsData[1]}</div>
          <hr className="w-[80%] h-[2px] my-2 bg-fourth border-none" />
          <div className="font-body">
            <div>{aboutUsData[2]}</div>
            <div>{aboutUsData[3]}</div>
            <div>{aboutUsData[4]}</div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center text-balance">
          {aboutUsData[5]}
          <div className="mt-5 font-title">{aboutUsData[6]}</div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 text-justify">
          <BoldTextBySlash text={aboutUsData[7]} />
          <BoldTextBySlash text={aboutUsData[8]} />
          <BoldTextBySlash text={aboutUsData[9]} />

          {/* 2 image */}
          <ImgTwo imgGroup={[swimming, tennis]} />

          <BoldTextBySlash text={aboutUsData[10]} />
          <BoldTextBySlash text={aboutUsData[11]} />

          {/* image slide */}
          <div className="max-w-full flex justify-center py-[20px] sm:py-[40px]">
            <ImageSlider imgGroup={imgSlider} />
          </div>

          <BoldTextBySlash text={aboutUsData[12]} />
          <BoldTextBySlash text={aboutUsData[13]} />

          <div className="text-center font-caption indent-0">
            <div className=" md:h-[500px] sm:h-[400px] h-[350px] w-auto flex justify-center mb-5">
              <img
                src={founder}
                alt={founder}
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
            <BoldTextBySlash text={aboutUsData[14]} />
            {aboutUsData[15]}
          </div>
        </div>
        <div className="flex justify-center my-8">
          <hr className="w-[250px] h-[1px] bg-primary border-none" />
        </div>
      </div>
      {/*2. sourcing and impact */}
      <div id="sourcing-and-impact"></div>
      {/* banner */}
      <Banner src={banner1} />
      {/* content */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-5 font-title text-center">{aboutUsData[16]}</div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-justify">
          <div className="font-subtitle">
            {aboutUsData[17]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[18]} />
            </div>
          </div>

          <div className="font-subtitle">
            {aboutUsData[19]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[20]} />
            </div>
          </div>

          <div className="font-subtitle">
            {aboutUsData[21]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[22]} />
            </div>
          </div>

          {/* image slide */}
          <div className="max-w-full flex justify-center py-[20px] sm:py-[60px]">
            <ImageSlider imgGroup={imgSliderSoucingIngredients} />
          </div>
        </div>
      </div>

      <div className="text-center font-caption my-2 sm:my-3 indent-0 text-balance">
        {aboutUsData[23]}
      </div>
      {/* banner */}
      <Banner src={banner2} />

      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

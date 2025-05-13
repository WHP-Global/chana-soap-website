import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import { BoldTextBySlash } from "../services/BoldText";
import ImageSlider from "../components/ImageSlider";
import ImgTwo from "../components/ImgTwo";
import Banner from "../components/Banner";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function AboutUs() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();
  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("AboutUs")
  );

  const imgSlider = [
    buildImageSrc(categoryImages[4]),
    buildImageSrc(categoryImages[5]),
    buildImageSrc(categoryImages[6]),
    buildImageSrc(categoryImages[7]),
    buildImageSrc(categoryImages[8]),
    buildImageSrc(categoryImages[9]),
    buildImageSrc(categoryImages[10]),
    buildImageSrc(categoryImages[11]),
    buildImageSrc(categoryImages[12]),
  ];
  const imgSliderSoucingIngredients = [
    buildImageSrc(categoryImages[13]),
    buildImageSrc(categoryImages[14]),
    buildImageSrc(categoryImages[15]),
    buildImageSrc(categoryImages[16]),
    buildImageSrc(categoryImages[17]),
    buildImageSrc(categoryImages[18]),
    buildImageSrc(categoryImages[19]),
    buildImageSrc(categoryImages[20]),
    buildImageSrc(categoryImages[21]),
    buildImageSrc(categoryImages[22]),
    buildImageSrc(categoryImages[23]),
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
        <img
          src={buildImageSrc(categoryImages[3])}
          alt={categoryImages[3]}
          className="w-full h-full object-cover"
          loading="lazy"
        />

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
          <ImgTwo
            imgGroup={[
              buildImageSrc(categoryImages[24]),
              buildImageSrc(categoryImages[25]),
            ]}
          />

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
                src={buildImageSrc(categoryImages[2])}
                alt={categoryImages[2]}
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
      <Banner src={buildImageSrc(categoryImages[0])} />
      {/* content */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-5 font-title text-center">{aboutUsData[16]}</div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16">
          <div className="font-subtitle">
            {aboutUsData[17]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={aboutUsData[18]} />
            </div>
          </div>

          <div className="font-subtitle">
            {aboutUsData[19]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={aboutUsData[20]} />
            </div>
          </div>

          <div className="font-subtitle">
            {aboutUsData[21]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={aboutUsData[22]} />
            </div>
          </div>

          {/* image slide */}
          <div className="max-w-full flex justify-center py-[20px] sm:py-[60px]">
            {imgSliderSoucingIngredients.length >= 11 && (
              <ImageSlider imgGroup={imgSliderSoucingIngredients} />
            )}
          </div>
        </div>
      </div>

      <div className="text-center font-caption -1 my-2 sm:my-3 indent-0 text-balance font-color-primary ">
        {aboutUsData[23]}
      </div>
      {/* banner */}
      <Banner src={buildImageSrc(categoryImages[1])} />

      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

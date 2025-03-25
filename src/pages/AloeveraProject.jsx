import { useGoogleSheets } from "../services/googleSheetService";
import hero from "/AloeVera/hero.jpg";
import banner1 from "/AloeVera/banner1.jpg";
import banner2 from "/AloeVera/banner2.jpg";
import child1 from "/AloeVera/child1.jpg";
import child2 from "/AloeVera/child2.jpg";
import Banner from "../components/Banner";
import imgSlide1 from "/AloeVera/aloe-vera1.jpg";
import imgSlide2 from "/AloeVera/aloe-vera2.jpg";
import imgSlide3 from "/AloeVera/aloe-vera3.jpg";
import imgSlide4 from "/AloeVera/aloe-vera4.jpg";
// import community from "/AloeVera/community.jpg";
// import empoweringYouth from "/AloeVera/empoweringYouth.jpg";
// import banner3 from "/AloeVera/banner3.jpg";

import { BoldText, BoldTextBySlash } from "../services/BoldText";
import ImageSlider from "../components/ImageSlider";

export default function AloeveraProject() {
  const { getLocalizedData } = useGoogleSheets();
  const imgSlider = [imgSlide1, imgSlide2, imgSlide3, imgSlide4];

  // ดึงข้อมูลจากชีต "aloe vera project"
  const aloeVeraProjectData = getLocalizedData("aloe vera project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[487px] sm:h-[587] md:h-[687px] bg-gray-400 flex justify-center items-center">
        <img src={hero} alt={hero} className="h-full w-full object-cover" />
      </div>
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {aloeVeraProjectData[1]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4 text-justify">
          <BoldTextBySlash text={aloeVeraProjectData[2]} />
          <BoldTextBySlash text={aloeVeraProjectData[3]} />
          {/* imgae */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto max-w-6xl mx-5 sm:mx-[4%] md:mx-[8%] lg:mx-[12%]">
            <div className="md:h-[600px] sm:h-[500px] h-full w-auto">
              <img
                src={child1}
                alt={child1}
                className="h-full w-auto rounded-2xl"
              />
            </div>
            <div className="md:h-[600px] sm:h-[500px] h-full w-auto">
              <img
                src={child2}
                alt={child2}
                className="h-full w-auto rounded-2xl"
              />
            </div>
          </div>
          <BoldTextBySlash text={aloeVeraProjectData[4]} />
          <BoldTextBySlash text={aloeVeraProjectData[5]} />
        </div>
      </div>

      <Banner src={banner1} />

      {/* Integrating Learning with Sustainable Economic Growth */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 font-body sm:gap-10 mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3 text-justify">
          <div className="font-subtitle">
            {aloeVeraProjectData[6]}
            <div className="flex flex-col gap-6 sm:gap-10 font-body indent-5 sm:indent-8 sm:my-4 text-justify">
              <BoldTextBySlash text={aloeVeraProjectData[7]} />
              <BoldTextBySlash text={aloeVeraProjectData[8]} />
              <BoldTextBySlash text={aloeVeraProjectData[9]} />
            </div>
          </div>
        </div>
      </div>

      {/* imgae */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] py-[20px] sm:py-[60px] h-auto max-w-6xl mx-5 sm:mx-[4%] md:mx-[8%] lg:mx-[12%]">
        <div className="md:h-[600px] sm:h-[500px] h-full w-auto">
          <img
            src={banner2}
            alt={banner2}
            className="h-full w-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Project Workflow */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          <div className="font-subtitle">{aloeVeraProjectData[10]}</div>
          <BoldText text={aloeVeraProjectData[11]} />
          <BoldText text={aloeVeraProjectData[12]} />
          <BoldText text={aloeVeraProjectData[13]} />
          <BoldText text={aloeVeraProjectData[14]} />
        </div>
      </div>

      {/* image slide */}
      <div className="max-w-full mx-5 sm:mx-8 flex justify-center py-[20px] sm:py-[60px]">
        <ImageSlider imgGroup={imgSlider} />
      </div>

      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

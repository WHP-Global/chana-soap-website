import { useGoogleSheets } from "../services/googleSheetService";
import AFClip1 from "/EmpoweringFarmerProject/AF-clip-1.mp4";
import AFClip2 from "/EmpoweringFarmerProject/AF-clip-2.mp4";
import AFImg1 from "/EmpoweringFarmerProject/AF-2.jpg";
import AFImg2 from "/EmpoweringFarmerProject/AF-4.png";
import bannerImg from "/EmpoweringFarmerProject/AF-3.webp";
import bannerImg2 from "/EmpoweringFarmerProject/AF-1.jpg";
import Banner from "../components/banner";

import { useRef } from "react";
import { BoldTextBySlash } from "../services/BoldText";

export default function EmpoweringFarmerProject() {
  const { getLocalizedData } = useGoogleSheets();

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoClick = (videoRef) => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // ดึงข้อมูลจากชีต "empowering project"
  const empoweringProjectData = getLocalizedData("empowering project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[487px] sm:h-[587] md:h-[687px] bg-gray-400 flex justify-center items-center">
        <img
          src={bannerImg}
          alt={bannerImg}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Introduction to African Nightcrawler Vermicomposting */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {empoweringProjectData[1]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4  text-justify">
          <div>
            <BoldTextBySlash text={empoweringProjectData[2]} />
          </div>
          <div className="py-5 font-subtitle text-center indent-0  sm:-mb-4">
            {empoweringProjectData[3]}
          </div>
          <div className="md:text-nowrap">
            <BoldTextBySlash text={empoweringProjectData[4]} />
          </div>
          <BoldTextBySlash text={empoweringProjectData[5]} />
          <BoldTextBySlash text={empoweringProjectData[6]} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto py-[20px] sm:py-[60px]">
        <div className="md:h-[600px] sm:h-[500px] h-full md:w-[500px] sm:w-[350px] w-[90%]">
          <img
            src={AFImg2}
            alt={AFImg2}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="md:h-[600px] sm:h-[500px] h-full md:w-[500px] sm:w-[350px] w-[90%]">
          <img
            src={AFImg1}
            alt={AFImg1}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* Steps to Making Vermicompost */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="text-center font-subtitle py-5">
          {empoweringProjectData[7]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3 text-justify">
          {/* Material Preparation */}
          <div>
            {empoweringProjectData[8]}
            <div className="font-body-bold pt-2">
              {empoweringProjectData[9]}
            </div>
            <div className="ml-3 mt-1">
              <BoldTextBySlash text={empoweringProjectData[10]} />
            </div>
          </div>

          {/* Creating the Worm Habitat */}
          <div>
            <div className="font-body-bold">{empoweringProjectData[11]}</div>
            <div className="ml-3 mt-1">
              <BoldTextBySlash text={empoweringProjectData[12]} />
            </div>
          </div>

          {/* Feeding the Worms */}
          <div>
            <div className="font-body-bold">{empoweringProjectData[13]}</div>
            <div className="ml-3 mt-1">
              <BoldTextBySlash text={empoweringProjectData[14]} />
            </div>
          </div>

          {/* Harvesting Vermicompost */}
          <div>
            <div className="font-body-bold">{empoweringProjectData[15]}</div>
            <div className="ml-3 mt-1">
              <BoldTextBySlash text={empoweringProjectData[16]} />
            </div>
          </div>
        </div>
      </div>

      {/* VDO */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto py-[20px] sm:py-[60px]">
        <div className="md:h-[500px] sm:h-[500px] h-[350px] lg:w-[680px] md:w-[00px] sm:w-[500px] w-[80%]">
          <video
            ref={videoRef1}
            onClick={() => handleVideoClick(videoRef1)}
            autoPlay
            className="h-full w-full object-cover rounded-2xl"
          >
            <source src={AFClip1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:h-[500px] sm:h-[500px] h-[350px] lg:w-[680px] md:w-[500px] sm:w-[400px] w-[80%]">
          <video
            ref={videoRef2}
            onClick={() => handleVideoClick(videoRef2)}
            muted
            autoPlay
            className="h-full w-full object-cover  rounded-2xl"
          >
            <source src={AFClip2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 font-body sm:gap-10 mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          {/* Results in Mangosteen Orchards and Aloe Vera Farms */}
          <div className="font-subtitle">
            {empoweringProjectData[17]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={empoweringProjectData[18]} />
            </div>
          </div>
          <div className="text-center indent-0 text-balance">
            <BoldTextBySlash text={empoweringProjectData[19]} />
          </div>

          {/* Value Addition through Soap Production */}
          <div className="font-subtitle">
            {empoweringProjectData[20]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={empoweringProjectData[21]} />
            </div>
          </div>
          <div className="text-center indent-0 text-balance">
            <BoldTextBySlash text={empoweringProjectData[22]} />
          </div>

          {/* Value Addition through Soap Production */}
          <div className="font-subtitle">
            {empoweringProjectData[23]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={empoweringProjectData[24]} />
            </div>
          </div>
          <div className="text-center indent-0 text-balance">
            <BoldTextBySlash text={empoweringProjectData[25]} />
          </div>

          <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
            <BoldTextBySlash text={empoweringProjectData[26]} />
          </div>
        </div>
      </div>
      <Banner src={bannerImg2} isHavePosition />
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

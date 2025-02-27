import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import inspirationImg from "/image1.png";
import bannerImg from "/banner6.png";
import bannerImg2 from "/banner7.png";
import bannerImg3 from "/banner1.png";
import bannerImg4 from "/banner9.png";
import bannerImg5 from "/forest.gif";
import productImg from "/image3.png";
import Banner from "../components/Banner";
import { BoldText, BoldTextBySlash } from "../services/BoldText";

export default function AboutUs() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();

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
      <div className="relative w-full h-[487px] sm:h-[587] md:h-[687px] flex justify-center items-center">
        <img
          src={bannerImg5}
          alt="bannerImg5"
          className="h-full w-full object-cover"
        />
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
        <div className="py-[40px] font-header text-center">
          {aboutUsData[5]}
        </div>
        <div className="py-5 mx-2 font-title text-center text-balance">
          {aboutUsData[6]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 text-justify">
          <BoldTextBySlash text={aboutUsData[7]} />
          <BoldTextBySlash text={aboutUsData[8]} />
          <BoldTextBySlash text={aboutUsData[9]} />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto py-[20px] sm:py-[30px]">
            <div className="md:h-[700px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={inspirationImg}
                alt="inspirationImg"
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
            <div className="md:h-[700px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={inspirationImg}
                alt="inspirationImg"
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <BoldTextBySlash text={aboutUsData[10]} />
          <BoldTextBySlash text={aboutUsData[11]} />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px]  h-auto py-[20px] sm:py-[30px]">
            <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={inspirationImg}
                alt="inspirationImg"
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <BoldTextBySlash text={aboutUsData[12]} />
          <BoldTextBySlash text={aboutUsData[13]} />

          <div className="text-center font-caption indent-0">
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
      <Banner src={bannerImg} />
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
            <div className="font-body mt-2 sm:mt-10 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[23]} />
            </div>
          </div>

          <div className="font-subtitle">
            {aboutUsData[24]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[25]} />
            </div>
            <div className="font-body mt-2 sm:mt-10 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[26]} />
            </div>
          </div>

          <div className="text-center font-caption my-2 sm:my-3 indent-0 ">
            {aboutUsData[27]}
          </div>

          <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
            <BoldTextBySlash text={aboutUsData[28]} />
          </div>
        </div>
      </div>
      {/* banner */}
      <Banner src={bannerImg2} />
      <div className="flex flex-col font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 font-color-primary py-[20px] sm:py-[30px]">
        <div className="text-center font-caption indent-0 max-w-6xl mx-auto text-balance">
          {aboutUsData[29]}
        </div>
      </div>

      {/*3. commitment */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 h-auto py-[20px] sm:py-[60px] mx-5 sm:mx-8 md:mx-10 lg:mx-16">
        <div className="md:h-[700px] sm:h-[500px] h-[350px] w-auto">
          <img
            src={productImg}
            alt="productImg"
            className="h-full w-auto object-cover rounded-2xl"
          />
        </div>
        <div id="commitment"></div>
        <div className="md:h-[700px] sm:h-[500px] h-[350px] w-auto">
          <img
            src={productImg}
            alt="productImg"
            className="h-full w-auto object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* content */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-5 font-title text-center">{aboutUsData[30]}</div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 text-justify">
          <BoldTextBySlash text={aboutUsData[31]} />
          <BoldTextBySlash text={aboutUsData[32]} />
          <BoldTextBySlash text={aboutUsData[33]} />

          <div className=" bg-secondary rounded-[20px] p-2 sm:p-4 text-balance md:text-wrap text-center flex flex-col gap-3 indent-0">
            <BoldText text={aboutUsData[34]} />
            <BoldText text={aboutUsData[35]} />
          </div>

          <BoldTextBySlash text={aboutUsData[36]} />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px]  h-auto py-[20px] sm:py-[30px]">
            <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={bannerImg3}
                alt="inspirationImg"
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="font-subtitle indent-0">
            {aboutUsData[37]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[38]} />
            </div>
          </div>

          <div className="indent-0 text-wrap">
            <div className="font-subtitle mb-2 sm:mb-3">{aboutUsData[39]}</div>
            <BoldText text={aboutUsData[40]} />
            <BoldText text={aboutUsData[41]} />
            <BoldText text={aboutUsData[42]} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto py-[20px] sm:py-[30px]">
            <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={bannerImg3}
                alt="bannerImg3"
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
            <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={bannerImg3}
                alt="bannerImg3"
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="font-subtitle indent-0">
            {aboutUsData[43]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[44]} />
            </div>
            <div className="font-body mt-2 sm:mt-10 indent-5 sm:indent-8">
              <BoldTextBySlash text={aboutUsData[45]} />
            </div>
          </div>

          <div className="text-center font-caption my-2 sm:my-3 indent-0 text-balance">
            {aboutUsData[46]}
          </div>
        </div>
      </div>
      {/* banner */}
      <Banner src={bannerImg4} />
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

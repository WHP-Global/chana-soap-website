import { useGoogleSheets } from "../services/googleSheetService";
import Banner from "../components/banner";
import bannerImg from "/image1.png";
import Img from "/image4.png";
import bannerImg2 from "/banner13.png";
import bannerImg3 from "/banner4.png";
import bannerImg4 from "/banner3.png";
import { BoldText } from "../services/BoldText";

export default function EqLifeProject() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "eq life project"
  const eqLifeProjectData = getLocalizedData("eq life project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[487px] sm:h-[587] md:h-[687px] bg-gray-400 flex justify-center items-center">
      <img
          src={bannerImg4}
          alt="bannerImg4"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-5 font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16">
          {eqLifeProjectData[1]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4">
          <div>{eqLifeProjectData[2]}</div>
          <div>{eqLifeProjectData[3]}</div>
          <div className=" bg-secondary rounded-[20px] p-2 sm:p-4 text-balance md:text-wrap text-center flex flex-col gap-3">
            <BoldText text={eqLifeProjectData[4]} />
            <BoldText text={eqLifeProjectData[5]} />
          </div>
          <div>{eqLifeProjectData[6]}</div>
        </div>
      </div>
        <Banner img={bannerImg} />

      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 font-body sm:gap-10 mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3 ">
          {/* Our Commitment to Social Impact */}
          <div className="font-subtitle">
            {eqLifeProjectData[7]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              {eqLifeProjectData[8]}
            </div>
          </div>
        </div>
      </div>

        <Banner img={bannerImg2} />

        <div className="font-color-primary max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
            {/*How Soap Chana Contributes */}
            <div>
              <div className="font-subtitle py-2">{eqLifeProjectData[9]}</div>
              <BoldText text={eqLifeProjectData[10]} />
              <BoldText text={eqLifeProjectData[11]} />
              <BoldText text={eqLifeProjectData[12]} />
            </div>

            {/* Be Part of the Change */}
            <div className="font-subtitle">
              {eqLifeProjectData[13]}
              <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
                {eqLifeProjectData[14]}
              </div>
            </div>

            <div className="text-center font-caption my-2 sm:my-4 indent-0">
              {eqLifeProjectData[15]}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto py-[20px] sm:py-[30px]">
              <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
                <img
                  src={Img}
                  alt=" Img"
                  className="h-full w-auto object-cover rounded-2xl"
                />
              </div>
              <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
                <img
                  src={Img}
                  alt=" Img"
                  className="h-full w-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-15">
          <hr className="w-[250px] h-[1px] bg-primary border-none" />
        </div>
    </div>
  );
}

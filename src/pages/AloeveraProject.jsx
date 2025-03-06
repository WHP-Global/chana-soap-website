import { useGoogleSheets } from "../services/googleSheetService";
import hero from "/AloeVera/hero.jpeg";
import banner1 from "/AloeVera/banner1.jpg";
import banner2 from "/AloeVera/banner2.jpg";
import community from "/AloeVera/community.jpg";
import empoweringYouth from "/AloeVera/empoweringYouth.jpg";
import banner3 from "/AloeVera/banner3.jpg";
import Banner from "../components/Banner";

import { BoldText, BoldTextBySlash } from "../services/BoldText";

export default function AloeveraProject() {
  const { getLocalizedData } = useGoogleSheets();

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
          <div>
            <BoldTextBySlash text={aloeVeraProjectData[2]} />
          </div>
        </div>
      </div>
      <Banner src={banner1} />

      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 font-body sm:gap-10 mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3 text-justify">
          {/* Satiyasai School: Transforming Learning into Opportunity */}
          <div className="font-subtitle">
            {aloeVeraProjectData[3]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aloeVeraProjectData[4]} />
            </div>
          </div>
          {/* The Children's Foundation: Empowering the Future */}
          <div className="font-subtitle">
            {aloeVeraProjectData[5]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              <BoldTextBySlash text={aloeVeraProjectData[6]} />
            </div>
          </div>
        </div>
      </div>

      <Banner src={banner2} />

      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          {/* Why Aloe Vera? */}
          <div>
            <div className="font-subtitle py-2">{aloeVeraProjectData[7]}</div>
            <BoldText text={aloeVeraProjectData[8]} />
            <BoldText text={aloeVeraProjectData[9]} />
            <BoldText text={aloeVeraProjectData[10]} />
          </div>
          {/* How the Project Works */}
          <div>
            <div className="font-subtitle py-2">{aloeVeraProjectData[11]}</div>
            <BoldText text={aloeVeraProjectData[12]} />
            <BoldText text={aloeVeraProjectData[13]} />
            <BoldText text={aloeVeraProjectData[14]} />
            <BoldText text={aloeVeraProjectData[15]} />
          </div>
          {/* Benefits of the Initiative */}
          <div>
            <div className="font-subtitle py-2">{aloeVeraProjectData[16]}</div>
            <BoldText text={aloeVeraProjectData[17]} />
            <BoldText text={aloeVeraProjectData[18]} />
            <BoldText text={aloeVeraProjectData[19]} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] h-auto py-[20px] sm:py-[60px]">
            <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={community}
                alt={community}
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
            <div className="md:h-[600px] sm:h-[500px] h-[350px] w-auto">
              <img
                src={empoweringYouth}
                alt={empoweringYouth}
                className="h-full w-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* We Believe in the Power of Giving Back */}
          <div className="font-subtitle">
            {aloeVeraProjectData[20]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8 text-justify">
              <BoldTextBySlash text={aloeVeraProjectData[21]} />
            </div>
          </div>
        </div>
      </div>

      <Banner src={banner3} />
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

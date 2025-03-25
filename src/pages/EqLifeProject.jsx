import { useGoogleSheets } from "../services/googleSheetService";
import Banner from "../components/Banner";
import hero from "/EqLife/hero.jpg";
import banner1 from "/EqLife/banner1.jpg";
import banner2 from "/EqLife/banner2.jpeg";
import walkTogether from "/EqLife/walkTogether.jpg";
import change from "/EqLife/change.jpg";
import { BoldText, BoldTextBySlash } from "../services/BoldText";

export default function EqLifeProject() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "eq life project"
  const eqLifeProjectData = getLocalizedData("eq life project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[487px] sm:h-[587] md:h-[687px] bg-gray-400 flex justify-center items-center">
        <img src={hero} alt={hero} className="h-full w-full object-cover" />
      </div>
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {eqLifeProjectData[1]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4 text-justify">
          <BoldTextBySlash text={eqLifeProjectData[2]} />
        </div>
      </div>

      {/* How We Support the Community */}
      <div className="font-color-primary max-w-6xl mx-auto py-[20px] sm:py-[30px]">
        <div className="flex flex-col gap-5 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          <div className="font-subtitle">{eqLifeProjectData[3]}</div>
          <div>
            <BoldText text={eqLifeProjectData[4]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[5]} />
              <BoldTextBySlash text={eqLifeProjectData[6]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[7]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[8]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[9]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[10]} />
              <BoldTextBySlash text={eqLifeProjectData[11]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[12]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[13]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[14]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[15]} />
              <BoldTextBySlash text={eqLifeProjectData[16]} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-caption my-10 indent-0 text-balance font-color-primary">
        <BoldTextBySlash text={eqLifeProjectData[17]} />
      </div>

      <Banner src={banner1} />
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

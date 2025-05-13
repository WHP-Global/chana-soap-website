import { useGoogleSheets } from "../services/googleSheetService";
import Banner from "../components/Banner";
import { BoldText, BoldTextBySlash } from "../services/BoldText";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function EqLifeProject() {
  const { getLocalizedData } = useGoogleSheets();
  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("EqLife")
  );

  // ดึงข้อมูลจากชีต "eq life project"
  const eqLifeProjectData = getLocalizedData("eq life project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img
          src={buildImageSrc(categoryImages[1])}
          alt={categoryImages[1]}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {eqLifeProjectData[0]}
          <div className="font-title mt-5">{eqLifeProjectData[1]}</div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4 text-justify">
          <BoldTextBySlash text={eqLifeProjectData[2]} />
        </div>

        <div className="text-center font-caption my-5 sm:my-10 indent-0 text-balance">
          {eqLifeProjectData[3]}
        </div>
      </div>

      {/* How We Support the Community */}
      <div className="font-color-primary max-w-6xl mx-auto py-[20px] sm:py-[30px]">
        <div className="flex flex-col gap-5 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16">
          <div className="font-subtitle">{eqLifeProjectData[4]}</div>
          <div>
            <BoldText text={eqLifeProjectData[5]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[6]} />
              <BoldTextBySlash text={eqLifeProjectData[7]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[8]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[9]} />
              <BoldTextBySlash text={eqLifeProjectData[10]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[11]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[12]} />
              <BoldTextBySlash text={eqLifeProjectData[13]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[14]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[15]} />
            </div>
          </div>
          <div>
            <BoldText text={eqLifeProjectData[16]} />
            <div>
              <BoldTextBySlash text={eqLifeProjectData[17]} />
              <BoldTextBySlash text={eqLifeProjectData[18]} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-caption my-10 indent-0 text-balance font-color-primary">
        <BoldTextBySlash text={eqLifeProjectData[19]} />
      </div>

      <div className="text-center font-caption my-10 indent-0 text-balance font-color-primary">
        <BoldTextBySlash text={eqLifeProjectData[20]} />
      </div>

      <Banner src={buildImageSrc(categoryImages[0])} />
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

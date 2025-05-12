import { useGoogleSheets } from "../services/googleSheetService";
import Banner from "../components/Banner";
import { BoldText, BoldTextBySlash } from "../services/BoldText";
import ImageSlider from "../components/ImageSlider";
import ImgTwo from "../components/ImgTwo";
import ImgOne from "../components/ImgOne";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function AloeveraProject() {
  const { getLocalizedData } = useGoogleSheets();
  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("AloeVera")
  );

  const imgSlider = [
    buildImageSrc(categoryImages[0]),
    buildImageSrc(categoryImages[1]),
    buildImageSrc(categoryImages[2]),
    buildImageSrc(categoryImages[3]),
  ];

  // ดึงข้อมูลจากชีต "aloe vera project"
  const aloeVeraProjectData = getLocalizedData("aloe vera project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img
          src={buildImageSrc(categoryImages[10])}
          alt={categoryImages[10]}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {aloeVeraProjectData[0]}
          <div className="font-title mt-5">{aloeVeraProjectData[1]}</div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4 text-justify">
          <BoldTextBySlash text={aloeVeraProjectData[2]} />
          <BoldTextBySlash text={aloeVeraProjectData[3]} />

          {/* 2imgae */}
          <ImgTwo
            imgGroup={[
              buildImageSrc(categoryImages[6]),
              buildImageSrc(categoryImages[7]),
            ]}
          />

          <BoldTextBySlash text={aloeVeraProjectData[4]} />
          <BoldTextBySlash text={aloeVeraProjectData[5]} />
        </div>
      </div>

      <Banner src={buildImageSrc(categoryImages[4])} />

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

      {/* 1 imgae */}
      <ImgOne img={buildImageSrc(categoryImages[5])} />

      {/* Project Workflow */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          <div className="font-subtitle">{aloeVeraProjectData[10]}</div>
          <BoldText text={aloeVeraProjectData[11]} />
          <BoldTextBySlash text={aloeVeraProjectData[12]} />
          <BoldText text={aloeVeraProjectData[13]} />
          <BoldTextBySlash text={aloeVeraProjectData[14]} />
          <BoldText text={aloeVeraProjectData[15]} />
          <BoldTextBySlash text={aloeVeraProjectData[16]} />
          <BoldText text={aloeVeraProjectData[17]} />
          <BoldTextBySlash text={aloeVeraProjectData[18]} />
        </div>
      </div>

      {/* image slide */}
      <div className="max-w-full mx-5 sm:mx-[4%] md:mx-[8%] lg:mx-[15%] flex justify-center py-[20px] sm:py-[40px]">
        <ImageSlider imgGroup={imgSlider} />
      </div>

      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4  text-justify">
          <div className="mt-2 sm:mt-4 mb-0 font-subtitle text-center indent-0 ">
            {aloeVeraProjectData[19]}
          </div>
          <BoldTextBySlash text={aloeVeraProjectData[20]} />
          <BoldTextBySlash text={aloeVeraProjectData[21]} />
        </div>
      </div>

      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

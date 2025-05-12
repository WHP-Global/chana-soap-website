import { useGoogleSheets } from "../services/googleSheetService";
import { BoldText, BoldTextBySlash } from "../services/BoldText";
import ImageSlider from "../components/ImageSlider";
import ImgTwo from "../components/ImgTwo";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function EmpoweringFarmerProject() {
  const { getLocalizedData } = useGoogleSheets();
  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("EmpoweringFarmerProject")
  );

  const imgSlider = [
    buildImageSrc(categoryImages[5]),
    buildImageSrc(categoryImages[6]),
    buildImageSrc(categoryImages[7]),
    buildImageSrc(categoryImages[8]),
    buildImageSrc(categoryImages[9]),
    buildImageSrc(categoryImages[10]),
    buildImageSrc(categoryImages[11]),
    buildImageSrc(categoryImages[12]),
    buildImageSrc(categoryImages[13]),
    buildImageSrc(categoryImages[14]),
  ];

  // ดึงข้อมูลจากชีต "empowering project"
  const empoweringProjectData = getLocalizedData("empowering project");
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img
          src={buildImageSrc(categoryImages[4])}
          alt={categoryImages[4]}
          className="h-full w-full object-cover"
        />
      </div>
      {/*  Turning Food Waste into Fertilizer, Supporting Farmers, and Creating Natural Soap */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {empoweringProjectData[0]}
          <div className="font-title mt-5">{empoweringProjectData[1]}</div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mt-0 sm:mt-5 mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4  text-justify">
          <BoldTextBySlash text={empoweringProjectData[2]} />
          <BoldTextBySlash text={empoweringProjectData[3]} />

          {/* Sharing Knowledge with the Community */}
          <div className="mt-2 sm:mt-4 mb-0 font-subtitle text-center indent-0 ">
            {empoweringProjectData[4]}
          </div>
          <BoldTextBySlash text={empoweringProjectData[5]} />
          <BoldTextBySlash text={empoweringProjectData[6]} />

          {/* 2 imgae */}
          <ImgTwo
            imgGroup={[
              buildImageSrc(categoryImages[1]),
              buildImageSrc(categoryImages[0]),
            ]}
          />
        </div>
      </div>

      {/* 4 Steps to Make AF Earthworm Compost */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          <div className="font-subtitle">{empoweringProjectData[7]}</div>
          <BoldText text={empoweringProjectData[8]} />
          <BoldTextBySlash text={empoweringProjectData[9]} />
          <BoldText text={empoweringProjectData[10]} />
          <BoldTextBySlash text={empoweringProjectData[11]} />
          <BoldText text={empoweringProjectData[12]} />
          <BoldTextBySlash text={empoweringProjectData[13]} />
          <BoldText text={empoweringProjectData[14]} />
          <BoldTextBySlash text={empoweringProjectData[15]} />
          {/* 2 imgae */}
          <ImgTwo
            imgGroup={[
              buildImageSrc(categoryImages[6]),
              buildImageSrc(categoryImages[7]),
            ]}
          />
        </div>
      </div>

      {/* Project Outcomes of the AF Earthworm Project */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16">
          <div className="text-center font-subtitle my-3">
            {empoweringProjectData[17]}
          </div>

          <ul className="space-y-3 flex flex-col w-full max-w-2xl mx-auto">
            {[
              empoweringProjectData[18],
              empoweringProjectData[19],
              empoweringProjectData[20],
              empoweringProjectData[21],
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center  font-body w-full max-w-2xl text-wrap sm:whitespace-nowrap"
              >
                <span className="w-8 h-8 flex items-center justify-center mr-5">
                  <svg
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#6C7C6E"
                    className="w-8 h-8"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16,2 C8.2680135,2 2,8.2680135 2,16 C2,23.7319865 8.2680135,30 16,30 C23.7319865,30 30,23.7319865 30,16 C30,8.2680135 23.7319865,2 16,2 Z M13,22.4142136 L7.29289322,16.7071068 C6.90236893,16.3165825 6.90236893,15.6834175 7.29289322,15.2928932 C7.68341751,14.9023689 8.31658249,14.9023689 8.70710678,15.2928932 L13,19.5857864 L23.2928932,9.29289322 C23.6834175,8.90236893 24.3165825,8.90236893 24.7071068,9.29289322 C25.0976311,9.68341751 25.0976311,10.3165825 24.7071068,10.7071068 L13,22.4142136 Z"></path>
                    </g>
                  </svg>
                </span>
                <div className="text-left w-[238px]">
                  <BoldTextBySlash text={item} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* From food waste - compost - crops - natural soap */}
      <div className="max-w-3xl mx-auto ">
        <div className="flex justify-center py-15">
          <hr className="w-[250px] h-[1px] bg-primary border-none" />
        </div>

        <div className=" bg-secondary rounded-sm p-2 sm:p-4 text-balance md:text-wrap text-center flex gap-3 justify-center items-center min-w-[350px] mx-1">
          {[
            empoweringProjectData[23],
            empoweringProjectData[24],
            empoweringProjectData[25],
            empoweringProjectData[26],
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-1 sm:gap-3 "
            >
              <div className="text-center min-w-[60px] font-color-primary  font-body sm:font-subtitle">
                {step}
              </div>
              {index < 3 && (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-[18px] h-[20px] sm:w-[21px] sm:h-[24px]"
                  >
                    <path
                      fill="#293b2b"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center font-caption my-10 indent-0 text-balance font-color-primary">
          <BoldTextBySlash text={empoweringProjectData[27]} />
        </div>
      </div>
      {/* image slide */}
      <div className="max-w-full mx-5 sm:mx-[4%] md:mx-[8%] lg:mx-[15%] flex justify-center py-[20px] sm:py-[40px]">
        <ImageSlider imgGroup={imgSlider} />
      </div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

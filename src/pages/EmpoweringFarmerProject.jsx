import Banner from "../components/banner";
import { useGoogleSheets } from "../services/googleSheetService";
import bannerImg from "/image1.png";
import Img from "/image4.png";
import bannerImg2 from "/banner13.png";
import bannerImg3 from "/banner4.png";
import bannerImg4 from "/banner3.png";

export default function EmpoweringFarmerProject() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "empowering project"
  const empoweringProjectData = getLocalizedData("empowering project");
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
      {/* Introduction to African Nightcrawler Vermicomposting */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-5 font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16">
          {empoweringProjectData[1]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 indent-5 sm:indent-8 sm:my-4">
          <div>{empoweringProjectData[2]}</div>
          <div className="font-subtitle text-center indent-0  sm:-mb-4">
            {empoweringProjectData[3]}
          </div>
          <div className="md:text-nowrap">{empoweringProjectData[4]}</div>
          <div>{empoweringProjectData[5]}</div>
          <div>{empoweringProjectData[6]}</div>
        </div>

      </div>
        <Banner img={bannerImg} />

      {/* Steps to Making Vermicompost */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="text-center font-subtitle py-3 ">
          {empoweringProjectData[7]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3">
          {/* Material Preparation */}
          <div>
            {empoweringProjectData[8]}
            <div className="font-body-bold pt-2">
              {empoweringProjectData[9]}
            </div>
            <div className="ml-3 mt-1">{empoweringProjectData[10]}</div>
          </div>

          {/* Creating the Worm Habitat */}
          <div>
            <div className="font-body-bold">{empoweringProjectData[11]}</div>
            <div className="ml-3 mt-1">{empoweringProjectData[12]}</div>
          </div>

          {/* Feeding the Worms */}
          <div>
            <div className="font-body-bold">{empoweringProjectData[13]}</div>
            <div className="ml-3 mt-1">{empoweringProjectData[14]}</div>
          </div>

          {/* Harvesting Vermicompost */}
          <div>
            <div className="font-body-bold">{empoweringProjectData[15]}</div>
            <div className="ml-3 mt-1">{empoweringProjectData[16]}</div>
          </div>
        </div>

      </div>
        <Banner img={bannerImg2} />

      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 font-body sm:gap-10 mx-5 sm:mx-8 md:mx-10 lg:mx-16 my-3 ">
          {/* Results in Mangosteen Orchards and Aloe Vera Farms */}
          <div className="font-subtitle">
            {empoweringProjectData[17]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              {empoweringProjectData[18]}
            </div>
          </div>
          <div className="text-center indent-0">
            {empoweringProjectData[19]}
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

          {/* Value Addition through Soap Production */}
          <div className="font-subtitle">
            {empoweringProjectData[20]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              {empoweringProjectData[21]}
            </div>
          </div>
          <div className="text-center indent-0">
            {empoweringProjectData[22]}
          </div>

          {/* Value Addition through Soap Production */}
          <div className="font-subtitle">
            {empoweringProjectData[23]}
            <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
              {empoweringProjectData[24]}
            </div>
          </div>
          <div className="text-center indent-0">
            {empoweringProjectData[25]}
          </div>

          <div className="font-body mt-2 sm:mt-3 indent-5 sm:indent-8">
            {empoweringProjectData[26]}
          </div>
        </div>
      </div>
        <Banner img={bannerImg3} />
        <div className="flex justify-center py-15">
          <hr className="w-[250px] h-[1px] bg-primary border-none" />
        </div>
    </div>
  );
}

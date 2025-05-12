import { useGoogleSheets } from "../services/googleSheetService";
import { Link } from "react-router-dom";
import { BoldTextBySlash } from "../services/BoldText";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function Projects() {
  const { getLocalizedData } = useGoogleSheets();
  const projectsData = getLocalizedData("projects");
  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("Projects")
  );

  return (
    <div>
      <div className="w-full">
        <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
          <img
            src={buildImageSrc(categoryImages[6])}
            alt={categoryImages[6]}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" z-0 max-w-6xl mx-auto pt-5 px-6 text-center font-color-primary">
        <div className="font-header">{projectsData[1] || "Project"}</div>

        <div className="max-w-3xl mx-auto mt-6 ">
          <div className="border-t bg-fourth  w-1/3 mx-auto mt-5 mb-10"></div>

          <div className="font-title text-balance">{projectsData[2]}</div>

          <div className="border-b bg-fourth  w-1/3 mx-auto mt-10"></div>
        </div>
        <div className="font-body leading-relaxed my-12 text-justify indent-5 sm:indent-8">
          <BoldTextBySlash text={projectsData[3]} />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[400px]">
          <img
            src={buildImageSrc(categoryImages[2])}
            alt={categoryImages[2]}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full px-6 md:px-20 py-12 font-color-primary">
        <div className="max-w-5xl mx-auto ">
          <p className="font-body  leading-relaxed  indent-5 sm:indent-8">
            <BoldTextBySlash text={projectsData[4]} />
          </p>

          <p className="font-body  leading-relaxed  mt-6 indent-5 sm:indent-8">
            <BoldTextBySlash text={projectsData[5]} />
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12  items-center lg:items-start mt-10 indent-5 sm:indent-8 ">
          <div className="flex-1">
            <p className="font-body  leading-relaxed ">
              <BoldTextBySlash text={projectsData[6]} />
            </p>

            <p className="font-body  leading-relaxed  mt-6">
              <BoldTextBySlash text={projectsData[7]} />
            </p>
          </div>

          {/* Image in the right */}
          <div className="flex-shrink-0">
            <img
              src={buildImageSrc(categoryImages[4])}
              alt={categoryImages[4]}
              className="w-[350px] h-[450px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* Let's Explore Our Project Section */}
      <div className="w-full bg-[#fdf8f2] py-12 px-4 sm:px-6 lg:px-20 -mt-4">
        {/* Section Title */}
        <h2 className="text-center font-title font-color-primary text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10">
          <BoldTextBySlash text={projectsData[8]} />
        </h2>

        {/* Project List */}
        <div className="max-w-4xl mx-auto space-y-6 font-color-primary">
          {[
            {
              title: <BoldTextBySlash text={projectsData[9]} />,
              description: <BoldTextBySlash text={projectsData[10]} />,
              image: buildImageSrc(categoryImages[0]),
              link: "/Happy-Worm-Farm",
            },
            {
              title: <BoldTextBySlash text={projectsData[11]} />,
              description: <BoldTextBySlash text={projectsData[12]} />,
              image: buildImageSrc(categoryImages[1]),
              link: "/aloe-vera",
            },
            {
              title: <BoldTextBySlash text={projectsData[13]} />,
              description: <BoldTextBySlash text={projectsData[14]} />,
              image: buildImageSrc(categoryImages[5]),
              link: "/eq-life",
            },
          ].map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="block bg-[#DDE4D9] rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => window.scroll(0, 0)}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:p-6 space-y-4 sm:space-y-0 sm:space-x-6 ">
                <div className="w-full sm:w-[40%] md:w-[30%] h-52 sm:h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-b-none sm:rounded-b-lg rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left p-2 sm:p-0 sm:w-[80%]">
                  <div className="font-body-bold text-balance">
                    {project.title}
                  </div>
                  <div className="font-body mt-2 sm:text-base">
                    {project.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-[500px]">
          <img
            src={buildImageSrc(categoryImages[3])}
            alt={categoryImages[3]}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

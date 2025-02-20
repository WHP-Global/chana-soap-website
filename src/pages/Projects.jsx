import { useEffect } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import banner2 from "/banner2.png";
import banner8 from "/banner8.png";
import banner4 from "/banner4.png";
import banner10 from "/banner10.png";
import beach from "/beach.jpeg";
import { Link } from "react-router-dom";

export default function Projects() {
  const { getLocalizedData } = useGoogleSheets();
  const projectsData = getLocalizedData("projects");

  return (
    <div>
      <div className="w-full">
        <div className="w-full h-[678px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
          <img
            src={banner2}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center py-16 px-6 font-color-primary">
        <h1 className="font-header">{projectsData[1] || "Project"}</h1>

        <div className="my-6 border-t bg-fourth  w-1/3 mx-auto mt-15 mb-8"></div>

        <div className="font-title text-balance">
          {projectsData[2] ||
            "Creating a Sustainable Ecosystem: The Journey of Chana Soap"}
        </div>

        <div className="my-6 border-t bg-fourth w-1/3 mx-auto mb-15 mt-8"></div>

        <div className="font-body leading-relaxed mt-6 text-justify indent-5 sm:indent-8">
          {projectsData[3]}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[400px]">
          <img
            src={banner8}
            alt="Everdrop Natural Care"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full px-6 md:px-20 py-12 font-color-primary">
        <div className="max-w-5xl mx-auto ">
          <p className="font-body  leading-relaxed  indent-5 sm:indent-8">
            {projectsData[4] || "Loading..."}
          </p>

          <p className="font-body  leading-relaxed  mt-6 indent-5 sm:indent-8">
            {projectsData[5] || "Loading..."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12  items-center lg:items-start mt-10 indent-5 sm:indent-8 ">
          <div className="flex-1">
            <p className="font-body  leading-relaxed ">
              {projectsData[6] || "Loading..."}
            </p>

            <p className="font-body  leading-relaxed  mt-6">
              {projectsData[7] || "Loading..."}
            </p>
          </div>

          {/* Image in the right */}
          <div className="flex-shrink-0">
            <img
              src={beach}
              alt="Project Image"
              className="w-[350px] h-[450px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* Let's Explore Our Project Section */}
      <div className="w-full bg-[#fdf8f2] py-12 px-4 sm:px-6 lg:px-20 -mt-4">
        {/* Section Title */}
        <h2 className="text-center font-title font-color-primary text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10">
          {projectsData[8] || "Let's Explore Our Project"}
        </h2>

        {/* Project List */}
        <div className="max-w-4xl mx-auto space-y-6 font-color-primary">
          {[
            {
              title: `${projectsData[9] || "Loading..."}`,
              description:
                "Non blandit pretium, lorem urna mollis tortor, eu congue tortor libero elementum diam. Integer volutpat ex nec lacus maximus, et sagittis odio tristique. Pellentesque fringilla ut arcu eu imperdiet.",
              image: banner4,
              link: "/empowering-farmer",
            },
            {
              title: `${projectsData[10] || "Loading..."}`,
              description:
                "Non blandit pretium, lorem urna mollis tortor, eu congue tortor libero elementum diam. Integer volutpat ex nec lacus maximus, et sagittis odio tristique. Pellentesque fringilla ut arcu eu imperdiet.",
              image: banner4,
              link: "/aloe-vera",
            },
            {
              title: `${projectsData[11] || "Loading..."}`,
              description:
                "Non blandit pretium, lorem urna mollis tortor, eu congue tortor libero elementum diam. Integer volutpat ex nec lacus maximus, et sagittis odio tristique. Pellentesque fringilla ut arcu eu imperdiet.",
              image: banner4,
              link: "/eq-life",
            },
          ].map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="block bg-[#DDE4D9] rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => window.scroll(0, 0)}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full sm:w-40 h-40 object-cover rounded-b-none sm:rounded-b-lg rounded-lg"
                />
                <div className="text-center sm:text-left p-2 sm:p-0">
                  <div className="font-body-bold text-lg sm:text-xl">
                    {project.title}
                  </div>
                  <div className="font-body mt-2 text-sm sm:text-base">
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
            src={banner10}
            alt="Everdrop Natural Care"
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

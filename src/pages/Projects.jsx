import { useEffect } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import banner2 from "../../public/banner2.png";
import banner8 from "../../public/banner8.png";
import banner4 from "../../public/banner4.png";
import banner10 from "../../public/banner10.png";
import beach from "../../public/beach.jpeg";

export default function Projects() {
  const { getLocalizedData } = useGoogleSheets();
  const projectsData = getLocalizedData("projects");

  useEffect(() => {
    console.log("Fetched projectsData:", projectsData);
  }, [projectsData]);

  return (
    <div>
      <div className="w-full bg-[#fdf8f2]">
        <div className="w-full h-[678px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
          <img
            src={banner2}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {projectsData[1] || "Project"}
        </h1>

        <div className="my-6 border-t border-gray-500 w-1/3 mx-auto mt-15 mb-8"></div>

        <h2 className="text-2xl font-semibold text-gray-700">
          {projectsData[2] ||
            "Creating a Sustainable Ecosystem: The Journey of Chana Soap"}
        </h2>

        <div className="my-6 border-t border-gray-500 w-1/3 mx-auto mb-15 mt-8"></div>

        <p className="text-xl text-gray-700 leading-relaxed mt-6 text-justify">
          {projectsData[3] ||
            `"Chana Soap" is a project started by Aruth, a high school student driven to enhance the quality of life in his community by producing soap from natural ingredients. The project's core idea is to unite the community in cultivating plants that can be used to create high-quality soap. This strategy helps reduce production costs and empowers community members to become self-sufficient while learning environmentally friendly organic farming techniques.`}
        </p>
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
      <div className="w-full bg-[#fdf8f2] px-6 lg:px-20 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed text-justify">
            {projectsData[4] || "Loading..."}
          </p>

          <p className="text-xl text-gray-700 leading-relaxed text-justify mt-6">
            {projectsData[5] || "Loading..."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start mt-10">
          <div className="flex-1">
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              {projectsData[6] || "Loading..."}
            </p>

            <p className="text-xl text-gray-700 leading-relaxed text-justify mt-6">
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
      <div className="w-full bg-[#fdf8f2] py-16 px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
          Let’s Explore Our Project
        </h2>

        {/* Project List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: "Empowering Farmers in Prachinburi",
              description:
                "Non blandit pretium, lorem urna mollis tortor, eu congue tortor libero elementum diam. Integer volutpat ex nec lacus maximus, et sagittis odio tristique. Pellentesque fringilla ut arcu eu imperdiet.",
              image: banner4,
              link: "#",
            },
            {
              title: "Aloe Vera",
              description:
                "Non blandit pretium, lorem urna mollis tortor, eu congue tortor libero elementum diam. Integer volutpat ex nec lacus maximus, et sagittis odio tristique. Pellentesque fringilla ut arcu eu imperdiet.",
              image: banner4,
              link: "#",
            },
            {
              title: "EQ Life Foundation",
              description:
                "Non blandit pretium, lorem urna mollis tortor, eu congue tortor libero elementum diam. Integer volutpat ex nec lacus maximus, et sagittis odio tristique. Pellentesque fringilla ut arcu eu imperdiet.",
              image: banner4,
              link: "#",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block bg-[#DDE4D9] rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-center p-6 space-x-6">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-28 object-cover rounded-lg"
                />

                {/* Project Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#fdf8f2] py-8 px-6 mb-10">
        <p className="text-center text-lg italic text-[#2f3d2f]">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </p>
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
      <div className="border-t border-gray-500 w-1/3 mx-auto mt-20 mb-25"></div>
    </div>
  );
}

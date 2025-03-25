import { useState } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import hero from "/Products/hero.jpg";
import gentleGlow1 from "/GentleGlow/gentleGlow1.jfif";
import gentleGlow2 from "/GentleGlow/gentleGlow2.jfif";
import gentleGlow3 from "/GentleGlow/gentleGlow3.jfif";
import gentleGlow4 from "/GentleGlow/gentleGlow4.jfif";
import ingredients from "/GentleGlow/ingredients.jpg";
import banner1 from "/GentleGlow/banner1.jpg";
import { BoldTextBySlash } from "../services/BoldText";

export default function GentleGlow() {
  const { getLocalizedData } = useGoogleSheets();
  const gentleGlowData = getLocalizedData("gentle glow");

  const [selectedImage, setSelectedImage] = useState(gentleGlow4);

  return (
    <div className="w-full bg-[#fdf8f2] font-color-primary">
      {/* Banner */}
      <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img src={hero} alt={hero} className="w-full h-full object-cover" />
      </div>

      {/* Section Title */}
      <div className="font-color-primary max-w-6xl mx-auto">
        <div className="py-[40px] font-header text-center mx-5 sm:mx-8 md:mx-10 lg:mx-16 text-balance">
          {gentleGlowData[0]}
          <div className="font-title mt-5">{gentleGlowData[1]}</div>
        </div>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="border-t bg-fourth  w-1/3 mx-auto mt-5 mb-10"></div>
          <div className="font-body-bold text-balance leading-[2rem] text-center">
            {gentleGlowData[2]}
          </div>
          <div className="border-b bg-fourth  w-1/3 mx-auto mt-10"></div>
        </div>
      </div>

      {/* Main Product Image*/}
      <div className="max-w-2xl mx-auto p-6 flex justify-center">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Small Image Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-8">
        {[gentleGlow1, gentleGlow2, gentleGlow3].map((image, index) => (
          <div key={index} className="flex justify-center">
            <button
              onClick={() => setSelectedImage(image)}
              className="focus:outline-none"
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-[500px] h-[340px] object-cover rounded-lg shadow-md hover:opacity-75 transition duration-300"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Natural Ingredients Section */}
      <div className="w-full py-6 sm:py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
          {/* Product Image */}
          <div className="max-w-md">
            <img
              src={ingredients}
              alt={ingredients}
              className="w-full rounded-lg shadow-lg h-auto"
            />
          </div>

          {/* Ingredients List */}
          <div className="bg-third p-3 sm:p-8 rounded-lg shadow-md w-full max-w-2xl">
            <h3 className="font-subtitle  mb-6">
              {gentleGlowData[3] || "Loading..."}
            </h3>

            <ul className=" space-y-3">
              <li className="font-body-bold">
                {gentleGlowData[4] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>
                  <BoldTextBySlash text={gentleGlowData[5]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[6]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[7]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[8]} isHaveList />
                </li>
              </ul>

              <li className="font-body-bold">
                {gentleGlowData[9] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>
                  <BoldTextBySlash text={gentleGlowData[10]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[11]} isHaveList />
                </li>
              </ul>

              <li className="font-body-bold">
                {gentleGlowData[12] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>
                  <BoldTextBySlash text={gentleGlowData[13]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[14]} isHaveList />
                </li>
              </ul>

              <li className="font-body-bold">
                {gentleGlowData[15] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>
                  <BoldTextBySlash text={gentleGlowData[16]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[17]} isHaveList />
                </li>
                <li>
                  <BoldTextBySlash text={gentleGlowData[18]} isHaveList />
                </li>
              </ul>
            </ul>

            {/* Price */}
            <p className="font-body-bold italic text-gray-700 mt-6 text-right">
              {gentleGlowData[19]}
            </p>
          </div>
        </div>
      </div>

      {/* shopee lazada line button */}
      <div className=" flex justify-center space-x-1 sm:space-x-6 mb-10 mx-5">
        <a
          href="https://th.shp.ee/7zH4EQ3"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[275px] h-[60px] flex items-center justify-center bg-[#4b664e] font-button font-color-secondary rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          Shopee
        </a>
        <a
          // href="https://www.lazada.com"
          // target="_blank"
          rel="noopener noreferrer"
          className="w-[275px] h-[60px] flex items-center justify-center bg-[#4b664e] font-button font-color-secondary rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          Lazada
        </a>
        <a
          href="https://lin.ee/fOhW8xt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap w-[275px] h-[60px] flex items-center justify-center bg-[#4b664e] font-button font-color-secondary rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          Line Official
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 sm:py-12">
        {/* Section Title */}
        <h2 className="font-title text-center mb-10 text-balance">
          {gentleGlowData[20] || "Loading..."}
        </h2>

        {/* Benefits List */}
        <div className="space-y-10">
          {/* 1. Soothes and Relieves Skin Irritation */}
          <div>
            <h3 className="font-subtitle">
              {gentleGlowData[21] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2 list-disc ml-4">
              <li>
                <BoldTextBySlash text={gentleGlowData[22]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[23]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[24]} isHaveList />
              </li>
            </ul>
          </div>

          {/* 2. Provides Deep Moisturization and Barrier Protection */}
          <div>
            <h3 className="font-subtitle ">
              {gentleGlowData[25] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2  list-disc ml-4">
              <li>
                <BoldTextBySlash text={gentleGlowData[26]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[27]} isHaveList />
              </li>
            </ul>
          </div>

          {/* 3. Anti-Allergen & Anti-Pollution Shield */}
          <div>
            <h3 className="font-subtitle ">
              {gentleGlowData[28] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2  list-disc ml-4">
              <li>
                <BoldTextBySlash text={gentleGlowData[29]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[30]} isHaveList />
              </li>
            </ul>
          </div>

          {/* 4. Hypoallergenic & Chemical-Free Formulation */}
          <div>
            <h3 className="font-subtitle ">
              {gentleGlowData[31] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2  list-disc ml-4">
              <li>
                <BoldTextBySlash text={gentleGlowData[32]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[33]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[34]} isHaveList />
              </li>
            </ul>
          </div>

          {/* 5. Ideal for Sensitive & Allergy-Prone Skin */}
          <div>
            <h3 className="font-subtitle ">
              {gentleGlowData[35] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2  list-disc ml-4">
              <li>
                <BoldTextBySlash text={gentleGlowData[36]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[37]} isHaveList />
              </li>
              <li>
                <BoldTextBySlash text={gentleGlowData[38]} isHaveList />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[400px]">
          <img
            src={banner1}
            alt={banner1}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center py-6 sm:py-12 px-6 items-center mt-4">
        {/* Who Can Use It? */}
        <h3 className="font-title italic mb-6 text-balance">
          {gentleGlowData[39]}
        </h3>

        {/* List of Use  */}
        <ul className="space-y-6 flex flex-col items-start sm:ml-[18%]">
          {[
            gentleGlowData[40],
            gentleGlowData[41],
            gentleGlowData[42],
            gentleGlowData[43],
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center font-body w-full max-w-2xl"
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
              <p className="text-left flex-1 text-wrap">
                <BoldTextBySlash text={item} />
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

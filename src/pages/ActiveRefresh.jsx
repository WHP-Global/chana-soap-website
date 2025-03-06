import { useState } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import banner1 from "/ActiveRefresh/banner1.jpeg";
import { BoldTextBySlash } from "../services/BoldText";

export default function ActiveRefresh() {
  const { getLocalizedData } = useGoogleSheets();
  const activeRefreshData = getLocalizedData("active refresh");
  const [isHaveData, setIsHaveData] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(chana);

  return (
    <div className="w-full bg-[#fdf8f2] font-color-primary">
      {/* Banner */}
      <div className="relative w-full h-[678px] sm:h-[500px] lg:h-[678px] flex justify-center sm:justify-start items-center">
        <img
          src={banner1}
          alt={banner1}
          className="w-full h-full object-center"
        />

        <div className="absolute text-center sm:text-start py-6 sm:py-12 ml-[5%]">
          <h2 className="font-header text-white  drop-shadow-2xl shadow-amber-950">
            Active Refresh
            <br />
            Coming soon...
          </h2>
        </div>
      </div>

      {isHaveData && (
        <div>
          {/* Section Title */}
          <div className="max-w-6xl mx-auto pt-7 px-6 text-center">
            <h2 className="font-header ">
              {activeRefreshData[1] || "Gentle Glow"}
            </h2>
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
            {[soapmock, chana, soapmock].map((image, index) => (
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
              <div className="w-2xl max-w-md">
                <img
                  src={soapmock}
                  alt="Natural Ingredients"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Ingredients List */}
              <div className="bg-third p-3 sm:p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h3 className="font-subtitle  mb-6">
                  {activeRefreshData[3] || "Loading..."}
                </h3>

                <ul className=" space-y-3">
                  <li className="font-body-bold">
                    {activeRefreshData[4] || "Loading..."}
                  </li>
                  <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                    <li>
                      <BoldTextBySlash text={activeRefreshData[5]} isHaveList />
                    </li>
                    <li>
                      <BoldTextBySlash text={activeRefreshData[6]} isHaveList />
                    </li>
                    <li>
                      <BoldTextBySlash text={activeRefreshData[7]} isHaveList />
                    </li>
                    <li>
                      <BoldTextBySlash text={activeRefreshData[8]} isHaveList />
                    </li>
                  </ul>

                  <li className="font-body-bold">
                    {activeRefreshData[9] || "Loading..."}
                  </li>
                  <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[10]}
                        isHaveList
                      />
                    </li>
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[11]}
                        isHaveList
                      />
                    </li>
                  </ul>

                  <li className="font-body-bold">
                    {activeRefreshData[12] || "Loading..."}
                  </li>
                  <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[13]}
                        isHaveList
                      />
                    </li>
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[14]}
                        isHaveList
                      />
                    </li>
                  </ul>

                  <li className="font-body-bold">
                    {activeRefreshData[15] || "Loading..."}
                  </li>
                  <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[16]}
                        isHaveList
                      />
                    </li>
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[17]}
                        isHaveList
                      />
                    </li>
                    <li>
                      <BoldTextBySlash
                        text={activeRefreshData[18]}
                        isHaveList
                      />
                    </li>
                  </ul>
                </ul>

                {/* Price */}
                <p className="font-body-bold italic text-gray-700 mt-6 text-right">
                  {activeRefreshData[19] || "Loading..."}.-
                </p>
              </div>
            </div>
          </div>

          {/* shopee lazada line button */}
          <div className=" flex justify-center space-x-1 sm:space-x-6 mb-10 mx-5">
            <a
              href="https://shopee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[275px] h-[60px] flex items-center justify-center bg-[#4b664e] font-button font-color-secondary rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            >
              Shopee
            </a>
            <a
              href="https://www.lazada.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[275px] h-[60px] flex items-center justify-center bg-[#4b664e] font-button font-color-secondary rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            >
              Lazada
            </a>
            <a
              href="https://line.me/ti/p/~official"
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
              {activeRefreshData[20] || "Loading..."}
            </h2>

            {/* Benefits List */}
            <div className="space-y-10">
              {/* 1. Soothes and Relieves Skin Irritation */}
              <div>
                <h3 className="font-subtitle">
                  {activeRefreshData[21] || "Loading..."}
                </h3>
                <ul className="mt-3 font-body space-y-2 list-disc ml-4">
                  <li>
                    <BoldTextBySlash text={activeRefreshData[22]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[23]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[24]} isHaveList />
                  </li>
                </ul>
              </div>

              {/* 2. Provides Deep Moisturization and Barrier Protection */}
              <div>
                <h3 className="font-subtitle ">
                  {activeRefreshData[25] || "Loading..."}
                </h3>
                <ul className="mt-3 font-body space-y-2  list-disc ml-4">
                  <li>
                    <BoldTextBySlash text={activeRefreshData[26]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[27]} isHaveList />
                  </li>
                </ul>
              </div>

              {/* 3. Anti-Allergen & Anti-Pollution Shield */}
              <div>
                <h3 className="font-subtitle ">
                  {activeRefreshData[28] || "Loading..."}
                </h3>
                <ul className="mt-3 font-body space-y-2  list-disc ml-4">
                  <li>
                    <BoldTextBySlash text={activeRefreshData[29]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[30]} isHaveList />
                  </li>
                </ul>
              </div>

              {/* 4. Hypoallergenic & Chemical-Free Formulation */}
              <div>
                <h3 className="font-subtitle ">
                  {activeRefreshData[31] || "Loading..."}
                </h3>
                <ul className="mt-3 font-body space-y-2  list-disc ml-4">
                  <li>
                    <BoldTextBySlash text={activeRefreshData[32]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[33]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[34]} isHaveList />
                  </li>
                </ul>
              </div>

              {/* 5. Ideal for Sensitive & Allergy-Prone Skin */}
              <div>
                <h3 className="font-subtitle ">
                  {activeRefreshData[35] || "Loading..."}
                </h3>
                <ul className="mt-3 font-body space-y-2  list-disc ml-4">
                  <li>
                    <BoldTextBySlash text={activeRefreshData[36]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[37]} isHaveList />
                  </li>
                  <li>
                    <BoldTextBySlash text={activeRefreshData[38]} isHaveList />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[400px]">
              <img
                src={banner5}
                alt="Everdrop Natural Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-xl mx-auto text-center py-6 sm:py-12 px-6 items-center mt-4">
            {/* Who Can Use It? */}
            <h3 className="font-title italic mb-6">
              {activeRefreshData[39] || "Who Can Use It?"}
            </h3>

            {/* List of Use  */}
            <ul className="space-y-6 flex flex-col items-start sm:ml-[18%]">
              {[
                activeRefreshData[40],
                activeRefreshData[41],
                activeRefreshData[42],
                activeRefreshData[43],
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center font-body w-full max-w-2xl text-wrap sm:whitespace-nowrap"
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
                  <p className="text-left flex-1">
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
      )}
    </div>
  );
}

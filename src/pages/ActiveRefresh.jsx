import { useState } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import banner1 from "/banner9.png";
import banner5 from "/banner5.png";
import chana from "/image2.png";
import soapmock from "/image3.png";

export default function ActiveRefresh() {
  const { getLocalizedData } = useGoogleSheets();
  const activeRefreshData = getLocalizedData("active refresh");
  const [isHaveData, setIsHaveData] = useState(false);
  const [selectedImage, setSelectedImage] = useState(chana);

  return (
    <div className="w-full bg-[#fdf8f2] font-color-primary">
      {/* Banner */}
      <div className="relative w-full h-[678px] sm:h-[500px] lg:h-[678px] flex justify-center sm:justify-start items-center">
        <img
          src={banner1}
          alt="Banner"
          className="w-full h-full object-cover"
        />
         <div className="absolute text-center sm:text-start py-6 sm:py-12 ml-[5%]">
         <h2 className="font-header font-color-primary  drop-shadow-2xl shadow-amber-950">
          {activeRefreshData[1] || "Active refresh"}
        <br/>Comming soon...
        </h2>
      </div>
      </div>

      {isHaveData && <div>

         {/* Section Title */}
      <div className="text-center py-6 sm:py-12">
        <h2 className="font-header ">
          {activeRefreshData[1]}
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
                <li>{activeRefreshData[5] || "Loading..."}</li>
                <li>{activeRefreshData[6] || "Loading..."}</li>
                <li>{activeRefreshData[7] || "Loading..."}</li>
                <li>{activeRefreshData[8] || "Loading..."}</li>
              </ul>

              <li className="font-body-bold">
                {activeRefreshData[9] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>{activeRefreshData[10] || "Loading..."}</li>
                <li>{activeRefreshData[11] || "Loading..."}</li>
              </ul>

              <li className="font-body-bold">
                {activeRefreshData[12] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>{activeRefreshData[13] || "Loading..."}</li>
                <li>{activeRefreshData[14] || "Loading..."}</li>
              </ul>

              <li className="font-body-bold">
                {activeRefreshData[15] || "Loading..."}
              </li>
              <ul className="pl-3 md:pl-7 list-disc font-sub-menu">
                <li>{activeRefreshData[16] || "Loading..."}</li>
                <li>{activeRefreshData[17] || "Loading..."}</li>
                <li>{activeRefreshData[18] || "Loading..."}</li>
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
        <h2 className="font-title text-center italic mb-10">
          {activeRefreshData[20] || "Loading..."}
        </h2>

        {/* Benefits List */}
        <div className="space-y-10">
          {/* 1. Soothes and Relieves Skin Irritation */}
          <div>
            <h3 className="font-subtitle ">
              1. {activeRefreshData[21] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2">
              <li>• {activeRefreshData[22] || "Loading..."}</li>
              <li>• {activeRefreshData[23] || "Loading..."}</li>
              <li>• {activeRefreshData[24] || "Loading..."}</li>
            </ul>
          </div>

          {/* 2. Provides Deep Moisturization and Barrier Protection */}
          <div>
            <h3 className="font-subtitle ">
              2. {activeRefreshData[25] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2">
              <li>• {activeRefreshData[26] || "Loading..."}</li>
              <li>• {activeRefreshData[27] || "Loading..."}</li>
            </ul>
          </div>

          {/* 3. Anti-Allergen & Anti-Pollution Shield */}
          <div>
            <h3 className="font-subtitle ">
              3. {activeRefreshData[28] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2">
              <li>• {activeRefreshData[29] || "Loading..."}</li>
              <li>• {activeRefreshData[30] || "Loading..."}</li>
            </ul>
          </div>

          {/* 4. Hypoallergenic & Chemical-Free Formulation */}
          <div>
            <h3 className="font-subtitle ">
              4. {activeRefreshData[31] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2">
              <li>• {activeRefreshData[32] || "Loading..."}</li>
              <li>• {activeRefreshData[33] || "Loading..."}</li>
              <li>• {activeRefreshData[34] || "Loading..."}</li>
            </ul>
          </div>

          {/* 5. Ideal for Sensitive & Allergy-Prone Skin */}
          <div>
            <h3 className="font-subtitle ">
              5. {activeRefreshData[35] || "Loading..."}
            </h3>
            <ul className="mt-3 font-body space-y-2">
              <li>• {activeRefreshData[36] || "Loading..."}</li>
              <li>• {activeRefreshData[37] || "Loading..."}</li>
              <li>• {activeRefreshData[38] || "Loading..."}</li>
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
      <div className="max-w-xl mx-auto text-center py-6 sm:py-12 px-6 items-center mt-8">
        {/* Section Title */}
        <h3 className="text-2xl font-semibold italic text-gray-800 mb-6">
          {activeRefreshData[39] || "Who Can Use It?"}
        </h3>

        {/* List of Use  */}
        <ul className="space-y-6 flex flex-col items-end sm:ml-10">
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
              <span className="text-[#61735F] text-lg sm:text-3xl mr-2 sm:mr-4">✔</span>
              <p className="text-left flex-1">{item || "Loading..."}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
      </div>}
    </div>
  );
}

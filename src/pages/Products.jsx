import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import banner1 from "../../public/banner1.png";
import chana from "../../public/image2.png";
import soapmock from "../../public/image3.png";
import banner5 from "../../public/banner5.png";
import banner11 from "../../public/banner11.png";
import notoxic from "../../public/no-toxic.png";
import oil from "../../public/oil.png";
import earth from "../../public/earth.png";
import skin from "../../public/skin.png";
import leaf from "../../public/leaf.png";

export default function Products() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();

  const productsData = getLocalizedData("products");

  useEffect(() => {
    console.log("Fetched productsData:", productsData);

    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", "/products");
      }
    }
  }, [productsData, location]);

  return (
    <div className="w-full">
      <div className="w-full h-[678px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img
          src={banner1}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Products Section */}
      <div className=" z-0 max-w-6xl mx-auto pt-[120px] px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>

        <div className="max-w-3xl mx-auto mt-6">
          <div className="border-t border-gray-600 w-1/3 mx-auto mt-5 mb-10"></div>{" "}
          <p className="text-xl text-gray-800 font-semibold leading-[2rem] text-center">
            {productsData[1] &&
              productsData[1].split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
          </p>
          <div className="border-b border-gray-600 w-1/3 mx-auto mt-10"></div>{" "}
        </div>
      </div>

      {/* Two Types of Soaps Section */}
      <div className="max-w-5xl mx-auto text-center py-12 px-6">
        <h3 className="text-3xl font-semibold text-gray-800">
          Two types of soaps
        </h3>
        <p className="mt-3 text-gray-600">
          Our thoughtfully crafted soap collection offers two distinct
          experiences designed to cater to your skin’s needs and your lifestyle.
        </p>

        {/* Gentle Glow  */}
        <div className="max-w-5xl mx-auto text-center py-12 px-6 mt-10">
          <h3 className="text-2xl font-semibold text-gray-800">
            {productsData[2] || "Loading..."}{" "}
          </h3>
          <p className="mt-3 text-gray-600">
            {productsData[3] || "Loading..."}{" "}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center p-6">
        <img
          src={chana}
          alt="Chana Soap"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
        <div className="bg-secondary p-6 rounded-lg shadow-md w-full max-w-lg">
          <h4 className="text-xl text-center font-semibold text-gray-800 mb-6">
            Natural Ingredients
          </h4>
          <ul className="list-disc list-inside text-gray-600 mt-3">
            {productsData[4]
              ? productsData[4]
                  .split("\n")
                  .map((item, index) => <li key={index}>{item}</li>)
              : "Loading..."}
          </ul>

          <button className="mt-4 bg-[#293B2B] text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-12">
        <img
          src={soapmock}
          alt="Product 1"
          className="w-1/3 max-w-xs rounded-lg shadow-lg"
        />
        <img
          src={soapmock}
          alt="Product 2"
          className="w-1/3 max-w-xs rounded-lg shadow-lg"
        />
        <img
          src={soapmock}
          alt="Product 3"
          className="w-1/3 max-w-xs rounded-lg shadow-lg"
        />
      </div>
      <div className="border-b border-gray-600 w-1/3 mx-auto mt-10"></div>

      <div className="max-w-5xl mx-auto text-center py-12 px-6">
        {/* Active Refresh */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10">
          {productsData[5] || "Loading..."}
        </h3>

        <p className="mt-3 text-gray-600">{productsData[6] || "Loading..."}</p>
      </div>

      {/* Ingredients */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center p-6">
        <img
          src={chana}
          alt="Active Refresh Soap"
          className="w-full max-w-md rounded-lg shadow-lg"
        />

        {/* Ingredients List */}
        <div className="bg-secondary p-6 rounded-lg shadow-md w-full max-w-lg">
          <h4 className="text-xl font-semibold text-gray-800 text-center">
            Natural Ingredients
          </h4>
          <ul className="list-disc list-inside text-gray-600 mt-3 text-left">
            {productsData[7]
              ? productsData[7]
                  .split("\n")
                  .map((item, index) => <li key={index}>{item}</li>)
              : "Loading..."}
          </ul>
          <button className="mt-4 bg-[#293B2B] text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-12">
        <img
          src={soapmock}
          alt="Product 1"
          className="w-1/3 max-w-xs rounded-lg shadow-lg"
        />
        <img
          src={soapmock}
          alt="Product 2"
          className="w-1/3 max-w-xs rounded-lg shadow-lg"
        />
        <img
          src={soapmock}
          alt="Product 3"
          className="w-1/3 max-w-xs rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center py-12 px-6">
        <p className="italic text-lg text-gray-700">
          Elevate your skincare routine with soaps that blend the finest natural
          ingredients for a luxurious, eco-conscious experience. Choose the care
          you deserve
        </p>

        <div className="border-t border-gray-500 w-1/3 mx-auto mt-20 mb-15"></div>
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

      {/* Why Chana */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6 mt-15">
        <h3 className="text-3xl font-semibold text-gray-800">
          {productsData[8] || "Loading..."}
        </h3>

        {/* Table */}
        <div className="bg-[#EFF0E8] p-6 rounded-xl shadow-md mt-6 flex  justify-center">
          <table className="w-[900px] border-collapse overflow-hidden rounded-xl">
            <thead>
              <tr className="text-gray-800 text-lg border-b border-gray-400">
                <th className="py-4 px-6 text-center w-1/2">Property</th>
                <th className="border-l border-gray-500"></th>{" "}
                <th className="py-4 px-6 text-center w-1/2">Chana Soap</th>
              </tr>
            </thead>
            <tbody>
              {" "}
              {/* Property of why Chana */}
              {[
                [productsData[9], true],
                [productsData[10], true],
                [productsData[11], true],
                [productsData[12], true],
                [productsData[13], true],
                [productsData[14], true],
                [productsData[15], true],
                [productsData[16], true],
                [productsData[17], true],
                [productsData[18], true],
                [productsData[19], true],
              ].map(([property, check], index, arr) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#EFF0E8]" : "bg-[#D4E6D6]"
                  } text-gray-700 text-lg`}
                >
                  <td
                    className={`py-4 px-6 text-center ${
                      index === 0
                        ? "rounded-tl-xl"
                        : index === arr.length - 1
                        ? "rounded-bl-xl"
                        : ""
                    }`}
                  >
                    {property || "Loading..."}
                  </td>
                  <td className="border-l border-gray-500"></td>{" "}
                  <td
                    className={`py-4 px-6 text-center ${
                      index === 0
                        ? "rounded-tr-xl"
                        : index === arr.length - 1
                        ? "rounded-br-xl"
                        : ""
                    }`}
                  >
                    {check ? "✔️" : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full mt-15 mb-10">
        <div className="w-full h-[400px]">
          <img
            src={banner11}
            alt="Everdrop Natural Care"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Key Takeaway for Chana Soap */}
      <div className="w-full flex justify-center items-center py-12 px-6 ">
        <div className="bg-secondary p-10 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Key Takeaways for Chana Soap
            </h3>

            {/* Takeaways List */}
            <ul className="space-y-6">
              {[
                {
                  text: productsData[20],
                  icon: (
                    <img
                      src={notoxic}
                      alt="Icon"
                      className="w-[80px] h-[80px]"
                    />
                  ),
                },
                {
                  text: productsData[21],
                  icon: (
                    <img src={oil} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
                {
                  text: productsData[22],
                  icon: (
                    <img src={earth} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
                {
                  text: productsData[23],
                  icon: (
                    <img src={skin} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
                {
                  text: productsData[24],
                  icon: (
                    <img src={leaf} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  {item.icon}
                  <p className="text-lg text-gray-700">
                    {item.text || "Loading..."}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 w-1/3 mx-auto mt-20 mb-15"></div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto text-center py-12 px-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-10">
          Review from Our Customers
        </h3>

        {/* Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            productsData[25],
            productsData[26],
            productsData[27],
            productsData[28],
            productsData[29],
            productsData[30],
          ].map((review, index) => (
            <div
              key={index}
              className="bg-[#EFF0E8] w-full h-auto min-h-[260px] p-6 rounded-lg shadow-md text-left flex flex-col justify-between"
            >
              {/* Review Text */}
              <p className="text-sm text-gray-700 leading-relaxed font-medium flex-1">
                {review || "Loading..."}
              </p>

              {/* Author as a hardcode */}
              <div className="mt-auto flex flex-col">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Wendy S.
                </p>

                <div className="flex justify-end items-center">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Before and After Section */}
      <div className="max-w-5xl mx-auto text-center py-12 px-6 mt-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-10">
          Before and After Result
        </h3>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Before Image */}
          <div className="flex flex-col items-center">
            <img
              src={soapmock}
              alt="Before"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">Before</p>
          </div>

          {/* After Image */}
          <div className="flex flex-col items-center">
            <img
              src={soapmock}
              alt="After"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg font-medium text-gray-700">After</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 w-1/3 mx-auto mt-15 mb-20"></div>
    </div>
  );
}

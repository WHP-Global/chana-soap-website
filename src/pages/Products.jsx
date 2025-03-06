import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import hero from "/Products/hero.jpg";
import gentleGlow1 from "/Products/gentleGlow1.jfif";
import gentleGlow2 from "/Products/gentleGlow2.jfif";
import gentleGlow3 from "/Products/gentleGlow3.jfif";
import gentleGlow4 from "/Products/gentleGlow4.jfif";
import activeRefresh1 from "/Products/activeRefresh1.jfif";
import activeRefresh2 from "/Products/activeRefresh2.jfif";
import activeRefresh3 from "/Products/activeRefresh3.jfif";
import activeRefresh4 from "/Products/activeRefresh4.jfif";
import banner1 from "/Products/banner1.jpg";
import banner2 from "/Products/banner2.jpg";
import before from "/Products/before.jfif";
import after from "/Products/after.jfif";
import notoxic from "/Products/no-toxic.png";
import oil from "/Products/oil.png";
import earth from "/Products/earth.png";
import skin from "/Products/skin.png";
import leaf from "/Products/leaf.png";
import Banner from "../components/Banner";
import { BoldTextBySlash } from "../services/BoldText";

export default function Products() {
  const location = useLocation();
  const { getLocalizedData, language } = useGoogleSheets();
  const navigate = useNavigate();

  const productsData = getLocalizedData("products");

  useEffect(() => {
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
    <div className="w-full text-primary">
      <div className="w-full h-[678px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img src={hero} alt={hero} className="w-full h-full object-cover" />
      </div>

      {/* Products Section */}
      <div className=" z-0 max-w-6xl mx-auto pt-5 px-6 text-center">
        <div className="font-header font-color-primary">
          {language === "EN" ? "Our Products" : "สินค้าของเรา"}
        </div>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="border-t bg-fourth  w-1/3 mx-auto mt-5 mb-10"></div>
          <div className="font-body-bold  font-semibold leading-[2rem] text-center">
            {productsData[1] &&
              productsData[1].split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
          </div>
          <div className="border-b bg-fourth  w-1/3 mx-auto mt-10"></div>
        </div>
      </div>
      <div id="gentle-glow"></div>
      {/* Two Types of Soaps Section */}
      <div className="max-w-5xl mx-auto text-center pt-12 px-6">
        <div className="font-title">
          {language === "EN" ? "Two types of soaps" : "ผลิตภัณฑ์สบู่สองชนิด"}
        </div>
        <div className="mt-3  font-body text-balance">
          {language === "EN"
            ? "Our thoughtfully crafted soap collection offers two distinct experiences designed to cater to your skin’s needs and your lifestyle."
            : "สบู่ชนะที่รังสรรค์อย่างพิถีพิถันของเรา มอบสองประสบการณ์อันโดดเด่น เพื่อตอบสนองความต้องการของผิวคุณและสอดคล้องกับไลฟ์สไตล์ของคุณอย่างลงตัว"}
        </div>
      </div>

      {/* Gentle Glow  */}
      <div className="max-w-5xl mx-auto text-center py-8 sm:py-12 px-6 mt-6 sm:mt-10">
        <div className="font-subtitle ">{productsData[2]}</div>
        <div className="mt-3 text-balance font-body">
          <BoldTextBySlash text={productsData[3]} />
        </div>
      </div>
      {/* Ingredients */}
      <div className="w-full justify-center px-5 sm:px-0 mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 items-center py-6 -mt-4">
        <img
          src={gentleGlow4}
          alt={gentleGlow4}
          className="w-full max-w-xs rounded-lg shadow-lg max-h-[440px]"
        />
        <div className=" bg-secondary p-4 sm:p-6  rounded-lg shadow-md w-full sm:max-w-[65%] lg:max-w-[45%] text-balance sm:text-wrap">
          <div className="font-subtitle text-center  mb-6">
            {language === "EN" ? "Natural Ingredients" : "ส่วนผสมของสบู่"}
          </div>
          <ul className="list-disc list-inside  mt-3 font-sub-menu">
            {productsData[4]
              ? productsData[4].split("\n").map((item, index) => (
                  <li key={index}>
                    <BoldTextBySlash text={item} isHaveList />
                  </li>
                ))
              : "Loading..."}
          </ul>

          <button
            onClick={() => (navigate("/gentle-glow"), window.scroll(0, 0))}
            className="mt-4 font-body bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex"
          >
            {language === "EN" ? "LEARN MORE" : "ดูเพิ่มเติม"}
          </button>
        </div>
      </div>
      {/* Gentle Glow image */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center sm:py-12 rounded-lg -mt-4 ">
        <img
          src={gentleGlow1}
          alt={gentleGlow1}
          className="w-1/3 max-w-xs rounded-lg"
        />
        <img
          src={gentleGlow2}
          alt={gentleGlow2}
          className="w-1/3 max-w-xs rounded-lg"
        />
        <img
          src={gentleGlow3}
          alt={gentleGlow3}
          className="w-1/3 max-w-xs rounded-lg"
        />
      </div>
      <div id="active-refresh"></div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>

      {/* Active Refresh */}
      <div className="max-w-5xl mx-auto text-center pb-8 sm:py-12 px-6">
        <div className="font-subtitle ">{productsData[5]}</div>
        <div className="mt-3 text-balance font-body">
          <BoldTextBySlash text={productsData[6]} />
        </div>
      </div>
      {/* Ingredients */}
      <div className="w-full justify-center px-5 sm:px-0 mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 items-center py-6 -mt-4">
        <img
          src={activeRefresh1}
          alt={activeRefresh1}
          className="w-full max-w-xs rounded-lg shadow-lg max-h-[440px]"
        />

        {/* Ingredients List */}
        <div className=" bg-secondary p-4 sm:p-6 rounded-lg shadow-md w-full sm:max-w-[65%] lg:max-w-[45%] text-balance sm:text-wrap">
          <div className="font-subtitle text-center  mb-6">
            {language === "EN" ? "Natural Ingredients" : "ส่วนผสมของสบู่"}
          </div>
          <ul className="list-disc list-inside  mt-3 font-sub-menu">
            {productsData[7]
              ? productsData[7].split("\n").map((item, index) => (
                  <li key={index}>
                    <BoldTextBySlash text={item} isHaveList />
                  </li>
                ))
              : "Loading..."}
          </ul>
          <button
            onClick={() => (navigate("/active-refresh"), window.scroll(0, 0))}
            className="mt-4 font-body bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex"
          >
            {language === "EN" ? "LEARN MORE" : "ดูเพิ่มเติม"}
          </button>
        </div>
      </div>
      {/* Active Refresh image*/}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-12 -mt-4">
        <img
          src={activeRefresh2}
          alt={activeRefresh2}
          className="w-1/3 max-w-xs rounded-lg "
        />
        <img
          src={activeRefresh3}
          alt={activeRefresh3}
          className="w-1/3 max-w-xs rounded-lg "
        />
        <img
          src={activeRefresh4}
          alt={activeRefresh4}
          className="w-1/3 max-w-xs rounded-lg "
        />
      </div>

      <div className="max-w-5xl mx-auto text-center  px-6 sm:mt-6">
        <div className="font-caption font-color-primary text-balance">
          {language === "EN"
            ? "Elevate your skincare routine with soaps that blend the finest natural ingredients for a luxurious, eco-conscious experience. Choose the care you deserve"
            : "ดูแลผิวของคุณให้ดียิ่งขึ้นด้วยสบู่ที่ผสานส่วนผสมจากธรรมชาติอย่างลงตัว มอบสัมผัสพอเศษและเป็นมิตรกับสิ่งแวดล้อม เพราะผิวของคุณสมควรได้รับการดูแลที่ดีที่สุด"}
        </div>

        <div className="flex justify-center py-15">
          <hr className="w-[250px] h-[1px] bg-primary border-none" />
        </div>
      </div>
      <div id="why-chana"></div>
      <Banner src={banner1} />

      {/* Why Chana */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6 -mt-6">
        <div className="font-title">{productsData[8] || "Loading..."}</div>

        {/* Table */}
        <div className="bg-[#EFF0E8] p-6 rounded-xl shadow-md mt-6 flex  justify-center">
          <table className="w-[900px] border-collapse overflow-hidden rounded-xl">
            <thead>
              <tr className="font-body-bold border-b border-gray-400">
                <th className="py-4 px-6 text-center w-1/2">
                  {language === "EN" ? "Property" : "คุณสมบัติ"}
                </th>
                <th className="border-l border-gray-500"></th>
                <th className="py-4 px-6 text-center w-1/2">
                  {language === "EN" ? "Gentle Glow" : "Gentle Glow"}
                </th>
              </tr>
            </thead>
            <tbody>
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
                  } font-color-primary text-lg`}
                >
                  <td
                    className={`py-4 px-6 text-center font-body ${
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
                    className={`py-4 px-6 text-center font-body ${
                      index === 0
                        ? "rounded-tr-xl"
                        : index === arr.length - 1
                        ? "rounded-br-xl"
                        : ""
                    }`}
                  >
                    {check ? (
                      <svg
                        fill="#6C7C6E"
                        viewBox="-3.5 0 19 19"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-auto"
                      >
                        <path d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaway for Chana Soap */}
      <div className="w-full flex justify-center items-center sm:py-12 px-6 ">
        <div className=" max-w-4xl w-full flex sm:h-[720px]">
          <div className="bg-gray-50 p-4 lg:p-8 rounded-r-lg md:rounded-l-lg md:rounded-r-none shadow-md">
            <div className="font-title  mb-6 text-center">
              {productsData[20]}
            </div>
            <ul className="space-y-6">
              {[
                {
                  text: productsData[21],
                  icon: (
                    <img
                      src={notoxic}
                      alt="Icon"
                      className="w-[70px] h-[70px]"
                    />
                  ),
                },
                {
                  text: productsData[22],
                  icon: (
                    <img src={oil} alt="Icon" className="w-[70px] h-[70px]" />
                  ),
                },
                {
                  text: productsData[23],
                  icon: (
                    <img src={earth} alt="Icon" className="w-[70px] h-[70px]" />
                  ),
                },
                {
                  text: productsData[24],
                  icon: (
                    <img src={skin} alt="Icon" className="w-[70px] h-[70px]" />
                  ),
                },
                {
                  text: productsData[25],
                  icon: (
                    <img src={leaf} alt="Icon" className="w-[70px] h-[70px]" />
                  ),
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start justify-start space-x-6 text-lg"
                >
                  {item.icon}
                  <div className="font-body font-color-primary text-left">
                    {item.text || "Loading..."}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side image */}
          <div className="h-full hidden sm:block w-[100%]">
            <img
              src={banner2}
              alt={banner2}
              className="w-full h-full object-center shadow-md rounded-l-lg md:rounded-r-lg md:rounded-l-none"
            />
          </div>
        </div>
      </div>

      <div id="testimonials"></div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto text-center px-6 -mt-4">
        <div className="font-title  mb-10">{productsData[26]}</div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            productsData[27],
            productsData[28],
            productsData[29],
            productsData[30],
            productsData[31],
            productsData[32],
          ].map((review, index) => (
            <div
              key={index}
              className="bg-third  w-full h-auto min-h-[260px] p-6 rounded-lg shadow-md text-left flex flex-col justify-between"
            >
              {/* Review Text */}
              <p className="font-body font-color-primary leading-relaxed font-medium flex-1">
                {review || "Loading..."}
              </p>

              {/* Author as a hardcode */}
              <div className="mt-auto flex flex-col">
                {/* <p className="text-sm font-semibold  mb-2">Wendy S.</p> */}

                <div className="flex justify-end items-center">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Before and After Section */}
      <div className="max-w-5xl mx-auto text-center sm:py-12 px-6">
        <div className="font-title  my-10">{productsData[33]}</div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Before Image */}
          <div className="flex flex-col items-center max-h-[680px]">
            <img
              src={before}
              alt={before}
              className="w-full max-w-sm rounded-lg h-full"
            />
            <p className="mt-4 font-title font-medium font-color-primary">
              {language === "EN" ? "Before" : "ก่อน"}
            </p>
          </div>

          {/* After Image */}
          <div className="flex flex-col items-center max-h-[680px]">
            <img
              src={after}
              alt={after}
              className="w-full max-w-sm rounded-lg h-full"
            />
            <p className="mt-4 font-title font-medium font-color-primary">
              {language === "EN" ? "After" : "หลัง"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

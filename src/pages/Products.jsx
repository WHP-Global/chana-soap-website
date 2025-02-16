import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import banner1 from "/banner1.png";
import chana from "/image2.png";
import soapmock from "/image3.png";
import banner5 from "/banner5.png";
import banner11 from "/banner11.png";
import notoxic from "/no-toxic.png";
import oil from "/oil.png";
import earth from "/earth.png";
import skin from "/skin.png";
import leaf from "/leaf.png";
import Banner from "../components/Banner";

export default function Products() {
  const location = useLocation();
  const { getLocalizedData, language} = useGoogleSheets();
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
        <img
          src={banner1}
          alt="Banner"
          className="w-full h-full object-cover"
        />
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
        <div className="mt-3  font-body">
          {language === "EN"
            ? "Our thoughtfully crafted soap collection offers two distinct experiences designed to cater to your skin’s needs and your lifestyle."
            : "สบู่ชนะที่รังสรรค์อย่างพิถีพิถันของเรา มอบสองประสบการณ์อันโดดเด่น เพื่อตอบสนองความต้องการของผิวคุณและสอดคล้องกับไลฟ์สไตล์ของคุณอย่างลงตัว"}
        </div>
      </div>

      {/* Gentle Glow  */}
      <div className="max-w-5xl mx-auto text-center py-12 px-6 mt-10">
          <div className="font-subtitle ">{productsData[2]}</div>
          <div className="mt-3 text-balance sm:text-wrap font-body">
            {productsData[3]}
          </div>
      </div>
      {/* Ingredients */}
      <div className="w-full justify-center px-5 sm:px-0 mx-auto flex flex-col lg:flex-row gap-8 items-center py-6">
        <img
          src={chana}
          alt="Chana Soap"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
        <div className=" bg-secondary p-6  rounded-lg shadow-md w-full sm:max-w-[65%] lg:max-w-[550px] text-balance sm:text-wrap">
          <div className="font-subtitle text-center  mb-6">
            {language === "EN" ? "Natural Ingredients" : "ส่วนผสมของสบู่"}
          </div>
          <ul className="list-disc list-inside  mt-3 font-sub-menu">
            {productsData[4]
              ? productsData[4]
                  .split("\n")
                  .map((item, index) => <li key={index}>{item}</li>)
              : "Loading..."}
          </ul>

          <button onClick={()=> (navigate("/gentle-glow") ,window.scroll(0, 0))} className="mt-4 font-body bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex">
            {language === "EN" ? "LEARN MORE" : "ดูเพิ่มเติม"}
          </button>
        </div>
      </div>
      {/* Gentle Glow image */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-12 rounded-lg ">
        <img
          src={soapmock}
          alt="Product 1"
          className="w-1/3 max-w-xs rounded-lg"
        />
        <img
          src={soapmock}
          alt="Product 2"
          className="w-1/3 max-w-xs rounded-lg"
        />
        <img
          src={soapmock}
          alt="Product 3"
          className="w-1/3 max-w-xs rounded-lg"
        />
      </div>
      <div id="active-refresh"></div>  
      <div className="border-b bg-fourth  w-1/3 mx-auto mt-10"></div>
   
      {/* Active Refresh */}
      <div className="max-w-5xl mx-auto text-center py-12 px-6">
        <div className="font-subtitle mt-10">{productsData[5]}</div>

        <div className="mt-3 font-body">{productsData[6] || "Loading..."}</div>
      </div>
      {/* Ingredients */}
      <div className="w-full justify-center px-5 sm:px-0 mx-auto flex flex-col lg:flex-row gap-8 items-center py-6">
        <img
          src={chana}
          alt="Active Refresh Soap"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />

        {/* Ingredients List */}
        <div className=" bg-secondary p-6  rounded-lg shadow-md w-full sm:max-w-[65%] lg:max-w-[550px] text-balance sm:text-wrap">
        <div className="font-subtitle text-center  mb-6">
            {language === "EN" ? "Natural Ingredients" : "ส่วนผสมของสบู่"}
          </div>
          <ul className="list-disc list-inside  mt-3 font-sub-menu">
            {productsData[7]
              ? productsData[7]
                  .split("\n")
                  .map((item, index) => <li key={index}>{item}</li>)
              : "Loading..."}
          </ul>
          <button onClick={()=> (navigate("/active-refresh"),window.scroll(0, 0))} className="mt-4 font-body bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex">
            {language === "EN" ? "LEARN MORE" : "ดูเพิ่มเติม"}
          </button>
        </div>
      </div>
       {/* Active Refresh image*/}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-12">
        <img
          src={soapmock}
          alt="Product 1"
          className="w-1/3 max-w-xs rounded-lg "
        />
        <img
          src={soapmock}
          alt="Product 2"
          className="w-1/3 max-w-xs rounded-lg "
        />
        <img
          src={soapmock}
          alt="Product 3"
          className="w-1/3 max-w-xs rounded-lg "
        />
      </div>

      <div className="max-w-5xl mx-auto text-center py-12 px-6">
        <div className="font-caption font-color-primary text-balance lg:text-wrap">
         {language === "EN"  ? "Elevate your skincare routine with soaps that blend the finest natural ingredients for a luxurious, eco-conscious experience. Choose the care you deserve" : "ดูแลผิวของคุณให้ดียิ่งขึ้นด้วยสบู่ที่ผสานส่วนผสมจากธรรมชาติอย่างลงตัว มอบสัมผัสพอเศษและเป็นมิตรกับสิ่งแวดล้อม เพราะผิวของคุณสมควรได้รับการดูแลที่ดีที่สุด"
        }
        </div>

        <div className="border-b bg-fourth  w-1/3 mx-auto mt-10"></div>
      </div>
      <div id="why-chana"></div>  
      <Banner img={banner5} />
    
      {/* Why Chana */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6 mt-15">
        <div className="font-title">
          {productsData[8] || "Loading..."}
        </div>

        {/* Table */}
        <div className="bg-[#EFF0E8] p-6 rounded-xl shadow-md mt-6 flex  justify-center">
          <table className="w-[900px] border-collapse overflow-hidden rounded-xl">
            <thead>
              <tr className="font-body-bold border-b border-gray-400">
                <th className="py-4 px-6 text-center w-1/2">{language === "EN" ? "Property" : "คุณสมบัติ"}</th>
                <th className="border-l border-gray-500"></th>
                <th className="py-4 px-6 text-center w-1/2">{language === "EN" ? "Chana Soap" : "สบู่ชนะ"}</th>
              </tr>
            </thead>
            <tbody>
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
        <div className="bg-secondary p-4 sm:p-10 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="font-title  mb-6 text-center">
            {productsData[20]}
            </div>

            {/* Takeaways List */}
            <ul className="space-y-6">
              {[
                {
                  text: productsData[21],
                  icon: (
                    <img
                      src={notoxic}
                      alt="Icon"
                      className="w-[80px] h-[80px]"
                    />
                  ),
                },
                {
                  text: productsData[22],
                  icon: (
                    <img src={oil} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
                {
                  text: productsData[23],
                  icon: (
                    <img src={earth} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
                {
                  text: productsData[24],
                  icon: (
                    <img src={skin} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
                {
                  text: productsData[25],
                  icon: (
                    <img src={leaf} alt="Icon" className="w-[80px] h-[80px]" />
                  ),
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center sm:justify-start flex-col sm:flex-row space-y-4 sm:space-x-4">
                  {item.icon}
                  <div className="font-body font-color-primary text-center sm:text-start">
                    {item.text || "Loading..."}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="testimonials"></div>  
      <div className="border-t border-gray-500 w-1/3 mx-auto mt-20 mb-15"></div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto text-center py-12 px-6">
        <div className="font-title  mb-10">
        {productsData[26]}
        </div>

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
      <div className="max-w-5xl mx-auto text-center py-12 px-6 mt-10">
        <div className="font-title  mb-10">
        {productsData[33]}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Before Image */}
          <div className="flex flex-col items-center">
            <img
              src={soapmock}
              alt="Before"
              className="w-full max-w-md rounded-lg "
            />
            <p className="mt-4 font-title font-medium font-color-primary">{language === "EN" ? "Before" : "ก่อน"}</p>
          </div>

          {/* After Image */}
          <div className="flex flex-col items-center">
            <img
              src={soapmock}
              alt="After"
              className="w-full max-w-md rounded-lg "
            />
            <p className="mt-4 font-title font-medium font-color-primary">{language === "EN" ? "After" : "หลัง"}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 w-1/3 mx-auto mt-15 pb-20"></div>
    </div>
  );
}

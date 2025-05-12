import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import Banner from "../components/Banner";
import { BoldTextBySlash } from "../services/BoldText";
import StarReview from "../components/StarReview";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function Products() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();
  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("Products")
  );

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
      <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img
          src={buildImageSrc(categoryImages[14])}
          alt={categoryImages[14]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Products Section */}
      <div className=" z-0 max-w-6xl mx-auto pt-5 px-6 text-center font-color-primary">
        <div className="font-header">{productsData[0]}</div>
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
      <div className="max-w-5xl mx-auto text-center pt-12 px-6 font-color-primary">
        <div className="font-title">{productsData[40]}</div>
        <div className="mt-3  font-body text-balance">{productsData[41]}</div>
      </div>

      {/* Gentle Glow  */}
      <div className="max-w-5xl mx-auto text-center py-8 sm:py-12 px-6 mt-6 sm:mt-10 font-color-primary">
        <div className="font-subtitle ">{productsData[2]}</div>
        <div className="mt-3 text-balance font-body">
          <BoldTextBySlash text={productsData[3]} />
        </div>
      </div>
      {/* Ingredients */}
      <div className="w-full justify-center px-5 sm:px-0 mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 items-center py-6 -mt-4">
        <img
          src={buildImageSrc(categoryImages[13])}
          alt={categoryImages[13]}
          className="w-full max-w-xs rounded-lg shadow-lg max-h-[440px]"
        />
        <div className=" bg-secondary p-4 sm:p-6  rounded-lg shadow-md w-full sm:max-w-[65%] lg:max-w-[45%] text-balance sm:text-wrap">
          <div className="font-subtitle text-center  mb-6">
            {productsData[39]}
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
            {productsData[38]}
          </button>
        </div>
      </div>
      {/* Gentle Glow image */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-3 sm:py-12 rounded-lg -mt-4 ">
        <img
          src={buildImageSrc(categoryImages[10])}
          alt={categoryImages[10]}
          className="w-1/3 max-w-xs rounded-lg"
        />
        <img
          src={buildImageSrc(categoryImages[11])}
          alt={categoryImages[11]}
          className="w-1/3 max-w-xs rounded-lg"
        />
        <img
          src={buildImageSrc(categoryImages[12])}
          alt={categoryImages[12]}
          className="w-1/3 max-w-xs rounded-lg"
        />
      </div>
      <div id="active-fresh"></div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>

      {/* Active Fresh */}
      <div className="max-w-5xl mx-auto text-center pb-8 sm:py-12 px-6 font-color-primary">
        <div className="font-subtitle ">{productsData[5]}</div>
        {productsData[34] !== "isHaveData" && (
          <div className="mt-3 text-balance font-body">
            <BoldTextBySlash text={productsData[6]} />
          </div>
        )}
      </div>
      {/* Coming soon */}
      {productsData[34] === "isHaveData" && (
        <div className="flex w-full justify-center">
          <div className="relative w-xs max-h-[440px] flex justify-center  items-center">
            <img
              src={buildImageSrc(categoryImages[0])}
              alt={categoryImages[0]}
              className="w-full h-full object-center rounded-lg shadow-lg "
            />

            <div className="absolute text-center sm:text-start py-6 sm:py-12 top-0">
              <h2 className="font-header text-white  drop-shadow-2xl shadow-amber-950">
                Coming Soon
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Ingredients */}
      {productsData[34] !== "isHaveData" && (
        <div className="w-full justify-center px-5 sm:px-0 mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 items-center py-6 -mt-4">
          <img
            src={buildImageSrc(categoryImages[0])}
            alt={categoryImages[0]}
            className="w-full max-w-xs rounded-lg shadow-lg max-h-[440px]"
          />

          <div className=" bg-secondary p-4 sm:p-6 rounded-lg shadow-md w-full sm:max-w-[65%] lg:max-w-[45%] text-balance sm:text-wrap">
            <div className="font-subtitle text-center  mb-6">
              {productsData[39]}
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
              onClick={() => (navigate("/active-fresh"), window.scroll(0, 0))}
              className="mt-4 font-body bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex"
            >
              {productsData[38]}
            </button>
          </div>
        </div>
      )}
      {/* Active Fresh image*/}
      {productsData[34] !== "isHaveData" && (
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center py-3 sm:py-12 rounded-lg -mt-4 ">
          <img
            src={buildImageSrc(categoryImages[1])}
            alt={categoryImages[1]}
            className="w-1/3 max-w-xs rounded-lg "
          />
          <img
            src={buildImageSrc(categoryImages[2])}
            alt={categoryImages[2]}
            className="w-1/3 max-w-xs rounded-lg "
          />
          <img
            src={buildImageSrc(categoryImages[3])}
            alt={categoryImages[3]}
            className="w-1/3 max-w-xs rounded-lg "
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center  px-6 mt-6 font-color-primary">
        <div className="font-caption text-balance">{productsData[35]}</div>

        <div className="flex justify-center py-15">
          <hr className="w-[250px] h-[1px] bg-primary border-none" />
        </div>
      </div>
      <div id="why-Art-Alice"></div>
      <Banner src={buildImageSrc(categoryImages[5])} />

      {/* Why Art & Alice */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6 -mt-6 font-color-primary">
        <div className="font-title">{productsData[8]}</div>

        {/* Table */}
        <div className="bg-[#EFF0E8] p-6 rounded-xl shadow-md mt-6 flex  justify-center">
          <table className="w-[900px] border-collapse overflow-hidden rounded-xl">
            <thead>
              <tr className="font-body-bold border-b border-gray-400 ">
                <th className="py-4 px-6 text-center w-1/2">
                  {productsData[36]}
                </th>
                <th className="border-l border-gray-500"></th>
                <th className="py-4 px-6 text-center w-1/2">
                  {productsData[37]}
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

      {/* Key Takeaway for Art & Alice Soap */}
      <div className="w-full flex justify-center items-center sm:py-12 px-6 font-color-primary">
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
                      src={buildImageSrc(categoryImages[16])}
                      alt="Icon"
                      className="w-[70px] h-[70px]"
                    />
                  ),
                },
                {
                  text: productsData[22],
                  icon: (
                    <img
                      src={buildImageSrc(categoryImages[17])}
                      alt="Icon"
                      className="w-[70px] h-[70px]"
                    />
                  ),
                },
                {
                  text: productsData[23],
                  icon: (
                    <img
                      src={buildImageSrc(categoryImages[9])}
                      alt="Icon"
                      className="w-[70px] h-[70px]"
                    />
                  ),
                },
                {
                  text: productsData[24],
                  icon: (
                    <img
                      src={buildImageSrc(categoryImages[18])}
                      alt="Icon"
                      className="w-[70px] h-[70px]"
                    />
                  ),
                },
                {
                  text: productsData[25],
                  icon: (
                    <img
                      src={buildImageSrc(categoryImages[15])}
                      alt="Icon"
                      className="w-[70px] h-[70px]"
                    />
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
              src={buildImageSrc(categoryImages[6])}
              alt={categoryImages[6]}
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
      <div className="max-w-7xl mx-auto text-center px-6 -mt-4 font-color-primary">
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
                  <span>
                    <StarReview />
                  </span>
                  <span>
                    <StarReview />
                  </span>
                  <span>
                    <StarReview />
                  </span>
                  <span>
                    <StarReview />
                  </span>
                  <span>
                    <StarReview />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-15">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
    </div>
  );
}

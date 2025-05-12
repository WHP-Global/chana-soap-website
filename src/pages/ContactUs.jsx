import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";
import InputFormToSendEmail from "../components/InputFormToSendEmail";
import FAQ from "../components/FAQ";
import { Logo } from "../components/Logo";
import { BoldTextBySlash } from "../services/BoldText";
import { useImageContext } from "../Context/ImageContext";
import { buildImageSrc } from "../utils/imageHelpers";

export default function ContactUs() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "contact us"
  const contactUsData = getLocalizedData("contact us");

  const { allImages } = useImageContext();
  const categoryImages = allImages.filter((image) =>
    image.path.includes("ContactUs")
  );
  const logoImages = allImages.filter((image) => image.path.includes("logo"));

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", "/contact-us");
      }
    }
  }, [location]);
  return (
    <div>
      {/*1. where to buy */}
      {/* banner */}
      <div className="w-full h-[450px] sm:h-[500px] lg:h-[678px] flex justify-center items-center">
        <img
          src={buildImageSrc(categoryImages[0])}
          alt={categoryImages[0]}
          className="w-full h-full object-cover"
        />
        <div id="where-to-buy"></div>
      </div>
      {/* content */}
      <div className="font-color-primary">
        <div className="py-[40px] font-header text-center">
          {contactUsData[1]}
        </div>
        <div className="py-5 mx-2 font-title text-center">
          {contactUsData[2]}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 font-body mx-5">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[30px] sm:gap-[12%] h-auto">
            <div className="flex flex-col items-center ">
              <div className="h-[150px] w-auto mb-3">
                <img
                  src={buildImageSrc(categoryImages[3])}
                  alt="shopeeImg"
                  className="h-full w-auto object-cover rounded-2xl"
                />
              </div>
              <Link
                to={contactUsData[41]}
                target="_bank"
                className="bg-[#4b664e] font-color-secondary text-center font-button py-1 w-[180px] rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              >
                Shopee
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[123px] w-auto my-[25px]">
                <img
                  src={buildImageSrc(categoryImages[1])}
                  alt="lazadaImg "
                  className="h-full w-auto object-cover rounded-2xl"
                />
              </div>
              <Link
                to={contactUsData[40]}
                target="_bank"
                className="bg-[#4b664e] font-color-secondary text-center font-button py-1 w-[180px] rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              >
                Lazada
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[170px] w-auto">
                <img
                  src={buildImageSrc(categoryImages[2])}
                  alt="lineImg"
                  className="h-full w-auto object-cover rounded-2xl"
                />
              </div>
              <Link
                to={contactUsData[37]}
                target="_bank"
                className="bg-[#4b664e] font-color-secondary text-center font-button py-1 w-[180px] rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              >
                Line Official
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. conect with us */}
      <div id="contact-form"></div>
      <div className="flex justify-center my-8 sm:my-20">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
      <div className="font-color-primary">
        {/* <div className="font-title text-center mb-8">{contactUsData[3]}</div> */}
        <div className="flex flex-col gap-6 sm:gap-10 font-body sm:mx-8 md:mx-10 lg:mx-16 justify-center items-center">
          {/* Logo and Name product */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-[275px] h-auto">
              <Logo logo={buildImageSrc(logoImages[1])} />
            </div>
          </div>
          <div className="font-subtitle text-center text-balance">
            {contactUsData[4]} <br />
            {contactUsData[5]}
          </div>
          <div className="font-body text-center text-balance">
            {contactUsData[6]} <br />
            {contactUsData[7]}
          </div>
          {/* input form */}
          <InputFormToSendEmail />
        </div>
        <div className="my-10 sm:my-12 font-title text-center">
          {contactUsData[13]}
        </div>
        <div className="flex gap-2 sm:gap-10 font-subtitle sm:mx-8 md:mx-10 lg:mx-16 justify-center items-center">
          <div className="flex flex-col gap-3 sm:gap-8">
            {/* email */}
            <a
              href={`mailto:${contactUsData[14]}`}
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-4 hover:opacity-60"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 63 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10.5"
                  y="15.5"
                  width="42"
                  height="31"
                  rx="2"
                  stroke="#293B2B"
                  strokeWidth="2"
                />
                <path
                  d="M10.5 23.25L30.617 33.1488C31.1738 33.4228 31.8262 33.4228 32.383 33.1488L52.5 23.25"
                  stroke="#293B2B"
                  strokeWidth="2"
                />
              </svg>
              {contactUsData[14]}
            </a>
            {/* phone */}
            <a className="flex items-center gap-5 hover:opacity-60">
              <svg
                width="40"
                height="40"
                viewBox="0 0 47 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67963 9.89932L13.8718 2.70711C14.2624 2.31658 14.8955 2.31658 15.2861 2.70711L23.135 10.5561C23.5255 10.9466 23.5255 11.5797 23.135 11.9703L17.914 17.1912C17.3053 17.7999 17.1544 18.7299 17.5394 19.4999L18.0977 20.6164C20.3232 25.0675 23.9325 28.6768 28.3836 30.9023L29.5001 31.4606C30.2701 31.8456 31.2001 31.6947 31.8088 31.086L37.0297 25.865C37.4203 25.4745 38.0534 25.4745 38.4439 25.865L46.2929 33.7139C46.6834 34.1045 46.6834 34.7376 46.2929 35.1282L39.1007 42.3204C36.9893 44.4317 33.6468 44.6693 31.258 42.8777L19.5233 34.0767C17.7798 32.769 16.231 31.2202 14.9233 29.4767L6.12226 17.742C4.33072 15.3532 4.56827 12.0107 6.67963 9.89932Z"
                  fill="#293B2B"
                />
              </svg>
              {contactUsData[15]}
            </a>
            {/* facebook */}
            <a
              href={contactUsData[36]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 hover:opacity-60"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_73_955)">
                  <path
                    d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.25 7.75312 44.7 18.2062 47.2969V31.3313H13.2562V24H18.2062V20.8406C18.2062 12.675 21.9 8.8875 29.925 8.8875C31.4438 8.8875 34.0687 9.1875 35.1469 9.4875V16.125C34.5844 16.0688 33.6 16.0312 32.3719 16.0312C28.4344 16.0312 26.9156 17.5219 26.9156 21.3937V24H34.7531L33.4031 31.3313H26.9062V47.8219C38.7938 46.3875 48 36.2719 48 24Z"
                    fill="#293B2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_73_955">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {contactUsData[16]}
            </a>
            {/* instragram */}
            <a
              href={contactUsData[38]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 hover:opacity-60"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_73_957)">
                  <path
                    d="M24.0109 13.2186C17.1967 13.2186 11.7002 18.0279 11.7002 23.9904C11.7002 29.9529 17.1967 34.7623 24.0109 34.7623C30.8252 34.7623 36.3217 29.9529 36.3217 23.9904C36.3217 18.0279 30.8252 13.2186 24.0109 13.2186ZM24.0109 30.9936C19.6074 30.9936 16.0074 27.8529 16.0074 23.9904C16.0074 20.1279 19.5967 16.9873 24.0109 16.9873C28.4252 16.9873 32.0145 20.1279 32.0145 23.9904C32.0145 27.8529 28.4145 30.9936 24.0109 30.9936ZM39.6967 12.7779C39.6967 14.1748 38.4109 15.2904 36.8252 15.2904C35.2288 15.2904 33.9538 14.1654 33.9538 12.7779C33.9538 11.3904 35.2395 10.2654 36.8252 10.2654C38.4109 10.2654 39.6967 11.3904 39.6967 12.7779ZM47.8502 15.3279C47.6681 11.9623 46.7895 8.98105 43.9717 6.5248C41.1645 4.06855 37.7574 3.2998 33.9109 3.13105C29.9467 2.93418 18.0645 2.93418 14.1002 3.13105C10.2645 3.29043 6.85737 4.05918 4.03951 6.51543C1.22165 8.97168 0.353795 11.9529 0.160937 15.3186C-0.0640625 18.7873 -0.0640625 29.1842 0.160937 32.6529C0.34308 36.0186 1.22165 38.9998 4.03951 41.4561C6.85737 43.9123 10.2538 44.6811 14.1002 44.8498C18.0645 45.0467 29.9467 45.0467 33.9109 44.8498C37.7574 44.6904 41.1645 43.9217 43.9717 41.4561C46.7788 38.9998 47.6574 36.0186 47.8502 32.6529C48.0752 29.1842 48.0752 18.7967 47.8502 15.3279ZM42.7288 36.3748C41.8931 38.2123 40.2752 39.6279 38.1645 40.3686C35.0038 41.4654 27.5038 41.2123 24.0109 41.2123C20.5181 41.2123 13.0074 41.4561 9.85737 40.3686C7.75737 39.6373 6.13951 38.2217 5.29308 36.3748C4.03951 33.6092 4.32879 27.0467 4.32879 23.9904C4.32879 20.9342 4.05022 14.3623 5.29308 11.6061C6.1288 9.76855 7.74665 8.35293 9.85737 7.6123C13.0181 6.51543 20.5181 6.76855 24.0109 6.76855C27.5038 6.76855 35.0145 6.5248 38.1645 7.6123C40.2645 8.34355 41.8824 9.75918 42.7288 11.6061C43.9824 14.3717 43.6931 20.9342 43.6931 23.9904C43.6931 27.0467 43.9824 33.6186 42.7288 36.3748Z"
                    fill="#293B2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_73_957">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {contactUsData[17]}
            </a>
            {/* x */}
            <a
              href={contactUsData[39]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 hover:opacity-60"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.4877 4.5H43.1064L28.6502 21.0187L45.6564 43.5H32.3439L21.9096 29.8688L9.98457 43.5H3.35645L18.8158 25.8281L2.5127 4.5H16.1627L25.5846 16.9594L36.4877 4.5ZM34.1627 39.5437H37.8283L14.1658 8.25H10.2283L34.1627 39.5437Z"
                  fill="#293B2B"
                />
              </svg>
              {contactUsData[18]}
            </a>
            {/* line  */}
            <a
              href={contactUsData[37]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 hover:opacity-60"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_73_961)">
                  <path
                    d="M29.1563 18.45V26.0719C29.1563 26.2688 29.0063 26.4188 28.8094 26.4188H27.5906C27.4688 26.4188 27.3656 26.3531 27.3094 26.2781L23.8125 21.5625V26.0813C23.8125 26.2781 23.6625 26.4281 23.4656 26.4281H22.2469C22.05 26.4281 21.9 26.2781 21.9 26.0813V18.4594C21.9 18.2625 22.05 18.1125 22.2469 18.1125H23.4563C23.5594 18.1125 23.6813 18.1688 23.7375 18.2625L27.2344 22.9781V18.4594C27.2344 18.2625 27.3844 18.1125 27.5813 18.1125H28.8C28.9969 18.1031 29.1563 18.2625 29.1563 18.4406V18.45ZM20.3719 18.1031H19.1531C18.9563 18.1031 18.8063 18.2531 18.8063 18.45V26.0719C18.8063 26.2688 18.9563 26.4188 19.1531 26.4188H20.3719C20.5688 26.4188 20.7188 26.2688 20.7188 26.0719V18.45C20.7188 18.2719 20.5688 18.1031 20.3719 18.1031ZM17.4281 24.4875H14.0906V18.45C14.0906 18.2531 13.9406 18.1031 13.7438 18.1031H12.525C12.3281 18.1031 12.1781 18.2531 12.1781 18.45V26.0719C12.1781 26.1656 12.2063 26.2406 12.2719 26.3063C12.3375 26.3625 12.4125 26.4 12.5063 26.4H17.4C17.5969 26.4 17.7469 26.25 17.7469 26.0531V24.8344C17.7469 24.6563 17.5969 24.4875 17.4188 24.4875H17.4281ZM35.5875 18.1031H30.6844C30.5063 18.1031 30.3375 18.2531 30.3375 18.45V26.0719C30.3375 26.25 30.4875 26.4188 30.6844 26.4188H35.5781C35.775 26.4188 35.925 26.2688 35.925 26.0719V24.8438C35.925 24.6469 35.775 24.4969 35.5781 24.4969H32.25V23.2219H35.5781C35.775 23.2219 35.925 23.0719 35.925 22.875V21.6469C35.925 21.45 35.775 21.3 35.5781 21.3H32.25V20.0156H35.5781C35.775 20.0156 35.925 19.8656 35.925 19.6688V18.45C35.9156 18.2719 35.7656 18.1031 35.5781 18.1031H35.5875ZM48 8.75627V39.3188C47.9906 44.1188 44.0531 48.0094 39.2438 48H8.68127C3.88127 47.9906 -0.00935809 44.0438 1.69072e-05 39.2438V8.68127C0.00939191 3.88127 3.95627 -0.00935809 8.75627 1.69072e-05H39.3188C44.1188 0.00939191 48.0094 3.94689 48 8.75627ZM41.4 21.8906C41.4 14.0719 33.5531 7.70627 23.925 7.70627C14.2969 7.70627 6.45002 14.0719 6.45002 21.8906C6.45002 28.8938 12.6656 34.7719 21.0656 35.8875C23.1094 36.3281 22.875 37.0781 22.4156 39.8344C22.3406 40.275 22.0594 41.5594 23.925 40.7813C25.7906 40.0031 33.9844 34.8563 37.6594 30.6375C40.1906 27.8531 41.4 25.0313 41.4 21.9094V21.8906Z"
                    fill="#293B2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_73_961">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {contactUsData[19]}
            </a>
          </div>
        </div>
      </div>

      {/* 2. FAQ */}
      <div id="faq"></div>
      <div className="flex justify-center my-8 sm:my-20">
        <hr className="w-[250px] h-[1px] bg-primary border-none" />
      </div>
      <div className="font-color-primary sm:mx-8 md:mx-10 lg:mx-16 justify-center items-center flex flex-col gap-6 sm:gap-7 pb-[100px] sm:pb-[110px]">
        <div className="font-title text-center">{contactUsData[20]}</div>
        <FAQ question={contactUsData[21]} answer={contactUsData[22]} />
        <FAQ question={contactUsData[23]} answer={contactUsData[24]} />
        <FAQ question={contactUsData[25]} answer={contactUsData[26]} />
        <FAQ question={contactUsData[27]} answer={contactUsData[28]} />
        <FAQ question={contactUsData[29]} answer={contactUsData[30]} />
        <FAQ question={contactUsData[31]} answer={contactUsData[32]} />
        <FAQ question={contactUsData[33]} answer={contactUsData[34]} />
        <div className="sm:mt-4">
          <BoldTextBySlash text={contactUsData[35]} />
        </div>
      </div>
    </div>
  );
}

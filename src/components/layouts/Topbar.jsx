/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useGoogleSheets } from "../../services/googleSheetService";
import { LogoTopBar } from "../Logo";

export default function Navbar({
  onToggleSidebar,
  menus,
  openMenu,
  setOpenMenu,
}) {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { switchLanguage, language } = useGoogleSheets();
  const location = useLocation();

  const toggleDropdown = () => setIsOpenLanguage(!isOpenLanguage);

  const handleLanguageChange = (language) => {
    switchLanguage(language);
    setIsOpenLanguage(false); // ปิด dropdown หลังเลือกภาษา
  };

  useEffect(() => {
    setIsOpenLanguage(false);
  }, [location]);

  const mlValues = [80, 200, 320, 440];

  return (
    <nav className="bg-primary py-4 flex h-[100px]">
      {/* Menu */}
      <ul className="flex sm:flex-1 items-center">
        <div
          className="flex justify-start items-center pl-[20px] sm:pl-[40px] sm:w-[80px] hover:opacity-50 cursor-pointer"
          role="button"
          onClick={onToggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="21"
            viewBox="0 0 448 512"
          >
            <path
              fill="#fff8f0"
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        {menus.map((menu, index) => (
          <>
            <li key={index} className="relative hidden sm:block">
              <div className="text-start min-w-[120px] max-w-[120px] w-auto">
                <RouterLink
                  to={menu.to}
                  className="py-1 hover:opacity-80 font-color-secondary font-menu"
                  onClick={() => {
                    setOpenMenu(openMenu === index ? null : index);
                    window.scroll(0, 0);
                  }}
                >
                  {menu.name}
                </RouterLink>
              </div>
            </li>

            {openMenu === index && openMenu !== -1 && (
              <div className="bg-primary w-full z-20 absolute mt-[200px] h-[150px] shadow-lg hidden sm:block">
                <ul
                  className={`w-full font-color-secondary relative z-30 font-sub-menu`}
                  style={{ paddingLeft: `${mlValues[index]}px` }}
                >
                  {menu.subMenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className={`py-1 hover:opacity-50 rounded-md cursor-pointer`}
                    >
                      {sub.to.includes("/") ? (
                        <RouterLink
                          to={sub.to}
                          onClick={() => window.scroll(0, 0)}
                        >
                          {sub.name}
                        </RouterLink>
                      ) : (
                        <RouterLink
                          to={`${menu.to}#${sub.to}`}
                          smooth={String(true)}
                          duration={500}
                        >
                          {sub.name}
                        </RouterLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ))}
      </ul>

      {/* Logo and Name product */}
      <RouterLink
        className="flex-1 font-color-secondary font-header flex items-center justify-center xl:justify-start"
        to="/"
        onClick={() => window.scroll(0, 0)}
      >
        <div className="w-[200px] h-auto">
          <LogoTopBar />
        </div>
      </RouterLink>

      {/* Show Language */}
      <div className="relative">
        <div
          className="flex justify-center items-center pr-2 lg:pr-[40px]  max-w-[80px] w-auto h-full hover:opacity-50 cursor-pointer font-color-secondary font-menu text-nowrap"
          role="button"
          onClick={toggleDropdown}
        >
          {language}
        </div>

        {/* Dropdown Menu */}
        {isOpenLanguage && (
          <div className="absolute shadow-lg right-3 rounded-md font-color-primary bg-fourth z-50">
            <ul>
              <li
                className="px-3 py-2 cursor-pointer hover:bg-[#dde7d9] rounded-t-md text-nowrap"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </li>
              <li
                className="px-3 py-2 cursor-pointer hover:bg-[#dde7d9] rounded-b-md text-nowrap"
                onClick={() => handleLanguageChange("ภาษาไทย")}
              >
                ภาษาไทย
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

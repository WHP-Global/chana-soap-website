/* eslint-disable react/prop-types */
import { Link as RouterLink } from "react-router-dom";
import { useGoogleSheets } from "../../services/googleSheetService";

export default function Sidebar({
  onToggleSidebar,
  menus,
  openMenu,
  setOpenMenu,
  findAndSetOpenMenu,
}) {
  const { language } = useGoogleSheets();
  return (
    <div className=" h-[93%] rounded-lg shadow-lg">
      <div
        className="absolute top-0 right-0 font-color-secondary mr-2 text-xl font-light cursor-pointer hover:opacity-50"
        role="button"
        onClick={onToggleSidebar}
      >
        x
      </div>
      <div className="flex-1 font-color-secondary font-header flex items-center justify-center bg-primary py-2 rounded-t-lg">
        {language === "EN" ? "CHANA" : "ชนะ"}
      </div>
      <div className="py-[25px] px-[15px] font-color-primary font-menu h-[93%] bg-fourth overflow-y-auto custom-scrollbar rounded-b-lg">
        {menus.map((menu, index) => (
          <li key={index} className="block">
            <RouterLink
              to={menu.to}
              className="py-1 hover:opacity-80"
              onClick={() => {
                setOpenMenu(openMenu === index ? null : index);
                window.scroll(0, 0);
              }}
            >
              {menu.name}
            </RouterLink>

            <ul className={`w-full list-disc pl-7`}>
              {menu.subMenu.map((sub, subIndex) => (
                <li
                  key={subIndex}
                  className={`py-1 hover:opacity-50 cursor-pointer`}
                >
                  {sub.to.includes("/") ? (
                    <RouterLink
                      to={sub.to}
                      className="block"
                      onClick={() => {
                        onToggleSidebar();
                        findAndSetOpenMenu(menus, sub.name, setOpenMenu);
                        window.scroll(0, 0);
                      }}
                    >
                      {sub.name}
                    </RouterLink>
                  ) : (
                    <RouterLink
                      to={`${menu.to}#${sub.to}`}
                      smooth={String(true)}
                      duration={500}
                      className="block"
                      onClick={() => {
                        onToggleSidebar();
                        findAndSetOpenMenu(menus, sub.name, setOpenMenu);
                      }}
                    >
                      {sub.name}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </div>
  );
}

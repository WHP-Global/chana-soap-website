import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useGoogleSheets } from "../../services/googleSheetService";
import Loading from "../Loading";
import { useImageContext } from "../../Context/ImageContext";

export default function MainContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);
  const { isLoading } = useGoogleSheets();
  const { isImageLoading } = useImageContext();
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "contact us"
  const menuName = getLocalizedData("menu bar");

  const menus = [
    {
      name: menuName[1],
      to: "/",
      subMenu: [
        {
          name: menuName[2],
          to: "our-story",
        },
        {
          name: menuName[3],
          to: "sourcing-and-impact",
        },
      ],
    },
    {
      name: menuName[4],
      to: "/products",
      subMenu: [
        {
          name: menuName[5],
          to: "gentle-glow",
        },
        {
          name: menuName[6],
          to: "active-fresh",
        },
        {
          name: menuName[7],
          to: "why-Art-Alice",
        },
        {
          name: menuName[8],
          to: "testimonials",
        },
      ],
    },
    {
      name: menuName[9],
      to: "/projects",
      subMenu: [
        {
          name: menuName[10],
          to: "/Happy-Worm-Farm",
        },
        {
          name: menuName[11],
          to: "/aloe-vera",
        },
        {
          name: menuName[12],
          to: "/eq-life",
        },
      ],
    },
    {
      name: menuName[13],
      to: "/contact-us",
      subMenu: [
        {
          name: menuName[14],
          to: "where-to-buy",
        },
        {
          name: menuName[15],
          to: "contact-form",
        },
        {
          name: menuName[16],
          to: "faq",
        },
      ],
    },
  ];

  // ปิด Sidebar เมื่อคลิกข้างนอก
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const findAndSetOpenMenu = (menus, targetSubMenuName, setOpenMenu) => {
    const targetMenuIndex = menus.findIndex((menu) =>
      menu.subMenu.some((sub) => sub.name === targetSubMenuName)
    );

    if (targetMenuIndex !== -1) {
      setOpenMenu(targetMenuIndex);
    }
  };

  return (
    <div>
      {isLoading && (
        <div className="fixed h-[100vh] w-[100vw] flex justify-center items-center z-50">
          <Loading />
        </div>
      )}
      {/* Topbar */}
      <div className="sticky top-0 z-10">
        <Topbar
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          menus={menus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </div>

      <div>
        {/* Sidebar (Popup) */}
        {isSidebarOpen && (
          <div className="popup-overlay">
            <div
              ref={sidebarRef}
              className="fixed left-0 min-w-[345px] max-w-[485px] m-3 sm:m-6 h-[93%] fadeInLeft"
            >
              <div className="h-full">
                <Sidebar
                  onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                  menus={menus}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  findAndSetOpenMenu={findAndSetOpenMenu}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 bg-fourth">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer
          menus={menus}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          findAndSetOpenMenu={findAndSetOpenMenu}
        />
      </div>
    </div>
  );
}

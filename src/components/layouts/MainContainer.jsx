import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useGoogleSheets } from "../../services/googleSheetService";
import Loading from "../Loading";

export default function MainContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);
  const { isLoading, language } = useGoogleSheets();

  const menus = [
    {
      name: `${language === "EN" ? "About Us" : "เกี่ยวกับ"}`,
      to: "/",
      subMenu: [
        {
          name: `${language === "EN" ? "Our Story" : "เรื่องราวของเรา"}`,
          to: "our-story",
        },
        {
          name: `${
            language === "EN"
              ? "Sourcing And Impact"
              : "การจัดหาวัตถุดิบและผลกระทบต่อชุมชน"
          }`,
          to: "sourcing-and-impact",
        },
        {
          name: `${
            language === "EN"
              ? "Beyond Skincare: Chana Soap's Commitment"
              : "เกินกว่าการดูแลผิว: ความมุ่งมั่นของสบู่ชนะ"
          }`,
          to: "commitment",
        },
      ],
    },
    {
      name: `${language === "EN" ? "Products" : "สินค้า"}`,
      to: "/products",
      subMenu: [
        { name: "Gentle Glow", to: "gentle-glow" },
        { name: "Active Refresh", to: "active-refresh" },
        {
          name: `${
            language === "EN"
              ? "Why Choose Chana Gentle Glow?"
              : "ทำไมต้องเลือกสบู่ชนะ Gentle Glow?"
          }`,
          to: "why-chana",
        },
        {
          name: `${
            language === "EN" ? "Testimonials" : "รีวิวจากลูกค้าของเรา"
          }`,
          to: "testimonials",
        },
      ],
    },
    {
      name: `${language === "EN" ? "Projects" : "โปรเจค"}`,
      to: "/projects",
      subMenu: [
        {
          name: `${
            language === "EN"
              ? "Empowering Farmers in Prachinburi with AF"
              : "สอนชาวบ้านปราจีนบุรีทำปุ๋ยไส้เดือน AF"
          }`,
          to: "/empowering-farmer",
        },
        {
          name: `${
            language === "EN" ? "Growing Aloe Vera" : "การปลูกว่านหางจระเข้"
          }`,
          to: "/aloe-vera",
        },
        {
          name: `${
            language === "EN" ? "EQ Life Foundation" : "EQ Life Foundation"
          }`,
          to: "/eq-life",
        },
      ],
    },
    {
      name: `${language === "EN" ? "Contact Us" : "ติดต่อเรา"}`,
      to: "/contact-us",
      subMenu: [
        {
          name: `${language === "EN" ? "Where To Buy" : "ช่องทางการสั่งซื้อ"}`,
          to: "where-to-buy",
        },
        {
          name: `${
            language === "EN" ? "Contact form for inquiries" : "ติดต่อกับเรา"
          }`,
          to: "contact-form",
        },
        {
          name: `${language === "EN" ? "FAQ" : "คำถามที่พบบ่อย"}`,
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
              className="fixed left-0 max-w-[485px] m-3 sm:m-6 h-[93%] fadeInLeft"
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

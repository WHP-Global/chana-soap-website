import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);

  const menus = [
    {
      name: "About Us",
      to: "/",
      subMenu: [
        { name: "Our Story", to: "our-story" },
        { name: "Sourcing And Impact", to: "sourcing-and-impact" },
        {
          name: "Beyond Skincare: Chana Soap's Commitment",
          to: "commitment",
        },
      ],
    },
    {
      name: "Products",
      to: "/products",
      subMenu: [
        { name: "Gentle Glow", to: "gentle-glow" },
        { name: "Active Refresh", to: "active-refresh" },
        { name: "Why Chana?", to: "why-chana" },
        { name: "Testimonials", to: "testimonials" },
      ],
    },
    {
      name: "Projects",
      to: "/projects",
      subMenu: [
        {
          name: "Empowering Farmers in Prachinburi",
          to: "/empowering-farmer",
        },
        { name: "Aloe vera", to: "/aloe-vera" },
        { name: "EQ life foundation", to: "/eq-life" },
      ],
    },
    {
      name: "Contact Us",
      to: "/contact-us",
      subMenu: [
        { name: "Where To Buy", to: "where-to-buy" },
        { name: "Contact form for inquiries", to: "contact-form" },
        { name: "FAQ", to: "faq" },
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

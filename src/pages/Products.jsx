import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";

export default function Products() {
  const location = useLocation();

  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "products"
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
  }, [location]);
  return (
    <div>
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      {productsData.map((data, index) => (
        <p key={index}>{data}</p>
      ))}
      <div id="gentle-glow">Gentle Glow</div>
      <div id="active-refresh">Active Refresh</div>
      <div id="why-chana">Why Chana?</div>
      <div id="testimonials">Review from Our Customers</div>
    </div>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleSheets } from "../services/googleSheetService";

export default function AboutUs() {
  const location = useLocation();
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "about us"
  const aboutUsData = getLocalizedData("about us");

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }
    }
  }, [location]);

  return (
    <div>
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      <hr />
      <div>
        <div>
          <h1>ข้อมูลเกี่ยวกับเรา</h1>
          {aboutUsData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <hr />
      <div id="our-story">Our Story</div>
      <div id="sourcing-and-impact">Sourcing And Impact</div>
      <div id="commitment">Beyond Skincare: Chana Soap's Commitment</div>
    </div>
  );
}

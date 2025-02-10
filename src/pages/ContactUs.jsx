import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ContactUs() {
  const location = useLocation();

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
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      <div id="where-to-buy">Where To Buy</div>
      <div id="contact-form">Contact form for inquiries</div>
      <div id="faq">FAQ</div>
    </div>
  );
}

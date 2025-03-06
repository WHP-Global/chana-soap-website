import { useEffect, useState } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import { sendEmail } from "../services/emailService";
import MiniModal from "./MiniModal";

export default function InputFormToSendEmail() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState("true");
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "contact us"
  const contactUsData = getLocalizedData("contact us");

  useEffect(() => {
    setIsSuccess("");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(
      formData,
      "สอบถามข้อมูลสินค้าและบริการ : Chana Soap"
    );

    if (result.ok === true) {
      setIsSuccess("true");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else setIsSuccess("false");
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="w-[320px] sm:w-[600px] flex flex-col gap-2.5 "
      >
        <div>
          <label>{contactUsData[8]}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-input rounded-lg border-b-3 border-gray-300  focus:outline-none p-1 mt-1 w-full"
            required
          />
        </div>
        <div>
          <label>{contactUsData[9]}</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-input rounded-lg border-b-3 border-gray-300  focus:outline-none p-1 mt-1 w-full "
            required
          />
        </div>
        <div>
          <label>{contactUsData[10]}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-input rounded-lg border-b-3 border-gray-300  focus:outline-none p-1 mt-1 w-full "
            required
          />
        </div>
        <div>
          <label>{contactUsData[11]}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-input rounded-lg border-b-3 border-gray-300  focus:outline-none p-1 mt-1 w-full "
            required
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-[#4b664e] self-end font-color-secondary font-button py-1 w-[180px] rounded-lg shadow-md hover:bg-green-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          {contactUsData[12]}
        </button>
      </form>
      {isSuccess !== "" && (
        <div className="fixed inset-0 z-10">
          <div className="w-full flex justify-center items-center h-full">
            <div className="bg-black opacity-10 w-full h-full"></div>
            <div className="fixed">
              <MiniModal isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

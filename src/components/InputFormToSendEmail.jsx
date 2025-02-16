import { useState } from "react";
import { useGoogleSheets } from "../services/googleSheetService";
import { sendEmail } from "../services/emailService";

export default function InputFormToSendEmail() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "contact us"
  const contactUsData = getLocalizedData("contact us");

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
    if (result.success) alert("Email sent successfully!");
    else alert("Failed to send email");
  };

  return (
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
        <label>{contactUsData[9]}r</label>
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
  );
}

import { useGoogleSheets } from "../services/googleSheetService";

export default function MiniModal({ isSuccess, setIsSuccess }) {
  const { language } = useGoogleSheets();
  return (
    <div className="bg-red-400 w-[300px] h-[200px] rounded-lg bg-secondary shadow-xl flex justify-center items-center gap-7 flex-col font-body p-1">
      {isSuccess === "true" && (
        <div>
          {language === "English"
            ? "Email sent successfully"
            : "ส่งอีเมล์สำเร็จ"}
        </div>
      )}
      {isSuccess === "false" && (
        <div>
          {language === "English" ? "Failed to send email" : "ส่งอีเมล์ล้มเหลว"}
        </div>
      )}
      <button
        className="bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-m cursor-pointer"
        onClick={() => setIsSuccess("")}
      >
        {language === "English" ? "Close" : "ปิด"}
      </button>
    </div>
  );
}

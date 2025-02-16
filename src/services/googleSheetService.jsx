import { createContext, useContext, useEffect, useState } from "react";

const GoogleSheetsContext = createContext();

export const GoogleSheetsProvider = ({ children }) => {
  const [sheetsData, setSheetsData] = useState({});
  const [language, setLanguage] = useState("EN"); // ภาษาเริ่มต้นคืออังกฤษ

  const sheetId = import.meta.env.VITE_SHEET_ID;
  const apiKey = import.meta.env.VITE_API_KEY;

  // ฟังก์ชันดึงข้อมูลจาก Google Sheets
  const fetchData = async () => {
    const ranges = [
      "about us",
      "inspiration",
      "contact",
      "products",
      "gentle glow",
      "active refresh",
      "projects",
      "empowering project",
      "aloe vera project",
      "eq life project",
      "contact us",
    ];
    try {
      const data = await Promise.all(
        ranges.map(async (range) => {
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
          const response = await fetch(url);
          const result = await response.json();
          return { range, values: result.values };
        })
      );
      const sheets = data.reduce((acc, { range, values }) => {
        acc[range] = values;
        return acc;
      }, {});
      setSheetsData(sheets); // เก็บข้อมูลที่ดึงมา
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // ดึงข้อมูลจาก Google Sheets เมื่อโหลดครั้งแรก

  // ฟังก์ชันสลับภาษา
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  // ฟังก์ชันเพื่อดึงข้อมูลตามภาษา
  const getLocalizedData = (sheetName) => {
    const sheet = sheetsData[sheetName];
    if (!sheet) return [];
    return sheet.map((row) => {
      const localizedData = language === "EN" ? row[3] : row[2]; // index 2 = ภาษาไทย, index 3 = ภาษาอังกฤษ
      return localizedData;
    });
  };

  return (
    <GoogleSheetsContext.Provider
      value={{
        sheetsData,
        language,
        switchLanguage,
        getLocalizedData, // เพิ่มฟังก์ชันนี้ใน Context
      }}
    >
      {children}
    </GoogleSheetsContext.Provider>
  );
};

// hook สำหรับใช้ Context
// eslint-disable-next-line react-refresh/only-export-components
export const useGoogleSheets = () => {
  return useContext(GoogleSheetsContext);
};

import { createContext, useContext, useEffect, useState } from "react";

const GoogleSheetsContext = createContext();

export const GoogleSheetsProvider = ({ children }) => {
  const [sheetsData, setSheetsData] = useState({});
  const [language, setLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(true); // เพิ่มสถานะกำลังโหลด

  const sheetNames = [
    "menu bar",
    "about us",
    "inspiration",
    "contact",
    "products",
    "gentle glow",
    "active fresh",
    "projects",
    "empowering project",
    "aloe vera project",
    "eq life project",
    "contact us",
  ];

  const fetchData = async () => {
    setIsLoading(true); // เริ่มโหลดข้อมูล
    try {
      const data = await Promise.all(
        sheetNames.map(async (sheetName) => {
          const timestamp = new Date().getTime(); // query param ใหม่
          const url = `${
            import.meta.env.VITE_SHEET_API_URL
          }?sheet=${encodeURIComponent(sheetName)}&t=${timestamp}`;

          const response = await fetch(url, {
            redirect: "follow",
            cache: "no-store", // บอก browser ไม่ต้อง cache
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const result = await response.json();
          const values = result.data ?? result;

          // ถ้า result มี updatedAt และ data
          const cached = JSON.parse(localStorage.getItem(sheetName));

          if (!cached || cached.updatedAt !== result.updatedAt) {
            localStorage.setItem(sheetName, JSON.stringify(result));
            return { sheetName, values }; // ใช้ result.data แทน result โดยตรง
          } else {
            return { sheetName, values: cached.data ?? cached };
          }
        })
      );

      const sheets = data.reduce((acc, { sheetName, values }) => {
        acc[sheetName] = values;
        return acc;
      }, {});

      setSheetsData(sheets);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // โหลดเสร็จ
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const getLocalizedData = (sheetName) => {
    const sheet = sheetsData[sheetName];
    if (!sheet) return [];
    return sheet.map((row) =>
      language === "English" ? row["English"] : row["ภาษาไทย"]
    );
  };

  return (
    <GoogleSheetsContext.Provider
      value={{
        sheetsData,
        language,
        switchLanguage,
        getLocalizedData,
        isLoading,
      }}
    >
      {children}
    </GoogleSheetsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGoogleSheets = () => {
  return useContext(GoogleSheetsContext);
};

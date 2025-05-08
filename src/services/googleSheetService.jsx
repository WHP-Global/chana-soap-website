import { createContext, useContext, useEffect, useState } from "react";

const GoogleSheetsContext = createContext();

export const GoogleSheetsProvider = ({ children }) => {
  const [sheetsData, setSheetsData] = useState({});
  const [language, setLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);

    const cacheRaw = localStorage.getItem("sheetsDataCache");
    const cache = cacheRaw ? JSON.parse(cacheRaw) : { data: {}, updated: {} };

    const newData = {};
    const newUpdated = {};

    try {
      for (const sheetName of sheetNames) {
        const metaUrl = `${
          import.meta.env.VITE_SHEET_API_URL
        }?sheet=${encodeURIComponent(sheetName)}&meta=1`;

        const metaRes = await fetch(metaUrl);
        const metaJson = await metaRes.json();
        const serverLastUpdated = metaJson.lastUpdated;

        const localLastUpdated = cache.updated?.[sheetName];

        if (
          serverLastUpdated !== localLastUpdated ||
          !cache.data?.[sheetName]
        ) {
          // fetch ข้อมูลใหม่จาก sheet
          const dataUrl = `${
            import.meta.env.VITE_SHEET_API_URL
          }?sheet=${encodeURIComponent(sheetName)}`;
          const dataRes = await fetch(dataUrl);
          const sheetData = await dataRes.json();

          newData[sheetName] = sheetData;
          newUpdated[sheetName] = serverLastUpdated;
        } else {
          // ใช้ข้อมูลจาก cache ได้
          newData[sheetName] = cache.data[sheetName];
          newUpdated[sheetName] = localLastUpdated;
        }
      }

      setSheetsData(newData);

      localStorage.setItem(
        "sheetsDataCache",
        JSON.stringify({ data: newData, updated: newUpdated })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
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

import { createContext, useContext, useEffect, useState } from "react";

const GoogleSheetsContext = createContext();

// export const GoogleSheetsProvider = ({ children }) => {
//   const [sheetsData, setSheetsData] = useState({});
//   const [language, setLanguage] = useState("English");
//   const [isLoading, setIsLoading] = useState(true); // เพิ่มสถานะกำลังโหลด

//   // const API_URL = import.meta.env.VITE_SHEET_API_URL;
//   const sheetNames = [
//     "menu bar",
//     "about us",
//     "inspiration",
//     "contact",
//     "products",
//     "gentle glow",
//     "active fresh",
//     "projects",
//     "empowering project",
//     "aloe vera project",
//     "eq life project",
//     "contact us",
//   ];

//   const fetchData = async () => {
//     setIsLoading(true); // เริ่มโหลดข้อมูล
//     try {
//       const data = await Promise.all(
//         sheetNames.map(async (sheetName) => {
//           // const url = `${API_URL}?sheet=${encodeURIComponent(
//           //   sheetName
//           // )}&format=json`;
//           const url = `${
//             import.meta.env.VITE_SHEET_API_URL
//           }?sheet=${encodeURIComponent(sheetName)}`;
//           console.log("first", import.meta.env.VITE_SHEET_API_URL);

//           const response = await fetch(url, { redirect: "follow" });

//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }

//           const result = await response.json();
//           return { sheetName, values: result };
//         })
//       );

//       const sheets = data.reduce((acc, { sheetName, values }) => {
//         acc[sheetName] = values;
//         return acc;
//       }, {});

//       setSheetsData(sheets);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false); // โหลดเสร็จ
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const switchLanguage = (lang) => {
//     setLanguage(lang);
//   };

//   const getLocalizedData = (sheetName) => {
//     const sheet = sheetsData[sheetName];
//     if (!sheet) return [];
//     return sheet.map((row) =>
//       language === "English" ? row["English"] : row["ภาษาไทย"]
//     );
//   };

//   return (
//     <GoogleSheetsContext.Provider
//       value={{
//         sheetsData,
//         language,
//         switchLanguage,
//         getLocalizedData,
//         isLoading,
//       }}
//     >
//       {children}
//     </GoogleSheetsContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useGoogleSheets = () => {
//   return useContext(GoogleSheetsContext);
// };

import Cookies from "js-cookie";

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
    try {
      // เช็คข้อมูลใน Cookie
      const cachedData = Cookies.get("sheetsData");
      if (cachedData) {
        setSheetsData(JSON.parse(cachedData));
        setIsLoading(false);
        return;
      }

      const data = await Promise.all(
        sheetNames.map(async (sheetName) => {
          const url = `${
            import.meta.env.VITE_SHEET_API_URL
          }?sheet=${encodeURIComponent(sheetName)}`;
          const response = await fetch(url, { redirect: "follow" });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const result = await response.json();
          return { sheetName, values: result };
        })
      );

      const sheets = data.reduce((acc, { sheetName, values }) => {
        acc[sheetName] = values;
        return acc;
      }, {});

      setSheetsData(sheets);
      // เก็บข้อมูลใน Cookie
      Cookies.set("sheetsData", JSON.stringify(sheets), { expires: 7 }); // เก็บไว้ 7 วัน
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

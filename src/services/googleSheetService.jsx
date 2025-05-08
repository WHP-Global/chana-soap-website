import { createContext, useContext, useEffect, useState } from "react";

const GoogleSheetsContext = createContext();

export const GoogleSheetsProvider = ({ children }) => {
  const [sheetsData, setSheetsData] = useState({});
  const [language, setLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(true); // เพิ่มสถานะกำลังโหลด

  // const API_URL = import.meta.env.VITE_SHEET_API_URL;
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
          // const url = `${API_URL}?sheet=${encodeURIComponent(
          //   sheetName
          // )}&format=json`;
          // const url = `${
          //   import.meta.env.VITE_SHEET_API_URL
          // }?sheet=${encodeURIComponent(sheetName)}`;
          // console.log("first", import.meta.env.VITE_SHEET_API_URL);

          const timestamp = new Date().getTime(); // query param ใหม่
          const url = `${
            import.meta.env.VITE_SHEET_API_URL
          }?sheet=${encodeURIComponent(sheetName)}&t=${timestamp}`;

          const response = await fetch(url, {
            redirect: "follow",
            cache: "no-store", // บอก browser ไม่ต้อง cache
          });

          // const response = await fetch(url, { redirect: "follow" });

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

// import { createContext, useContext, useEffect, useState } from "react";

// const GoogleSheetsContext = createContext();

// export const GoogleSheetsProvider = ({ children }) => {
//   const [sheetsData, setSheetsData] = useState({});
//   const [language, setLanguage] = useState("English");
//   const [isLoading, setIsLoading] = useState(true);

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
//     setIsLoading(true);

//     const cacheRaw = localStorage.getItem("sheetsDataCache");
//     const cache = cacheRaw ? JSON.parse(cacheRaw) : { data: {}, updated: {} };

//     try {
//       const metaPromises = sheetNames.map(async (sheetName) => {
//         const metaUrl = `${
//           import.meta.env.VITE_SHEET_API_URL
//         }?sheet=${encodeURIComponent(sheetName)}&meta=1`;
//         const metaRes = await fetch(metaUrl);
//         const metaJson = await metaRes.json();
//         return { sheetName, lastUpdated: metaJson.lastUpdated };
//       });

//       const metaResults = await Promise.all(metaPromises);

//       const dataPromises = metaResults.map(
//         async ({ sheetName, lastUpdated }) => {
//           const localUpdated = cache.updated?.[sheetName];
//           if (lastUpdated !== localUpdated || !cache.data?.[sheetName]) {
//             const dataUrl = `${
//               import.meta.env.VITE_SHEET_API_URL
//             }?sheet=${encodeURIComponent(sheetName)}`;
//             const dataRes = await fetch(dataUrl);
//             const sheetData = await dataRes.json();
//             return { sheetName, values: sheetData, lastUpdated };
//           } else {
//             return {
//               sheetName,
//               values: cache.data[sheetName],
//               lastUpdated,
//             };
//           }
//         }
//       );

//       const dataResults = await Promise.all(dataPromises);

//       const newData = {};
//       const newUpdated = {};
//       dataResults.forEach(({ sheetName, values, lastUpdated }) => {
//         newData[sheetName] = values;
//         newUpdated[sheetName] = lastUpdated;
//       });

//       setSheetsData(newData);
//       localStorage.setItem(
//         "sheetsDataCache",
//         JSON.stringify({ data: newData, updated: newUpdated })
//       );
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false);
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

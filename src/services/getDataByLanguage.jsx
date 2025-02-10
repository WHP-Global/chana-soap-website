/* eslint-disable react-hooks/rules-of-hooks */
import { useGoogleSheets } from "./googleSheetService";

export const getDataByLanguage = (sheetName) => {
  const { sheetsData, language } = useGoogleSheets();
  const sheet = sheetsData[sheetName];
  if (!sheet) return [];

  return sheet.map((row) => {
    const text = language === "EN" ? row[3] : row[2]; // index 2 = ภาษาไทย, index 3 = ภาษาอังกฤษ
    return text;
  });
};

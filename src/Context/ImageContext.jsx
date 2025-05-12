/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

// สร้าง context
const ImageContext = createContext();

// สร้าง provider เพื่อใช้ในแอปพลิเคชัน
export const ImageProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]);
  const [image, setImage] = useState(null);

  const fetchAllImages = async () => {
    try {
      // const response = await fetch("http://localhost:8888/images", {
      //   headers: {
      //     "Cache-Control": "no-cache",
      //   },
      // });
      const response = await fetch("https://www.artandalice.co/images");

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setAllImages(data.images);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  const updateImage = (newImage) => {
    setImage(newImage);
  };

  return (
    <ImageContext.Provider
      value={{ allImages, fetchAllImages, updateImage, image, setImage }}
    >
      {children}
    </ImageContext.Provider>
  );
};

// Hook สำหรับใช้ context ในหน้าอื่น ๆ
export const useImageContext = () => {
  return useContext(ImageContext);
};

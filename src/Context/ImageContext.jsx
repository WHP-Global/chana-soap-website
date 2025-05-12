/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

// สร้าง context
const ImageContext = createContext();

// สร้าง provider เพื่อใช้ในแอปพลิเคชัน
export const ImageProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]);
  const [image, setImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const fetchAllImages = async () => {
    try {
      const cached = JSON.parse(localStorage.getItem("allImagesCache"));
      // const response = await fetch("http://localhost:8888/images", {
      //   headers: {
      //     "Cache-Control": "no-cache",
      //   },
      // });

      if (cached && cached.images.length > 0) {
        setAllImages(cached.images);
        setIsImageLoading(false);
        return; // หยุดการทำงานตรงนี้เลย
      }

      const response = await fetch("https://www.artandalice.co/images");

      const data = await response.json();

      if (data.success) {
        const updatedAt = data.updatedAt;
        // ถ้าไม่มี cached หรือ updatedAt ไม่ตรงกัน ให้โหลดใหม่
        if (!cached || cached.updatedAt !== updatedAt) {
          localStorage.setItem(
            "allImagesCache",
            JSON.stringify({
              updatedAt,
              images: data.images,
            })
          );
          setAllImages(data.images);
        } else {
          // ถ้าเหมือนเดิม ใช้ cache แทน
          setAllImages(cached.images);
        }
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsImageLoading(false); // ✅ จบการโหลด
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
      value={{
        allImages,
        fetchAllImages,
        updateImage,
        image,
        setImage,
        isImageLoading,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

// Hook สำหรับใช้ context ในหน้าอื่น ๆ
export const useImageContext = () => {
  return useContext(ImageContext);
};

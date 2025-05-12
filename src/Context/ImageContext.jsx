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
      const cacheExpiryTime = 3600000; // เก็บข้อมูลใน cache 1 ชั่วโมง (3600000 ms)
      const now = new Date().getTime();

      // ตรวจสอบว่า cached data มีอยู่และยังไม่หมดอายุ
      if (
        cached &&
        cached.images.length > 0 &&
        now - cached.timestamp < cacheExpiryTime
      ) {
        setAllImages(cached.images);
        setIsImageLoading(false);
        return; // หยุดการทำงานตรงนี้เลย
      }

      const response = await fetch("https://www.artandalice.co/images");
      const data = await response.json();

      if (data.success) {
        const updatedAt = data.updatedAt;

        // อัพเดต localStorage และใช้ข้อมูลใหม่
        localStorage.setItem(
          "allImagesCache",
          JSON.stringify({
            updatedAt,
            images: data.images,
            timestamp: now, // บันทึกเวลาใน cache
          })
        );
        setAllImages(data.images);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsImageLoading(false); // ✅ จบการโหลด
    }
  };

  useEffect(() => {
    fetchAllImages();
  }, []); // เรียกแค่ครั้งเดียวตอน component โหลด

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

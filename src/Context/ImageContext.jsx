import { createContext, useState, useContext, useEffect } from "react";

// สร้าง context
const ImageContext = createContext();

// สร้าง provider เพื่อใช้ในแอปพลิเคชัน
export const ImageProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]);
  const [image, setImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const fetchAllImages = async () => {
    try {

      const response = await fetch("https://www.artandalice.co/images");
      const data = await response.json();

      if (data.success) {
        setAllImages(data.images);

        // ✅ โหลดรูปทุกภาพให้เสร็จก่อน พร้อม versioning ด้วย ?v=mtime
        const imageLoadPromises = data.images.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = `https://www.artandalice.co${img.path}?v=${img.mtime}`;
            image.onload = resolve;
            image.onerror = resolve;
          });
        });

        await Promise.all(imageLoadPromises); // รอทุกภาพโหลดครบ
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsImageLoading(false); // ✅ จบการโหลด
    }
  };

  const handleUpload = async (selectedFolder) => {
    if (!image) return;
    setUploading(true);

    const filenameWithExtension = image.name;
    const filenameWithoutExtension = filenameWithExtension.split(".")[0];

    const formData = new FormData();
    formData.append("file", image);
    formData.append("filename", filenameWithoutExtension);
    formData.append("folderName", selectedFolder); // ส่งชื่อโฟลเดอร์ที่เลือกไปด้วย

    try {
      // const res = await fetch("http://localhost:8888/upload", {
      const res = await fetch("https://www.artandalice.co/upload", {
        method: "PUT",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setImage(null); // ล้างไฟล์
        fetchAllImages(); // ⬅️ โหลดใหม่ ไม่ใช้ cache
        // alert("อัปเดตไฟล์สำเร็จ");
      } else {
        alert("เกิดข้อผิดพลาดในการอัปโหลด");
      }
    } catch (error) {
      alert("อัปโหลดล้มเหลว: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    fetchAllImages();
  }, []); // เรียกแค่ครั้งเดียวตอน component โหลด

  return (
    <ImageContext.Provider
      value={{
        allImages,
        fetchAllImages,
        image,
        setImage,
        isImageLoading,
        uploading,
        handleUpload,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

// Hook สำหรับใช้ context ในหน้าอื่น ๆ
// eslint-disable-next-line react-refresh/only-export-components
export const useImageContext = () => {
  return useContext(ImageContext);
};

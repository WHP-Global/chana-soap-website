import { useState } from "react";
import { useImageContext } from "../Context/ImageContext"; // import useImageContext

const CORRECT_PASSWORD = import.meta.env.VITE_CORRECT_PASSWORD;

export default function UploadPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("AboutUs");

  // ใช้ useImageContext เพื่อเข้าถึง context
  const { allImages, fetchAllImages, image, setImage } = useImageContext();

  const folders = [
    "AboutUs",
    "ActiveFresh",
    "AloeVera",
    "ContactUs",
    "EmpoweringFarmerProject",
    "EqLife",
    "GentleGlow",
    "logo",
    "Products",
    "Projects",
  ];

  const handleLogin = () => {
    if (password === CORRECT_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("รหัสผ่านไม่ถูกต้อง");
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);

    const filenameWithExtension = image.name;
    const filenameWithoutExtension = filenameWithExtension.split(".")[0];

    const formData = new FormData();
    formData.append("file", image);
    formData.append("filename", filenameWithoutExtension);
    formData.append("folderName", selectedFolder); // ส่งชื่อโฟลเดอร์ที่เลือกไปด้วย

    try {
      const res = await fetch("https://www.artandalice.co/upload", {
        method: "PUT",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        alert("อัปเดตไฟล์สำเร็จ");
        setImage(null); // ล้างไฟล์
        await fetchAllImages();
      } else {
        alert("เกิดข้อผิดพลาดในการอัปโหลด");
      }
    } catch (error) {
      console.log("error", error);
      alert("อัปโหลดล้มเหลว: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const filterImagesByFolder = (folder) => {
    return allImages.filter((imgUrl) => imgUrl.includes(folder));
  };

  const folderNav = (folder) => {
    return (
      <button
        key={folder}
        onClick={() => setSelectedFolder(folder)}
        className={`m-1 font-body px-6 py-2 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 
    ${selectedFolder === folder ? "bg-green-800" : "bg-primary"} 
    ${selectedFolder === folder ? "text-white" : "font-color-secondary"}
    hover:bg-green-800`}
      >
        {folder}
      </button>
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
        <h2 className="font-body-bold text-gray-800 mb-6">เข้าสู่ระบบ</h2>
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรุณากรอกรหัสผ่าน"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 font-body-bold"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-2 my-8">
      <h2 className="font-body-bold mb-3">อัปโหลดรูปภาพใหม่</h2>
      <div className="flex flex-col gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="font-body"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-fit font-body-bold bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          {uploading ? "กำลังอัปโหลด..." : "อัปโหลด"}
        </button>
      </div>
      <hr className="my-5" />
      <div>
        <h3 className="font-body-bold mb-3">เลือกโฟลเดอร์</h3>
        <h3 className="mt-2 font-body">
          เปลี่ยนรูปให้ใช้ชื่อเดิม เช่น ต้องการเปลี่ยนรูปที่มี path นี้
          <br />
          /AboutUs/founder.jpg ให้ตั้งชื่อไฟลรูปใหม่เป็น founder
        </h3>
        <div>{folders.map((folder) => folderNav(folder))}</div>
      </div>

      <div className="my-8 mx-2 text-center">
        <h3 className="font-body-bold">รายการรูปทั้งหมดใน {selectedFolder}</h3>
        <div className="flex flex-wrap gap-4 justify-center mt-3">
          {filterImagesByFolder(selectedFolder).map((imgUrl, index) => (
            <div
              key={index}
              className="text-center flex-1 sm:flex-none sm:w-1/4 md:w-1/5 lg:w-1/5 xl:w-1/5 box-border"
            >
              <img
                src={`https://www.artandalice.co${imgUrl}?t=${Date.now()}`}
                alt={`รูปที่ ${index + 1}`}
                className="w-full h-48 object-contain border border-gray-300 rounded-lg"
              />
              <div className="mt-2 text-sm text-gray-500 break-words overflow-hidden max-h-12">
                {imgUrl}
              </div>

              {/* แสดงชื่อไฟล์ */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

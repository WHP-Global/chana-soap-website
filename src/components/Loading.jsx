export default function Loading() {
  return (
    <div className="relative h-[100vh] w-[100vw] flex justify-center items-center">
      {/* พื้นหลังที่มี Opacity 50% */}
      <div
        className={`absolute inset-0 bg-primary transition-opacity duration-5000`}
      ></div>

      {/* Loading Spinner อยู่บนพื้นหลัง */}
      <div className="relative flex flex-col items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white border-opacity-75"></div>
        <span className="mt-5 font-color-secondary font-title">
          Art & Alice Soap
        </span>
        <span className="mt-5 font-color-secondary font-title">Loading...</span>
      </div>
    </div>
  );
}

const ImgOne = ({ img }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] py-[20px] sm:py-[40px] mx-5 sm:mx-[4%] md:mx-[8%] lg:mx-[12%]">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl aspect-[16/9]">
        <img
          src={img}
          alt={img}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImgOne;

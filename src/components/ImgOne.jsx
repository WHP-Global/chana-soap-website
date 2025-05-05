const ImgOne = ({ img }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] py-[20px] sm:py-[40px] h-auto mx-5 sm:mx-[4%] md:mx-[8%] lg:mx-[12%]">
      <div className="h-auto sm:h-[320px] lg:h-[500px] w-auto">
        <img src={img} alt={img} className="h-full w-auto rounded-2xl" />
      </div>
    </div>
  );
};

export default ImgOne;

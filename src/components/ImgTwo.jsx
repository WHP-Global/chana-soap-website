const ImgTwo = ({ imgGroup = [] }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] md:gap-[40] h-auto py-[20px] sm:py-[40px] max-w-6xl  ">
        <div className="h-auto  sm:h-[320px] lg:h-[500px] w-auto">
          <img
            src={imgGroup[0]}
            alt={imgGroup[0]}
            className="h-full w-auto rounded-2xl"
          />
        </div>
        <div className="h-auto  sm:h-[320px] lg:h-[500px] w-auto">
          <img
            src={imgGroup[1]}
            alt={imgGroup[1]}
            className="h-full w-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgTwo;

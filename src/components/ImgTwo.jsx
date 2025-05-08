const ImgTwo = ({ imgGroup = [] }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] md:gap-[40px] py-[20px] sm:py-[40px] max-w-6xl w-full">
        {imgGroup.slice(0, 2).map((img, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 rounded-2xl overflow-hidden"
          >
            <div className="pt-[56.25%]">
              {/* 16:9 aspect ratio */}
              <img
                src={img}
                alt={`image-${index}`}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgTwo;

const ImgTwo = ({ imgGroup = [] }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] md:gap-[40px] py-[20px] sm:py-[40px] max-w-6xl w-full">
        {imgGroup.slice(0, 2).map((img, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 rounded-2xl overflow-hidden aspect-[16/9]"
          >
            <img
              src={img}
              alt={`image-${index}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgTwo;

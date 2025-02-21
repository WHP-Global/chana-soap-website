// full width image
export default function Banner({ src, type = "image", isHavePosition }) {
  return (
    <div className="w-full py-[20px] sm:py-[60px]">
      <div className="h-[350px] sm:h-[450px] md:h-[550px] w-full bg-amber-950">
        {type === "video" ? (
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={src}
            alt="Banner"
            className="h-full w-full object-cover"
            type="image"
            style={isHavePosition ? { objectPosition: "50% 90%" } : {}}
          />
        )}
      </div>
    </div>
  );
}

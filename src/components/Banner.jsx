// full width image
export default function Banner({ img }) {
  return (
    <div className="w-full py-[20px] sm:py-[30px]">
      <div className="h-[350px] sm:h-[450] md:h-[550px] w-[100%] bg-amber-950">
        <img src={img} alt={img} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

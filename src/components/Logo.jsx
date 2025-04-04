// import logo from "/logo/logo3.png";
// import logo2 from "/logo/logo5.png";
// import logo3 from "/logo/logo4.png";
import logo4 from "/logo/logo6.png";
import logo5 from "/logo/logo7.png";
function Logo() {
  return (
    <div className="w-full h-full">
      <img src={logo5} alt={logo5} className="w-full h-full" />
    </div>
  );
}

function LogoLayout() {
  return (
    <div className="w-full h-full">
      <img src={logo4} alt={logo4} className="w-full h-full" />
    </div>
  );
}

function LogoTopBar() {
  return (
    <div className="w-full h-full">
      <img src={logo4} alt={logo4} className="w-full h-full" />
    </div>
  );
}

export { Logo, LogoLayout, LogoTopBar };

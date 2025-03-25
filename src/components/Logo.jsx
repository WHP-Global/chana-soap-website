import logo from "/logo/logo3.png";
import logo2 from "/logo/logo5.png";
import logo3 from "/logo/logo4.png";
function Logo() {
  return (
    <div className="w-full h-full">
      <img src={logo} alt={logo} className="w-full h-full" />
    </div>
  );
}

function LogoLayout() {
  return (
    <div className="w-full h-full">
      <img src={logo2} alt={logo2} className="w-full h-full" />
    </div>
  );
}

function LogoTopBar() {
  return (
    <div className="w-full h-full">
      <img src={logo3} alt={logo3} className="w-full h-full" />
    </div>
  );
}

export { Logo, LogoLayout, LogoTopBar };

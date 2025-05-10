function Logo({ logo }) {
  return (
    <div className="w-full h-full">
      <img src={logo} alt={logo} className="w-full h-full" />
    </div>
  );
}

function LogoLayout({ logo }) {
  return (
    <div className="w-full h-full">
      <img src={logo} alt={logo} className="w-full h-full" />
    </div>
  );
}

function LogoTopBar({ logo }) {
  return (
    <div className="w-full h-full">
      <img src={logo} alt={logo} className="w-full h-full" />
    </div>
  );
}

export { Logo, LogoLayout, LogoTopBar };

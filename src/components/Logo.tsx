import logoIcon from "../assets/icons/logo.svg";

function Logo() {
  return (
    <h1 className="logo">
      <img src={logoIcon} alt="Logo" className="logo__icon" />
      <span className="logo__text">ilytracer</span>
    </h1>
  );
}

export default Logo;

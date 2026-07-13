import logoIcon from "../assets/icons/logo.svg";

function Logo() {
  return (
    <h2 className="logo">
      <img src={logoIcon} alt="Logo" className="logo__icon" />
      <span className="logo__text">ilytracer</span>
    </h2>
  );
}

export default Logo;

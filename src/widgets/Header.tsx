import { Link } from "react-router-dom";

import Logo from "@/components/Logo";
import Avatar from "@/components/Avatar";

import homeIcon from "@/assets/icons/home.svg";

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Hosted services" },
  { to: "/portfolio", label: "Portfolio" },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo__link">
            <Logo />
          </Link>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link home-link">
                  <img src={homeIcon} alt="Home" className="home-icon" />
                </Link>
              </li>

              {navLinks.map((link) => (
                <li key={link.to} className="nav__item">
                  <Link to={link.to} className="nav__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__cta">
            <Link to="/login">
              <Avatar />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { NavLink } from "../types/NavLink";

import homeIcon from "../../app/assets/icons/home.svg";

interface NavProps {
  links: NavLink[];
}

function Nav({ links }: NavProps) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link nav__link--home">
            <img src={homeIcon} alt="Home Icon" />
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.to} className="nav__item">
            <Link to={link.to} className="nav__link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

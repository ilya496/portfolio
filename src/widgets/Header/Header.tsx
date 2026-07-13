import React from "react";
import { Link } from "react-router-dom";

import Container from "@/components/Container/Container";
import Logo from "@/components/Logo";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar";

// Assets
import homeIcon from "@/assets/icons/home.svg";

// Styles
import styles from "./Header.module.scss";

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          {/* Logo Area */}
          <Link to="/" className={styles.logoLink}>
            <Logo />
          </Link>

          {/* Central Pill Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/" className={`${styles.navLink} ${styles.homeLink}`}>
                  <img src={homeIcon} alt="Home" className={styles.homeIcon} />
                </Link>
              </li>

              {navLinks.map((link) => (
                <li key={link.to} className={styles.navItem}>
                  <Link to={link.to} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call to Action Area */}
          <div className={styles.cta}>
            <Link to="/hire" tabIndex={-1}>
              <Button variant="primary">Hire me</Button>
            </Link>
            <Avatar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

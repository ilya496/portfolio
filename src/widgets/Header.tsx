import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Nav from "../shared/ui/Nav";
import Logo from "../shared/ui/Logo";
import Button from "../shared/ui/Button";
import Avatar from "../shared/ui/Avatar";
import Container from "../shared/ui/Container";

import { NavLink } from "../shared/types/NavLink";

function Header() {
  const { t } = useTranslation();

  const navLinks: NavLink[] = [
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <>
      <header className="header">
        <Container>
          <Link to="/">
            <Logo />
          </Link>
          <Nav links={navLinks} />
          <div className="cta">
            <Link to="/hire">
              <Button>Hire me</Button>
            </Link>
            <Avatar />
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;

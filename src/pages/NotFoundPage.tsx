import { Link, useLocation } from "react-router-dom";

import Button from "../shared/ui/Button";
import StyledCode from "../shared/ui/StyledCode";

function NotFoundPage() {
  const location = useLocation();

  return (
    <section className="section not-found">
      <div className="container not-found__container">
        <h4 className="section__subtitle">Page not found</h4>
        <p className="section__text">
          Sorry, the page you are looking for could not be found.{" "}
          <StyledCode>{location.pathname}</StyledCode>
        </p>
        <Link to="/" className="section__link">
          <Button variant="filled">Back to home</Button>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;

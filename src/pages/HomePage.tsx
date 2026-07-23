import Button from "@/components/Button";

import starIcon from "@/assets/icons/star.svg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="section hero">
      <div className="hero__grid"></div>
      <div className="container hero__container">
        <img
          src={starIcon}
          className="hero__star hero__star--top-right"
          alt="star icon"
          aria-hidden="true"
        />
        <img
          src={starIcon}
          className="hero__star hero__star--bottom-left"
          alt="star icon"
          aria-hidden="true"
        />

        <div className="hero__content">
          <h1 className="hero__title">I design and build clean websites</h1>
          <p className="hero__text">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>
          <Link to="/services" tabIndex={-1}>
            <Button>Check out my services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

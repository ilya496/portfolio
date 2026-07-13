import Button from "@/components/Button/Button";

import starIcon from "@/assets/icons/star.svg";

function HeroSection() {
  return (
    <section className="section hero">
      <div className="container hero__container">
        <div className="hero__grid"></div>
        <div className="hero__content">
          <img src={starIcon} className="hero__star" />
          <h1 className="hero__title">I design and build clean websites</h1>
          <p className="hero__text">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>
          <Button>Hire me</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import Section from "../components/Section";
import HeroSection from "../widgets/Hero/Hero";

function HomePage() {
  return (
    <main className="main">
      <HeroSection />
      <Section title="About Me">
        <p className="section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          molestie nunc. Nulla facilisi. Nullam nec dictum purus. Nulla
          facilisi. Nullam nec dictum purus. Nulla facilisi. Nullam nec dictum
          purus. Nulla facilisi. Nullam nec dictum purus. Nulla facilisi. Nullam
          nec dictum purus.
        </p>
      </Section>
    </main>
  );
}

export default HomePage;

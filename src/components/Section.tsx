import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  title?: string | ReactNode;
  children?: ReactNode;
  className?: string;
}

function Section(props: SectionProps) {
  const { title, children, className } = props;

  const classNames = `section${className ? " " + className : ""}`;

  return (
    <section className={classNames}>
      <Container>
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </Container>
    </section>
  );
}

export default Section;

import React from "react";
import { Project } from "@/types";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import styles from "./ProjectGrid.module.scss";

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <section className={styles.sectionSpacing}>
      <Container cleanGridBackground gridCols={3}>
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            A collection of production applications built with speed and
            accessibility in mind.
          </p>
        </div>

        <div className={styles.responsiveGrid}>
          {projects.map((project) => (
            <Card key={project.id}>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className={styles.img}
                />
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.tagList}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

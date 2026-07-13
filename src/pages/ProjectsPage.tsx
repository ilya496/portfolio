import Section from "../components/Section";

function ProjectsPage() {
  return (
    <main className="main">
      <Section title="Projects" className="projects">
        <p>Open my media services:</p>
        <ul>
          <li>
            <a
              href="https://jellyfin.ilytracer.com"
              target="_blank"
              rel="noreferrer"
            >
              Jellyfin
            </a>
          </li>
          <li>
            <a
              href="https://nas.ilytracer.com"
              target="_blank"
              rel="noreferrer"
            >
              NAS
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}

export default ProjectsPage;

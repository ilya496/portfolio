function Sidebar(): JSX.Element {
  const styles: { [k: string]: React.CSSProperties } = {
    container: {
      width: 240,
      height: "100vh",
      background: "#0f172a",
      color: "#e6eef8",
      padding: "16px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    header: {
      fontSize: "18px",
      fontWeight: 600,
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      marginTop: "8px",
    },
    link: {
      padding: "8px 10px",
      borderRadius: 6,
      color: "#e6eef8",
      textDecoration: "none",
      background: "transparent",
      cursor: "pointer",
    },
  };

  const items = ["Home", "About", "Projects", "Contact"];

  return (
    <aside style={styles.container}>
      <div style={styles.header}>My Portfolio</div>
      <nav style={styles.nav}>
        {items.map((it) => (
          <a key={it} style={styles.link} href={`#${it.toLowerCase()}`}>
            {it}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

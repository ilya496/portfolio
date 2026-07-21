import styles from "./Loader.module.scss";

interface LoaderProps {
  overlay?: boolean;
}

function Loader({ overlay = true }: LoaderProps) {
  return (
    <div className={overlay ? styles.overlay : styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}

export default Loader;

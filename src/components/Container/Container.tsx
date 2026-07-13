import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  cleanGridBackground?: boolean;
  gridCols?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  cleanGridBackground = false,
  gridCols = 3,
}) => {
  return (
    <div className={styles.outerWrapper}>
      {cleanGridBackground && (
        <div
          className={styles.gridLayer}
          style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
        >
          {Array.from({ length: gridCols * 2 }).map((_, i) => (
            <div key={i} className={styles.gridCell} />
          ))}
        </div>
      )}
      <div className={styles.innerContent}>{children}</div>
    </div>
  );
};

export default Container;

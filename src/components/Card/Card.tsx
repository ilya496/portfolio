import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  interactive = true,
  className = "",
}) => {
  return (
    <div
      className={`${styles.card} ${interactive ? styles.interactive : ""} ${className}`}
    >
      <div className={styles.glowEffect} />
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;

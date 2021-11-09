import React from "react";
import styles from "../styles/Home.module.css";

interface CardProps {
  title: string;
  list: Array<string>;
}

const Card = ({ title, list }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <ul>
        {list.map((item, idx) => (
          <li key={`${idx}-${title}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

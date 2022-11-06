import React from "react";
import styles from "../styles/Home.module.css";
import List from "./List";

interface CardProps {
  title: string;
  list: Array<string>;
}

const Card = ({ title, list }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <List
        items={list}
        renderChild={(item) => item}
        isSecondaryBullet
      />
    </div>
  );
};

export default Card;

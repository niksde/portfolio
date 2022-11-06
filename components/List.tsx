import React from "react";
import styles from "../styles/Home.module.css";

interface ListProps {
  items: Array<any>;
  renderChild: (item: any) => React.ReactNode;
  isSecondaryBullet?: boolean;
}

export default function List({
  items,
  renderChild,
  isSecondaryBullet = false,
}: ListProps) {
  const margin = isSecondaryBullet
    ? styles.secondaryBullet
    : styles.primaryBullet;
  return (
    <div className={styles.listWrapper}>
      {items.map((item, idx) => (
        <div className={styles.listItemWrapper} key={`${idx}-position`}>
          <div className={[styles.listBullet, margin].join(" ")}></div>
          <div className={styles.listItem}>{renderChild(item)}</div>
        </div>
      ))}
    </div>
  );
}

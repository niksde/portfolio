import React, { ReactChild } from "react";
import styles from "../styles/Home.module.css";

type PositionType = {
  position: String;
  duration: String;
  Description?: String | ReactChild | JSX.Element[];
};

interface ExperienceCardProps {
  job: String;
  positionList: Array<PositionType>;
  organisation: String;
}
const ExperienceCard = ({
  job,
  positionList,
  organisation,
}: ExperienceCardProps) => {
  return (
    <div className={styles.expSection}>
      <h3>
        {job} @ {organisation}
      </h3>
      <ul>
        {positionList.map((item, idx) => (
          <li key={`${idx}-position`}>
            <h3>{item.position}</h3>
            <p>{item.duration}</p>
            {item?.Description}
            {positionList.length - 1 !== idx && (
              <div className={styles.verticalLine}></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

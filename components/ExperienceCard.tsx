import React, { ReactChild } from "react";
import styles from "../styles/Home.module.css";
import List from "./List";

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
      <List
        items={positionList}
        renderChild={(item) => (
          <>
            <h3>{item.position}</h3>
            <p>{item.duration}</p>
            {item?.Description}
          </>
        )}
      />
    </div>
  );
};

export default ExperienceCard;

import React, { FC } from "react";
import styles from "../../styles/Card.module.scss";

interface Props {
  title?: string;
  id?: number;
  img?: string;
  subtext?: string;
}

const Card: FC<Props> = ({ title, id, img, subtext }) => {
  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <p>{subtext}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default Card;

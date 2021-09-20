import React, { FC } from "react";
import styles from "@/styles/card.module.scss";

interface Props {
  title?: string;
  id?: number;
  img?: string;
  subtext?: string;
}

export const Card: FC<Props> = ({ title, id, img, subtext }): JSX.Element => {
  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <p>{subtext}</p>
      <img src={img} alt="" />
    </div>
  );
};

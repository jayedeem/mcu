import React, { FC, useState } from 'react';
import styles from '@/styles/card.module.scss';
import Image from 'next/image';
import image from 'next/image';

interface Props {
  title: string;
  id: number;
  img: string;
  subtext: string;
}

export const Card: FC<Props> = ({ title, img, subtext, id }) => {
  const [images, setImages] = useState(img);

  return (
    <div className={styles.card}>
      <div className={styles.arm}></div>
      <div className={styles.card__container}>
        <h1 className={styles.heading}>{title}</h1>
        <h3>Number {id}</h3>
        {/* Need to fix for null values */}
        {/* <Image src={images} layout="fill" /> : <p>no image</p>} */}
        <img src={images} alt={subtext} />
        <p>{subtext}</p>
      </div>
    </div>
  );
};

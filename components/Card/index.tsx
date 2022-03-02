import React, { FC } from 'react';
import styles from '@/styles/Card.module.scss';
import { Overview } from '@/components/Card/Overview';
import Image from 'next/image';

interface Props {
  title?: string;
  id?: number;
  img?: string;
  overview?: string;
}

//control how many words you want to show before cutting off text and showing '... more' button
export const Card: FC<Props> = ({ title, img = '', overview }): JSX.Element => {
  return (
    <div className={styles.card}>
      <h1 className={styles.card__heading}>{title}</h1>
      <img src={img} alt={`${title} cover image`} className={styles.card__img} />
      <Overview defaultWordLimit={22} overview={overview} />
    </div>
  );
};

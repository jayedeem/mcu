import React, { FC, useState } from 'react';
import styles from '@/styles/Overview.module.scss';

interface Props {
  overview?: string;
  defaultWordLimit: number;
}

export const Overview: FC<Props> = ({ overview = '', defaultWordLimit }): JSX.Element => {
  const [currentWordLimit, setCurrentWordLimit] = useState(defaultWordLimit);
  const wordsInOverview = overview.split(' ');
  const amountOfWords = wordsInOverview.length;
  const fullTextLength = overview?.length;

  function renderCorrectSpan(
    amountOfWords: number,
    currentLimit: number,
    defaultWordLimit: number,
  ) {
    if (amountOfWords > defaultWordLimit) {
      return getTypeOfSpan(currentLimit, defaultWordLimit);
    }
  }

  function getTypeOfSpan(currentLimit: number, defaultWordLimit: number) {
    return currentLimit === defaultWordLimit ? (
      <span className={styles.overview__more} onClick={() => setCurrentWordLimit(fullTextLength)}>
        {' '}
        ...more
      </span>
    ) : (
      <span className={styles.overview__more} onClick={() => setCurrentWordLimit(defaultWordLimit)}>
        {' '}
        less
      </span>
    );
  }

  return (
    <p className={styles.container}>
      {wordsInOverview.filter((ele, wordCount) => wordCount < currentWordLimit).join(' ')}
      {renderCorrectSpan(amountOfWords, currentWordLimit, defaultWordLimit)}
    </p>
  );
};

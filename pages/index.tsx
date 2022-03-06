import { Card } from '@/components/Card';
import { MovieDetail } from '@/utils/MovieDetails';
import { moviePhaseTypes, moviePhaseValues } from '@/utils/MoviePhases';

import axios from 'axios';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import styles from '@/styles/main.module.scss';
import { NavBar } from '@/components/Navbar';
import { MobileNav } from '@/components/MobileNav';

interface IGet {
  data: MovieDetail[];
}

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const fetchAPI = useCallback(async () => {
    try {
      const { data } = await axios.get<IGet>('https://mcuapi.herokuapp.com/api/v1/movies');

      setMovies(data.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e);
    }
  }, []);

  const [phase, setPhase] = useState<moviePhaseTypes>(moviePhaseValues.showAll);
  function filterFun(movie: MovieDetail): boolean {
    if (phase === moviePhaseValues.showAll) return true;
    return movie?.phase === phase;
  }
  function handleClick(phase: moviePhaseTypes) {
    setPhase(phase);
  }
  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <>
      <NavBar onClick={handleClick} />
      <MobileNav onClick={handleClick} />
      <div className={styles.main_container}>
        {!isLoading && !error
          ? movies.filter(filterFun).map((movie) => {
            return movie?.title && movie.overview && movie?.cover_url ? (
              <Card
                key={movie?.id}
                title={movie?.title}
                overview={movie?.overview}
                img={movie?.cover_url ? movie?.cover_url : ''}
              />
            ) : (
              ''
            );
          })
          : 'LOADING DATA'}
      </div>
    </>
  );
};

export default Home;

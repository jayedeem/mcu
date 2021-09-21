import { Card } from '@/components/Card';
import { MovieDetail } from '@/utils/MovieDetails';
import type { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';

interface Props {
  data: MovieDetail[];
}

const Home: NextPage<Props> = ({ data }) => {
  const [movies, setMovies] = useState<MovieDetail[]>(data);
  // console.log(movies.sort((a, b) => a.id - b.id))
  return (
    <div>
      {movies
        ? movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                subtext={movie.overview}
                img={movie.cover_url!}
                id={movie.id}
              />
            );
          })
        : 'LOADING'}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://mcuapi.herokuapp.com/api/v1/movies`);
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;

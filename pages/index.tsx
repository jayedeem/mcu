import { Card } from "@/components/Card";
import { MovieDetail } from "@/utils/MovieDetails";
import axios from "axios";
import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchAPI = useCallback(async () => {
    const { data } = await axios.get(
      "https://mcuapi.herokuapp.com/api/v1/movies"
    );
    setMovies(data.data);
    setIsLoading(false);
  }, []);
  console.log(movies);
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {!isLoading ? movies.map((movie) => {
        return (
          <Card
            key={movie.id}
            title={movie.title}
            subtext={movie.overview}
            img={movie.cover_url}
          />
        );
      }) : "LOADING DATA"}
    </div>
  );
};

export default Home;

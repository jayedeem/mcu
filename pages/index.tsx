import { Card } from "@/components/Card";
import { MovieDetail } from "@/utils/MovieDetails";
import axios from "axios";
import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
interface IGet {
  data: MovieDetail[];
}
const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchAPI = useCallback(async () => {
    try {
      const { data } = await axios.get<IGet>(
        "https://mcuapi.herokuapp.com/api/v1/movies"
      );

      setMovies(data.data);
      setIsLoading(false);
    } catch (e) {
      // console.log(e);
    }
  }, []);
  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <div>
      {!isLoading
        ? movies.map((movie) => {
            return movie.title && movie.overview && movie.cover_url ? (
              <Card
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                img={movie.cover_url ? movie.cover_url : ""}
              />
            ) : (
              ""
            );
          })
        : "LOADING DATA"}
    </div>
  );
};

export default Home;

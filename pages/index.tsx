import { Card } from "@/components/Card";
import { MovieDetail } from "@/utils/MovieDetails";
import axios from "axios";
import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import styles from "@/styles/main.module.scss"
import { NavBar } from "@/components/Navbar";
interface IGet {
  data: MovieDetail[];
}


const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const fetchAPI = useCallback(async () => {
    try {
      const { data } = await axios.get<IGet>(
        "https://mcuapi.herokuapp.com/api/v1/movies"
      );

      setMovies(data.data);
      setIsLoading(false);
    } catch (e) {
      setError("error");
    }
  }, []);
  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <>
      <NavBar />

      <div className={styles.main_container}>

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
    </>
  );
};

export default Home;
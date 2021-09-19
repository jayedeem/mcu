import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/Home.module.css";
import { MovieDetail } from "../utils/MovieDetails";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchAPI = useCallback(async () => {
    const { data } = await axios.get('https://mcuapi.herokuapp.com/api/v1/movies')
    setMovies(data.data)
    setIsLoading(false)
  }, [])
  console.log(movies)
  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className={styles.container}>
      {movies.map(movie => {
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      })}
      {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
    </div>
  );
};

export default Home;

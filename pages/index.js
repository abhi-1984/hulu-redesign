import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import React from "react";

import ContentView from "../components/ContentView";
import Header from "../components/Header";
import MovieDetailView from "../components/MovieDetailView";
import Nav from "../components/Nav";
import requests from "../lib/requests";
import { usePalette } from "react-palette";
import { BASE_URL } from "../lib/data";
import { motion } from "framer-motion";
import { dialogState } from "../atoms/movieAtom";
import { useRecoilState } from "recoil";

export default function Home({ movies }) {
  console.log("movie is ", movies[0]);
  const [showDialog, setShowDialog] = useRecoilState(dialogState);

  const { data, loading, error } = usePalette(
    `${BASE_URL}${
      movies.results[0].backdrop_path || movies.results[0].poster_path
    }` || `${BASE_URL}${movies.results[0].poster_path}`
  );

  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showDialog ? 0.5 : 1 }}
        transition={{ duration: 0.3, easings: "easeInOut" }}
      >
        <ContentView movies={movies.results} />
      </motion.div>
      <MovieDetailView />
      <div className="absolute inset-0 opacity-70 -z-10">
        <div
          className=" w-full h-full transition-all duration-300"
          style={{
            zIndex: -1,
            background: `linear-gradient(to bottom right,  ${data.darkMuted} 5%, #000 50%)`,
          }}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log(
    "request url is ",
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  const result = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  const data = await result.json();

  return {
    props: {
      movies: data,
    },
  };
}

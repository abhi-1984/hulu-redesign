import Image from "next/image";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { dialogState, movieIdState, movieState } from "../atoms/movieAtom";
import { useEffect } from "react";

function MovieView({ movie }) {
  console.log("movie is ", movie.name);
  const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);
  const [showDialog, setShowDialog] = useRecoilState(dialogState);
  const [movieID, setMovieID] = useRecoilState(movieIdState);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const itemVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const openDialog = async (movieData) => {
    setMovieID(movieData.id);
    setSelectedMovie(movieData);
    setShowDialog(true);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariant}
      className="relative group cursor-pointer overflow-hidden bg-white/10 transform hover:scale-[0.98] transition-all rounded-lg"
      onClick={() => openDialog(movie)}
    >
      <Image
        alt={movie.name ? movie.name : movie.title}
        layout="responsive"
        height={1080}
        width={1920}
        className="rounded-lg overflow-hidden"
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <p className="truncate transform transition-all duration-200 translate-y-10 group-hover:translate-y-0">
          {movie.name ? movie.name : movie.title}
        </p>
      </div>
    </motion.div>
  );
}

export default MovieView;

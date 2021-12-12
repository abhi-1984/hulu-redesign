import MovieView from "./MovieView";
import { AnimatePresence, motion } from "framer-motion";

const listVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

function ContentView({ movies }) {
  console.log("movies are ", movies);

  return (
    <section className="px-6 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={listVariant}
        className="wrapper sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex gap-8"
      >
        {movies &&
          movies.map((movie) => {
            return <MovieView movie={movie} key={movie.id} />;
          })}
      </motion.div>
    </section>
  );
}

export default ContentView;

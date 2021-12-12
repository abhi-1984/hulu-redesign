import Image from "next/image";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { dialogState, movieIdState, movieState } from "../atoms/movieAtom";
import { BASE_URL } from "../lib/data";

function SimilarMoviesView({ id }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [movie, setMovie] = useRecoilState(movieState);
  const [movieID, setMovieID] = useRecoilState(movieIdState);
  const [showDialog, setShowDialog] = useRecoilState(dialogState);

  const openDialog = async (movie) => {
    setMovieID(movie.id);
    setMovie(movie);
    setShowDialog(true);
  };

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=2524e573cebb08e0f16ad2a6bcd5992e&language=en-US`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log("similar movies are ", data);

  return (
    <div>
      {data && data.results && (
        <p className="text-3xl font-black">More like this</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 empty:hidden">
        {data?.results?.slice(0, 6).map((movie) => {
          return (
            <div
              onClick={() => openDialog(movie)}
              className="cursor-pointer"
              key={movie.id}
            >
              <Image
                alt={movie.name ? movie.name : movie.title}
                layout="responsive"
                height={1080}
                width={1920}
                className="rounded-lg bg-white bg-opacity-10"
                src={
                  `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                  `${BASE_URL}${result.poster_path}`
                }
              />
              <p className="mt-3">{movie.name ? movie.name : movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimilarMoviesView;

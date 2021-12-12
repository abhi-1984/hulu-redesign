import { ClockIcon, ThumbUpIcon } from "@heroicons/react/solid";

function MovieInfoView({ movie }) {
  return (
    <>
      <div className=" pt-4 flex items-center gap-4">
        <div className="flex items-center space-x-1 text-accent">
          <ThumbUpIcon className="w-4" />
          <p className="font-bold">{movie.vote_average} Rating</p>
        </div>

        <div className="bg-opacity-40 bg-white w-1.5 h-1.5 rounded-full" />

        <div className="flex items-center space-x-1 opacity-70">
          <ClockIcon className="w-4" />
          <p>{movie.first_air_date || movie.release_date}</p>
        </div>
      </div>

      <p className="opacity-70 md:text-lg">{movie.overview}</p>
    </>
  );
}

export default MovieInfoView;

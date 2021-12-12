import useSWR from "swr";

function GenresView({ movieID }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=2524e573cebb08e0f16ad2a6bcd5992e&language=en-US`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log("genres are ", data);

  return (
    <>
      <div className="flex items-center gap-2  empty:hidden">
        {data?.genres?.map((genre) => {
          return (
            <p
              className="px-3 py-1.5 bg-white bg-opacity-10 rounded-full text-[11px] uppercase font-semibold tracking-widest"
              key={genre.id}
            >
              {genre.name}
            </p>
          );
        })}
      </div>
      {data && data.genres && (
        <div className="w-full h-px bg-white bg-opacity-10" />
      )}
    </>
  );
}

export default GenresView;

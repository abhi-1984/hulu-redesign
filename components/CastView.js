import Image from "next/image";
import useSWR from "swr";
import { BASE_URL } from "../lib/data";

function CastView({ movieID }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=2524e573cebb08e0f16ad2a6bcd5992e&language=en-US`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log("cast is ", data);

  return (
    <>
      {data && data.cast && (
        <div className="relative">
          <div className="flex whitespace-nowrap space-x-8 overflow-x-auto overflow-y-hidden scrollbar-hide ">
            {data.cast.map((person) => {
              return (
                <div
                  className="flex flex-col items-center justify-center space-y-4 w-[160px]  empty:hidden"
                  key={person.cast_id}
                >
                  <div className="w-[120px] h-[120px] bg-white bg-opacity-10 rounded-full overflow-hidden">
                    {person.profile_path && (
                      <Image
                        alt={""}
                        layout="responsive"
                        height={1000}
                        width={1000}
                        className="object-cover rounded-full "
                        src={`${BASE_URL}${person.profile_path}`}
                      />
                    )}
                  </div>
                  <p className="truncate w-[160px] text-center">
                    {person.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#121212] h-full w-2/12" />
        </div>
      )}

      {data && data.cast && (
        <div className="w-full h-px bg-white bg-opacity-10" />
      )}
    </>
  );
}

export default CastView;

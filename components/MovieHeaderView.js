import { Dialog } from "@headlessui/react";
import { BookmarkIcon, PlayIcon, XCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { dialogState } from "../atoms/movieAtom";
import { BASE_URL } from "../lib/data";

function MovieHeaderView({ movie }) {
  const [showDialog, setShowDialog] = useRecoilState(dialogState);
  return (
    <>
      <button
        onClick={() => setShowDialog(false)}
        className="absolute right-6 top-6 w-10 h-10 z-20 cursor-pointer focus:outline-none"
      >
        <XCircleIcon className="w-full h-full opacity-80" />
      </button>
      <div className="aspect-video max-w-full relative">
        <Image
          alt={movie.name || movie.title}
          layout="responsive"
          width={1920}
          height={1080}
          src={
            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t  from-[#121212] via-[#121212]/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-12 gap-8">
          <Dialog.Title className="text-3xl md:text-5xl lg:text-6xl font-black">
            {movie.name || movie.title}
          </Dialog.Title>
          <div className="flex gap-4 items-center">
            <button className="flex items-center justify-center gap-1 px-8 py-2 bg-white text-black rounded-full">
              <PlayIcon className="w-6" />
              <span className="font-bold">Play</span>
            </button>

            <button className="flex items-center justify-center gap-1 px-8 py-2 bg-white text-white bg-opacity-10 rounded-full backdrop-blur-lg">
              <BookmarkIcon className="w-6" />
              <span className="font-bold">Save</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieHeaderView;

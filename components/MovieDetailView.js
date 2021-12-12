import { useRecoilState } from "recoil";
import { dialogState, movieIdState, movieState } from "../atoms/movieAtom";
import { Dialog, Transition } from "@headlessui/react";
import CastView from "./CastView";
import SimilarMoviesView from "./SimilarMoviesView";
import GenresView from "./GenresView";
import MovieInfoView from "./MovieInfoView";
import MovieHeaderView from "./MovieHeaderView";
import { Fragment } from "react";

function MovieDetailView() {
  const [movie, setMovie] = useRecoilState(movieState);
  const [showDialog, setShowDialog] = useRecoilState(dialogState);
  const [movieID, setMovieID] = useRecoilState(movieIdState);

  const OverlayView = () => {
    return (
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed z-10 inset-0 bg-black opacity-60" />
      </Transition.Child>
    );
  };

  return (
    <Transition show={showDialog} as={Fragment}>
      <Dialog
        className="fixed inset-0  p-8 overflow-y-auto flex items-center justify-center flex-wrap"
        onClose={() => setShowDialog(false)}
      >
        <OverlayView />

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95 translate-y-10"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="ease-in duration-300"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-10"
        >
          <section className="max-w-[800px] shadow-xl m-10 w-full mx-auto bg-[#121212] rounded-xl overflow-hidden z-20 relative">
            <MovieHeaderView movie={movie} />
            <article className="px-12 pb-12 space-y-6">
              <MovieInfoView movie={movie} />
              <GenresView movieID={movieID} />

              <CastView movieID={movieID} />

              <SimilarMoviesView id={movieID} />
            </article>
          </section>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default MovieDetailView;

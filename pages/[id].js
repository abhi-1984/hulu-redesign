function MovieDetail({ movie }) {
  console.log("movie details are ", movie);
  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
}

export default MovieDetail;

export async function getServerSideProps(context) {
  console.log("detail page context is ", context);
  const movieID = context.query.id;
  const apiKey = process.env.API_KEY;
  // console.log(
  //   "request url is ",
  //   `https://api.themoviedb.org/3${
  //     requests[genre]?.url || requests.fetchTrending.url
  //   }`
  // );

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`
  );

  const data = await result.json();

  return {
    props: {
      movie: data,
    },
  };
}

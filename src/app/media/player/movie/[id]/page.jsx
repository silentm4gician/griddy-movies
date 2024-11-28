import { getMovieInfo } from "@/api/requests/requests";
import MoviePlayerClient from "@/components/MoviePlayerClient";

const MoviePlayer = async ({ params }) => {
  const movieInfo = await getMovieInfo(params.id);
  const movieURL = `https://vidsrc.xyz/embed/movie?tmdb=${params.id}`;

  return <MoviePlayerClient movieInfo={movieInfo} movieURL={movieURL} />;
};

export default MoviePlayer;
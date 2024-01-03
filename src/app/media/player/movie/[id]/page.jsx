import { getMovieInfo } from "@/api/requests/requests";
import MediaPlayer from "@/components/MediaPlayer";

const MoviePlayer = async ({ params }) => {
  const movieInfo = await getMovieInfo(params.id);
  const movieURL = `https://vidsrc.xyz/embed/movie?tmdb=${params.id}`

  return (
    <div className="text-white h-[100vh]">
      <h1 className="text-xl font-bold text-center mt-4">{movieInfo.title}</h1>
      <div className="flex mt-4 flex-col items-center">
        <p className="text-lg mx-40 mb-8">{movieInfo.overview}</p>
        <MediaPlayer url={movieURL} />
      </div>
    </div>
  );
};

export default MoviePlayer;

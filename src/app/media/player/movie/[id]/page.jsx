import { getMovieInfo } from '@/api/requests/requests';
import MoviePlayerClient from '@/components/MoviePlayerClient';

export async function generateMetadata({ params }) {
  const movieInfo = await getMovieInfo(params.id);

  return {
    title: `${movieInfo.title} - Watch on Griddy Movies`,
    description: movieInfo.overview,
    openGraph: {
      title: `${movieInfo.title} - Watch on Griddy Movies`,
      description: movieInfo.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`,
          width: 1200,
          height: 630,
          alt: movieInfo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${movieInfo.title} - Watch on Griddy Movies`,
      description: movieInfo.overview,
      images: [`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`],
    },
  };
}

const MoviePlayer = async ({ params }) => {
  const movieInfo = await getMovieInfo(params.id);
  const movieURL = `https://vidsrc.xyz/embed/movie?tmdb=${params.id}`;

  return <MoviePlayerClient movieInfo={movieInfo} movieURL={movieURL} />;
};

export default MoviePlayer;

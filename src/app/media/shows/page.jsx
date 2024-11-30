import {
  getTopRatedTvShows,
  getTvGenres,
  getTvShowsByGenre,
} from '@/api/requests/requests';
import MovieGrid from '@/components/MovieGrid';
import CategoryHeader from '@/components/CategoryHeader';
import GenreFilter from '@/components/GenreFilter';

export const metadata = {
  title: 'Watch TV Shows Online Free - Griddy Movies',
  description:
    'Stream your favorite TV shows online for free. Binge-watch series from various genres with no subscription needed.',
  openGraph: {
    title: 'Watch TV Shows Online Free - Griddy Movies',
    description:
      'Stream popular TV series online for free. New episodes added regularly.',
    images: [{ url: '/favIcon.png' }],
  },
};

const ShowsPage = async ({ searchParams }) => {
  const genreId = searchParams.genre;
  const [{ results }, { genres }] = await Promise.all([
    genreId ? getTvShowsByGenre(genreId) : getTopRatedTvShows(),
    getTvGenres(),
  ]);

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary pt-24'>
      <CategoryHeader
        title='TV Shows'
        subtitle="Binge-worthy series that you'll love"
        icon='📺'
      />
      <section className='container mx-auto px-4 py-12'>
        <GenreFilter
          genres={genres}
          selectedGenre={genreId ? parseInt(genreId) : null}
        />
        <MovieGrid media={results} />
      </section>
    </main>
  );
};

export default ShowsPage;

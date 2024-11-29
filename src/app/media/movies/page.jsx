import {
  getTopRatedMovies,
  getMovieGenres,
  getMoviesByGenre,
} from '@/api/requests/requests';
import MovieGrid from '@/components/MovieGrid';
import CategoryHeader from '@/components/CategoryHeader';
import GenreFilter from '@/components/GenreFilter';
import Pagination from '@/components/Pagination';

const MoviesPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const genreId = searchParams.genre;

  const [{ results, total_pages }, { genres }] = await Promise.all([
    genreId ? getMoviesByGenre(genreId, page) : getTopRatedMovies(page),
    getMovieGenres(),
  ]);

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary pt-24'>
      <CategoryHeader
        title='Movies'
        subtitle='Discover the best films of all time'
        icon='🎬'
      />
      <section className='container mx-auto px-4 py-12'>
        <GenreFilter
          genres={genres}
          selectedGenre={genreId ? parseInt(genreId) : null}
        />
        <MovieGrid media={results} />
        <Pagination currentPage={page} totalPages={total_pages} />
      </section>
    </main>
  );
};

export default MoviesPage;

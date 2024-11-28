import { getTrendingMovies } from '@/api/requests/requests';
import HeroSection from '@/components/HeroSection';
import MovieGrid from '@/components/MovieGrid';

const HomePage = async () => {
  const { results } = await getTrendingMovies();

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary'>
      <HeroSection movies={results} />
      <section className='container mx-auto px-4 py-12'>
        <h2 className='gradient-text text-3xl font-bold mb-8'>Trending Now</h2>
        <MovieGrid media={results} />
      </section>
    </main>
  );
};

export default HomePage;

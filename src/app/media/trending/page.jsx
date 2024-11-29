import { getTrending } from '@/api/requests/requests';
import MovieGrid from '@/components/MovieGrid';
import CategoryHeader from '@/components/CategoryHeader';

export const metadata = {
  title: 'Trending Movies & Shows - Griddy Movies',
  description:
    "Discover what's trending right now. Watch the most popular movies and TV shows of the moment on Griddy Movies.",
  openGraph: {
    title: 'Trending Movies & Shows - Griddy Movies',
    description:
      'Watch the hottest movies and TV shows trending right now. Stream for free on Griddy Movies.',
    images: [{ url: 'https://i.ibb.co/m4MLgnS/griddy.jpg' }],
  },
};

const Trending = async () => {
  const { results } = await getTrending();

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary pt-24'>
      <CategoryHeader
        title='Trending'
        subtitle="What everyone's watching right now"
        icon='🔥'
      />
      <section className='container mx-auto px-4 py-12'>
        <MovieGrid media={results} />
      </section>
    </main>
  );
};

export default Trending;

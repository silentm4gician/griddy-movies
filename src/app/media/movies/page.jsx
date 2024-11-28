import { getTopRatedMovies } from "@/api/requests/requests";
import MovieGrid from "@/components/MovieGrid";
import CategoryHeader from "@/components/CategoryHeader";

const MoviesPage = async () => {
  const { results } = await getTopRatedMovies();

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24">
      <CategoryHeader 
        title="Movies" 
        subtitle="Discover the best films of all time"
        icon="🎬"
      />
      <section className="container mx-auto px-4 py-12">
        <MovieGrid media={results} />
      </section>
    </main>
  );
};

export default MoviesPage;
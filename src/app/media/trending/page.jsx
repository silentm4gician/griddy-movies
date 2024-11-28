import { getTrending } from "@/api/requests/requests";
import MovieGrid from "@/components/MovieGrid";
import CategoryHeader from "@/components/CategoryHeader";

const Trending = async () => {
  const { results } = await getTrending();

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24">
      <CategoryHeader 
        title="Trending" 
        subtitle="What everyone's watching right now"
        icon="🔥"
      />
      <section className="container mx-auto px-4 py-12">
        <MovieGrid media={results} />
      </section>
    </main>
  );
};

export default Trending;
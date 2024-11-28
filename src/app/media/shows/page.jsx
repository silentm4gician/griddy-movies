import { getTopRatedTvShows } from "@/api/requests/requests";
import MovieGrid from "@/components/MovieGrid";
import CategoryHeader from "@/components/CategoryHeader";

const ShowsPage = async () => {
  const { results } = await getTopRatedTvShows();

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24">
      <CategoryHeader 
        title="TV Shows" 
        subtitle="Binge-worthy series that you'll love"
        icon="📺"
      />
      <section className="container mx-auto px-4 py-12">
        <MovieGrid media={results} />
      </section>
    </main>
  );
};

export default ShowsPage;
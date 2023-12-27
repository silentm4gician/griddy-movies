import { getTrendingMovies } from "@/api/requests/requests";
import Card from "@/components/Card";

const HomePage = async () => {
  const { page, results } = await getTrendingMovies();

  return (
    <section className="bg-slate-800">
      <div className="cardgrid">
        {results?.map((media) => (
          <Card media={media} key={media.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;

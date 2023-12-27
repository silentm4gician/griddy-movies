import { getTrending } from "@/api/requests/requests";
import Card from "@/components/Card";

const Trending = async () => {
  const { page, results } = await getTrending();

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

export default Trending;

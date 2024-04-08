import { getTrending } from "@/api/requests/requests";
import Card from "@/components/Card";

const Trending = async () => {
  const { page, results } = await getTrending();

  return (
    <section className="bg-slate-800">
      <h2 className="text-white text-2xl italic text-center mb-2">TRENDING</h2>
      <hr className="mx-[20%] mb-2"/>
      <div className="cardgrid">
        {results?.map((media) => (
          <Card media={media} key={media.id} />
        ))}
      </div>
    </section>
  );
};

export default Trending;

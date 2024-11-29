import { getShowInfo } from '@/api/requests/requests';
import ShowPlayerClient from '@/components/ShowPlayerClient';

export async function generateMetadata({ params }) {
  const showInfo = await getShowInfo(params.id);

  return {
    title: `${showInfo.name} - Watch on Griddy Movies`,
    description: showInfo.overview,
    openGraph: {
      title: `${showInfo.name} - Watch on Griddy Movies`,
      description: showInfo.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${showInfo.backdrop_path}`,
          width: 1200,
          height: 630,
          alt: showInfo.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${showInfo.name} - Watch on Griddy Movies`,
      description: showInfo.overview,
      images: [`https://image.tmdb.org/t/p/original${showInfo.backdrop_path}`],
    },
  };
}

const ShowPlayer = async ({ params }) => {
  const showInfo = await getShowInfo(params.id);
  return <ShowPlayerClient showInfo={showInfo} />;
};

export default ShowPlayer;

import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Griddy Movies - Watch Free Movies & Series Online",
  description:
    "Griddy Movies offers a vast collection of movies and series to stream for free. Discover your next favorite show or movie today!",
  keywords:
    "free movies, free series, online streaming, watch movies, watch series, streaming platform, Griddy Movies",
  author: "V4 Code",
  openGraph: {
    title: "Griddy Movies - Watch Free Movies & Series Online",
    description:
      "Stream a wide range of movies and series for free on Griddy Movies. No subscription required. Start watching now!",
    url: "https://griddy-movies.site",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/VNjHtYz/griddy-Logo.png",
        width: 1200,
        height: 630,
        alt: "Griddy Movies - Watch Free Movies & Series Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Griddy Movies - Watch Free Movies & Series Online",
    description:
      "Discover a vast collection of movies and series to watch online for free with Griddy Movies. Start your binge today!",
    image: "https://i.ibb.co/VNjHtYz/griddy-Logo.png",
    // site: "@GriddyMovies",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="griddyLogo.png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="robots" content={metadata.robots} />
      </head>
      <body
        className={`${roboto.className} relative min-h-screen flex flex-col bg-slate-800`}
      >
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

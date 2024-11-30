import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import Script from 'next/script';

const roboto = Roboto({ subsets: ['latin'], weight: ['300'] });

export const metadata = {
  metadataBase: new URL('https://www.griddy-movies.site'),
  title: {
    default: 'Griddy Movies - Watch Free Movies & TV Shows Online',
    template: '%s | Griddy Movies',
  },
  description:
    'Stream thousands of movies and TV shows for free on Griddy Movies. No subscription required. Watch the latest releases and classic favorites instantly.',
  keywords:
    'free movies online, watch movies free, streaming movies, free TV shows, watch series online, HD movies, Griddy Movies, online streaming',
  authors: [{ name: 'V4 Code' }],
  creator: 'V4 Code',
  publisher: 'Griddy Movies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.griddy-movies.site',
  },
  openGraph: {
    title: 'Griddy Movies - Free Movie & TV Show Streaming',
    description:
      'Your ultimate destination for free movie and TV show streaming. Watch in HD quality with no subscription needed.',
    url: 'https://www.griddy-movies.site',
    siteName: 'Griddy Movies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favIcon.png',
        width: 227,
        height: 227,
        alt: 'Griddy Movies - Free Streaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Griddy Movies - Free Movie & TV Show Streaming',
    description:
      'Stream movies and TV shows for free in HD. No subscription, no hassle.',
    images: ['/favIcon.png'],
    creator: '@GriddyMovies',
    site: '@GriddyMovies',
  },
  category: 'entertainment',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favIcon.png' />
        <link
          rel='canonical'
          href='https://www.griddy-movies.site'
          key='canonical'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
        <meta name='theme-color' content='#0f172a' />
        <meta name='msapplication-TileColor' content='#0f172a' />
        <meta name='application-name' content='Griddy Movies' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='apple-mobile-web-app-title' content='Griddy Movies' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body
        className={`${roboto.className} relative min-h-screen flex flex-col bg-slate-800`}
      >
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

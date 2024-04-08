import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Griddy Movies B)",
  description: "watch movies and series for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="griddyLogo.png" />
      </head>
      <body className={`${roboto.className} relative`}>
        <main>
          <Navbar />
          <div className="mt-[20%] sm:mt-10 pt-[65px] bg-slate-800">{children}</div>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}

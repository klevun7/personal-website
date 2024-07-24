import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Cao Personal Website",
  description: "Kevin Cao's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-[1536px] m-auto pl-[50px] pr-[50px] min-h-[100vh] flex flex-col justify-between">
          <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}

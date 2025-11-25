import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "kevin's website",
  description: "Kevin Cao's personal website",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" >
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={inter.className}>
   
            <Navbar />
            {children}
            <Analytics />
            <Footer />

        </body>
      </html>
   
  );
}

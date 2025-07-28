import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Kevin Cao Personal Website",
  description: "Kevin Cao's personal website",
};

export default function RootLayout({ children }) {
  return (
    <Analytics>
      <html lang="en" >
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={inter.className}>
          <div className=" px-10 mx-10 min-h-screen min-w-screen gap-10 flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </Analytics>
  );
}

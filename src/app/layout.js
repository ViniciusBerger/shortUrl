import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortUrl",
  description: "Generate short URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
           href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
           rel="stylesheet"
        />

        
      </head>
       <body 
          className="bg-[linear-gradient(180deg,_#1e1e2f,_#0c0c15)] text-purple-400"
          style={{ fontFamily: 'Orbitron, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

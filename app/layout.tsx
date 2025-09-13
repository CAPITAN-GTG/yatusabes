import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Cossette Titre font
const cossetteTitre = {
  variable: "--font-cossette-titre",
  className: "font-cossette-titre",
};

export const metadata: Metadata = {
  title: "Ya tu Sabes",
  description: "a ya tu sabes original website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-bg`}
        style={{ fontFamily: 'Lexend Deca, sans-serif' }}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

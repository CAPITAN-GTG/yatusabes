import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastProvider from "./components/toast-provider";

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
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Audiowide&family=Monoton&family=Permanent+Marker&family=Creepster&family=Fredoka+One:wght@400;500;600&family=Bungee&family=Righteous&family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased street-bg`}
        style={{ fontFamily: 'Fredoka One, Lexend Deca, sans-serif' }}
      >
        <ToastProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

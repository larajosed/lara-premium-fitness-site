import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Black_Ops_One } from 'next/font/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const blackOps = Black_Ops_One({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-black-ops',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lara Premium Fitness — Entrenador personal online",
  description: "Entrenamientos online personalizados para transformar tu cuerpo y mente",
   openGraph: {
    title: "Lara Premium Fitness",
    description: "Entrenamientos personalizados online por entrenador certificado",
    url: "https://larapremiumfitness.com",
    images: ["/images/og-image.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blackOps.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

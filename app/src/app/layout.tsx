import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const atGambit = localFont({
  src: [
    {
      path: '../../public/fonts/at-gambit/AtGambit-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/at-gambit/AtGambit-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-atgambit'
});

export const metadata: Metadata = {
  title: "Gambit",
  description: "Web3 Chess Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={atGambit.variable}
      >
        {children}
      </body>
    </html>
  );
}

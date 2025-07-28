import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import { CustomWagmiProvider } from '@/components/Wagmi/WagmiProvider';
const atGambit = localFont({
  src: [
    // Black
    {
      path: '../../public/fonts/at-gambit/AtGambit-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/at-gambit/AtGambit-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    // Bold
    {
      path: '../../public/fonts/at-gambit/AtGambit-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/at-gambit/AtGambit-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // Light
    {
      path: '../../public/fonts/at-gambit/AtGambit-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/at-gambit/AtGambit-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    // Regular
    {
      path: '../../public/fonts/at-gambit/AtGambit-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/at-gambit/AtGambit-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    // Semibold
    {
      path: '../../public/fonts/at-gambit/AtGambit-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/at-gambit/AtGambit-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-atgambit',
});

export const metadata: Metadata = {
  title: 'Gambit',
  description: 'Web3 Chess Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={atGambit.variable}
        style={{ backgroundColor: '#302E2B' }}
      >
        <CustomWagmiProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </CustomWagmiProvider>
      </body>
    </html>
  );
}

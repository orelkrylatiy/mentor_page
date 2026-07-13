import './globals.css';
import Script from 'next/script';
import localFont from 'next/font/local';

const spaceGrotesk = localFont({
  src: [
    { path: './fonts/SpaceGrotesk-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/SpaceGrotesk-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/SpaceGrotesk-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Максим Сергеевич — frontend mentor',
  description: 'Менторство по React, TypeScript и веб-разработке: проекты, собеседования и понятный план роста.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/ms-mark.svg" type="image/svg+xml" />
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var stored = localStorage.getItem('theme');
              var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
              document.documentElement.dataset.theme = theme;
            } catch (e) {
              document.documentElement.dataset.theme = 'dark';
            }
          })();
        `}</Script>
      </head>
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}

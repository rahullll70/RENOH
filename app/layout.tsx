import type { Metadata, Viewport } from 'next';

import './globals.css';
import Navbar from '@/components/navbar';
import Cursor from '@/components/ui/CustomCursor';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'RENOH — Precision Brand Identities',
    template: '%s | RENOH',
  },
  description:
    'Boutique studio specializing in high-performance digital ecosystems and radical minimalism.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={` antialiased bg-black text-white selection:bg-white selection:text-black cursor-default`}
      >
        <Cursor />
        <Navbar />
        <main id='main-content'>{children}</main>
      </body>
    </html>
  );
}

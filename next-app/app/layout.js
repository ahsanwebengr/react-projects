import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from '@/redux/providers';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Practice App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <main className='container mx-auto px-8 py-8 min-h-screen'>
              {children}
            </main>
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}

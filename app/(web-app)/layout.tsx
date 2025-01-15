import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GameNation - Your Gaming Destination',
  description: 'Explore the world of gaming with GameNation. Shop for consoles, games, and accessories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#121212] text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

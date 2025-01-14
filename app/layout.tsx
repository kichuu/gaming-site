import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GameTech - Your Gaming Destination',
  description: 'Explore the world of gaming with GameTech. Shop for consoles, games, and accessories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#121212] text-white`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}

export const images = {
  domains: ['localhost'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}


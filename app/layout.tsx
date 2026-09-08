import { Analytics } from '@vercel/analytics/next'
import { Poppins, Inter, Montserrat, Geist_Mono } from 'next/font/google'
import { Preloader } from '@/components/preloader'
import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'SyncByte Solutions | Software & Web Development',
  description: 'SyncByte Solutions is a software and web development company based in Sri Lanka, building scalable web apps, mobile apps, and digital solutions.',
  openGraph: {
    title: 'SyncByte Solutions | Software & Web Development',
    description: 'SyncByte Solutions is a software and web development company based in Sri Lanka, building scalable web apps, mobile apps, and digital solutions.',
    images: ['/syncbyte-mark.png'],
    url: 'https://syncbytesolutions.com',
    siteName: 'SyncByte Solutions',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${montserrat.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Preloader />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

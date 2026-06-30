import type { Metadata } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const title = 'FinalRep — Track every rep. Beat every set.'
const description =
  'The no-fluff workout tracker built for people who train seriously. Log every set, smash every PR, and let FinalRep build your next program around the equipment you actually have.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://finalrep.io'),
  applicationName: 'FinalRep',
  keywords: [
    'workout tracker',
    'gym log',
    'strength training app',
    'PR tracker',
    'workout program generator',
    'FinalRep',
  ],
  openGraph: {
    title,
    description,
    url: 'https://finalrep.io',
    siteName: 'FinalRep',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FinalRep — Track every rep. Beat every set.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo_icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} scroll-smooth`}>
      <body className="antialiased overflow-x-hidden" style={{ background: '#0A0B0D', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}

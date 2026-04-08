import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FinalRep — Track every rep. Beat every set.',
  description: 'The no-fluff workout tracker for serious lifters. Log workouts, crush PRs, and let AI generate your next program.',
  metadataBase: new URL('https://finalrep.io'),
  openGraph: {
    title: 'FinalRep — Track every rep. Beat every set.',
    description: 'The no-fluff workout tracker for serious lifters. Log workouts, crush PRs, and let AI generate your next program.',
    url: 'https://finalrep.io',
    siteName: 'FinalRep',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo_icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

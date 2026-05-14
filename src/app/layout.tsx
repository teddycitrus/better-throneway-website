import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Throneway - Worship through the Arts',
    template: '%s | Throneway',
  },
  description:
    'Catholic creative ministry in Toronto. Worship through the arts - music, praise, and community. A ministry of Jesus Youth Canada.',
  keywords: [
    'Catholic ministry Toronto',
    'Catholic young adults Toronto',
    'praise and worship Toronto',
    'Jesus Youth Canada',
    'Catholic events Mississauga',
    'Throneway Heights',
    'Catholic music',
  ],
  openGraph: {
    title: 'Throneway - Worship through the Arts',
    description:
      'Catholic creative ministry in Toronto. Worship through the arts - music, praise, and community.',
    url: 'https://throneway.com',
    siteName: 'Throneway',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Throneway - Worship through the Arts',
    description: 'Catholic creative ministry in Toronto. Worship through the arts.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Instrument+Sans:wght@400;500;600&family=Inter:wght@700;800;900&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-cream antialiased font-instrument">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

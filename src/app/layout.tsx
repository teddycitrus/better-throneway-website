import type { Metadata } from 'next'
import { cormorant, lora, instrumentSans, nunito } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Throneway — Worship through the Arts',
    template: '%s | Throneway',
  },
  description:
    'Catholic creative ministry in Toronto. Worship through the arts — music, praise, and community. A ministry of Jesus Youth Canada.',
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
    title: 'Throneway — Worship through the Arts',
    description:
      'Catholic creative ministry in Toronto. Worship through the arts — music, praise, and community.',
    url: 'https://throneway.com',
    siteName: 'Throneway',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Throneway — Worship through the Arts',
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
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${instrumentSans.variable} ${nunito.variable}`}
    >
      <body className="bg-void text-cream antialiased font-instrument">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

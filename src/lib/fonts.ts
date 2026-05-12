import { Cormorant_Garamond, Lora, Instrument_Sans, Nunito } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  variable: '--font-instrument',
  display: 'swap',
})

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-nunito',
  display: 'swap',
})

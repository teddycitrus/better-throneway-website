'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { RUNNING_SINGLE } from '@/lib/constants'

const HERO_IMAGES = [
  { src: '/photos/Image.257.JPG', alt: 'Congregation in worship, blue light' },
  { src: '/photos/Image.400.JPG', alt: 'Priest raising the monstrance, starburst of light' },
  { src: '/photos/Image.170.JPG', alt: 'Community worshipping together' },
  { src: '/photos/Image.349.JPG', alt: 'Eucharistic adoration' },
  { src: '/photos/Image.117.JPG', alt: 'Guitarist performing on stage' },
  { src: '/photos/Image.126.JPG', alt: 'Throneway band performing on stage' },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col" style={{ background: 'var(--ink)' }}>

      {/* Masthead metadata bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-28 lg:pt-32"
      >
        <div className="flex items-end justify-between gap-6 pb-5" style={{ borderBottom: '1px solid rgba(245,240,232,0.16)' }}>
          <span className="ed-caption text-cream/55">Worship through the Arts</span>
          <span className="ed-caption text-cream/55 hidden sm:block">Jesus Youth Canada — Toronto</span>
          <span className="ed-caption text-cream/55">Vol. 01</span>
        </div>
      </motion.div>

      {/* Cover spread */}
      <div className="relative z-10 flex-1 max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 h-full items-center">

          {/* Left — wordmark + statement */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: EASE }}
            >
              <Image
                src="/logos/LogoFull.png"
                alt="Throneway — Worship through the Arts"
                width={1456}
                height={816}
                className="w-full max-w-[560px] h-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
              className="ed-display text-white-soft mt-9"
              style={{ fontSize: 'clamp(2.6rem, 5.4vw, 5rem)' }}
            >
              A Catholic creative ministry,{' '}
              <span className="italic" style={{ color: 'var(--gold-light)' }}>building a culture of worship.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="ed-caption text-cream/45 mt-7"
            >
              An Outreach Ministry of Jesus Youth Canada
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 mt-9"
            >
              <Link href="/events" className="btn-ghost" style={{ color: 'var(--cream)' }}>
                <span>Join the Community</span>
              </Link>
              <a
                href={RUNNING_SINGLE.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link text-gold-light"
              >
                Check Out Our Music &rarr;
              </a>
            </motion.div>
          </div>

          {/* Right — feature plate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
            className="lg:col-span-6"
          >
            <div className="relative w-full" style={{ aspectRatio: '4 / 5' }}>
              <div className="absolute inset-0 overflow-hidden" style={{ border: '1px solid rgba(245,240,232,0.18)' }}>
                <AnimatePresence>
                  {HERO_IMAGES.map((img, i) =>
                    i === current ? (
                      <motion.div
                        key={img.src}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: 'easeInOut' }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          priority={i === 0}
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
              </div>

              {/* Figure caption */}
              <div className="absolute -bottom-9 left-0 right-0 flex items-center justify-between gap-4">
                <span className="ed-caption text-cream/45">
                  Fig. {String(current + 1).padStart(2, '0')} — {HERO_IMAGES[current].alt}
                </span>
                <div className="flex items-center gap-1.5">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`View image ${i + 1}`}
                      className="h-px transition-all duration-500"
                      style={{
                        width: i === current ? 22 : 10,
                        background: i === current ? 'var(--gold-light)' : 'rgba(245,240,232,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Foot index rule */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-8"
      >
        <div className="flex items-center justify-between gap-6 pt-5" style={{ borderTop: '1px solid rgba(245,240,232,0.16)' }}>
          <span className="ed-caption text-cream/40">Identity · Music · Gatherings · Spirituality</span>
          <span className="ed-caption text-cream/40">Scroll &darr;</span>
        </div>
      </motion.div>
    </section>
  )
}

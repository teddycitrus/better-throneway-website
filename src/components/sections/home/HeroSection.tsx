'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { RUNNING_SINGLE } from '@/lib/constants'

const HERO_IMAGES = [
  { src: '/photos/Image.170.JPG', alt: 'Community worshipping together' },
  { src: '/photos/Image.400.JPG', alt: 'Priest raising the monstrance — starburst of light' },
  { src: '/photos/Image.349.JPG', alt: 'Eucharistic adoration' },
  { src: '/photos/Image.257.JPG', alt: 'Congregation in worship, blue light' },
  { src: '/photos/Image.117.JPG', alt: 'Guitarist performing on stage' },
  { src: '/photos/Image.126.JPG', alt: 'Throneway band performing on stage' },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % HERO_IMAGES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">

      {/* Slideshow background */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {HERO_IMAGES.map((img, i) =>
            i === current ? (
              <motion.div
                key={img.src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  quality={85}
                  className="object-cover object-center scale-105"
                  sizes="100vw"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Permanent top vignette — keeps navbar text readable at all times */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(31,31,34,0.75) 0%, transparent 100%)' }}
      />

      {/* Main overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(31,31,34,0.2) 0%, rgba(31,31,34,0.22) 40%, rgba(31,31,34,0.62) 70%, rgba(31,31,34,0.98) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(31,31,34,0.45) 100%)',
        }}
      />

      {/* Content — biased upward via pb so it never overlaps the bottom UI */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-[18vh]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Image
            src="/logos/LogoFull.png"
            alt="Throneway — Worship through the Arts"
            width={1456}
            height={816}
            className="w-[78vw] max-w-[920px] h-auto max-h-[40vh] object-contain"
            style={{ filter: 'brightness(0) invert(1) drop-shadow(0 2px 32px rgba(0,0,0,0.9)) drop-shadow(0 0 12px rgba(0,0,0,0.7))' }}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-10 sm:w-16 bg-white/20" />
          <p className="font-instrument text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-white/75 whitespace-nowrap">
            An Outreach Ministry of Jesus Youth Canada
          </p>
          <div className="h-px w-10 sm:w-16 bg-white/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.88 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/events" className="btn-primary min-w-[200px]">
            Join the Community
          </Link>
          <a
            href={RUNNING_SINGLE.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost min-w-[200px]"
          >
            Check Out Our Music &rarr;
          </a>
        </motion.div>
      </div>

      {/* Slideshow dots — viewport-relative so it scales with screen height */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center gap-2"
        style={{ bottom: '11vh' }}
      >
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-6 h-1 bg-white/65'
                : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/45'
            }`}
          />
        ))}
      </motion.div>

      {/* Scroll indicator — pinned near bottom, also viewport-relative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ bottom: '3vh' }}
      >
        <span className="font-instrument text-[9px] tracking-[0.28em] uppercase text-white/30">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  )
}

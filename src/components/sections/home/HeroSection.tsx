'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { RUNNING_SINGLE } from '@/lib/constants'

const HERO_IMAGES = [
  { src: '/photos/Image.257.JPG', alt: 'Congregation in worship, blue light' },
  { src: '/photos/Image.400.JPG', alt: 'Priest raising the monstrance, starburst of light' },
  { src: '/photos/Image.170.JPG', alt: 'Community worshipping together' },
  { src: '/photos/Image.349.JPG', alt: 'Eucharistic adoration' },
  { src: '/photos/Image.117.JPG', alt: 'Guitarist performing on stage' },
  { src: '/photos/Image.126.JPG', alt: 'Throneway band performing on stage' },
]

const REVERENT_EASE = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Content drifts up and fades as you scroll away — a slow cinematic exit.
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % HERO_IMAGES.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [timerKey])

  return (
    <section
      ref={sectionRef}
      className="cine-frame relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden"
    >

      {/* Slideshow background — slow Ken Burns push on the active frame */}
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
                transition={{ duration: 2.4, ease: 'easeInOut' }}
              >
                <div className="kenburns absolute inset-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Atmospheric grade — warm-shadow cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(20,8,30,0.34) 0%, rgba(18,6,28,0.30) 38%, rgba(15,4,24,0.66) 72%, rgba(12,3,20,0.98) 100%)',
        }}
      />
      <div className="cine-vignette" />
      {/* Volumetric shaft of light from the top */}
      <div
        className="god-ray"
        style={{ top: '-12%', left: '12%', width: '46%', height: '90%', opacity: 0.7 }}
      />
      <div className="film-grain" aria-hidden />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 pb-[16vh]"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 0.35, ease: REVERENT_EASE }}
          className="mb-7"
        >
          <Image
            src="/logos/LogoFull.png"
            alt="Throneway — Worship through the Arts"
            width={1456}
            height={816}
            className="w-[80vw] max-w-[940px] h-auto max-h-[42vh] object-contain"
            style={{ filter: 'brightness(0) invert(1) drop-shadow(0 4px 40px rgba(0,0,0,0.95)) drop-shadow(0 0 18px rgba(0,0,0,0.7))' }}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: REVERENT_EASE }}
          className="flex items-center gap-5 mb-9"
        >
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
          <p className="font-instrument text-[9px] sm:text-[10px] tracking-[0.32em] uppercase text-cream/80 whitespace-nowrap">
            An Outreach Ministry of Jesus Youth Canada
          </p>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.25, ease: REVERENT_EASE }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/events" className="btn-primary min-w-[210px]">
            Join the Community
          </Link>
          <a
            href={RUNNING_SINGLE.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost min-w-[210px]"
          >
            Check Out Our Music &rarr;
          </a>
        </motion.div>
      </motion.div>

      {/* Slideshow markers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5"
        style={{ bottom: '10vh' }}
      >
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setTimerKey((k) => k + 1) }}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-700 rounded-full ${
              i === current
                ? 'w-8 h-[3px] bg-gold/80'
                : 'w-[3px] h-[3px] bg-white/30 hover:bg-white/55'
            }`}
          />
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2.0 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
        style={{ bottom: '3vh' }}
      >
        <span className="font-instrument text-[9px] tracking-[0.4em] uppercase text-white/35">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-gold/40 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  )
}

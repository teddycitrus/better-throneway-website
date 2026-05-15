'use client'

import { motion, type Variants } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { SIX_PILLARS } from '@/lib/constants'

// Photos matched to each pillar in order: Prayer, Word of God, Sacraments, Fellowship, Evangelisation, Option for the Poor
const PILLAR_PHOTOS = [
  '/photos/Image.375.JPG',
  '/photos/Image.364.JPG',
  '/photos/Image.400.JPG',
  '/photos/Image.170.JPG',
  '/photos/Image.117.JPG',
  '/photos/Image.189.JPG',
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 38, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function SixPillars() {
  return (
    <section
      className="cine-frame relative py-24 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a1628 0%, #14041f 35%, #1a0732 70%, #14041f 100%)' }}
    >
      {/* Atmospheric god-ray descending from the top center */}
      <div
        className="god-ray"
        style={{ top: '-10%', left: '28%', width: '44%', height: '80%', opacity: 0.8 }}
      />
      <div className="film-grain" aria-hidden />

      <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <Reveal direction="up" className="text-center mb-20 lg:mb-28">
          <p className="cine-kicker cine-kicker--center mb-6">Our Spirituality</p>
          <h2
            className="cine-display text-white-soft"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)' }}
          >
            Our Six Pillars
          </h2>
          <p className="font-cormorant italic text-cream/55 mt-7 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)' }}>
            &ldquo;Over the years, through its constant yearning and seeking, a refreshing spirituality has emerged within the Jesus Youth movement - drawn from the spirit of the Catholic Charismatic Renewal and the rich traditions of the Church.&rdquo;
          </p>
          <p className="font-instrument text-gold/45 text-xs tracking-[0.22em] uppercase mt-4">
            - Jesus Youth International
          </p>
        </Reveal>

        {/* 3×2 grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-14 lg:gap-y-20">
          {SIX_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group flex flex-col items-center text-center gap-6"
            >
              {/* Circle photo with concentric gold ring */}
              <div className="relative flex-shrink-0">
                <div
                  className="absolute -inset-2.5 rounded-full pointer-events-none transition-all duration-500 group-hover:-inset-3.5"
                  style={{ border: '1px solid rgba(222,185,106,0.28)' }}
                />
                <div
                  className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden relative transition-all duration-500 group-hover:scale-[1.04]"
                  style={{ boxShadow: '0 8px 40px rgba(181,55,242,0.18)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PILLAR_PHOTOS[i]}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-40" style={{ background: 'rgba(20,4,31,0.38)' }} />
                </div>
              </div>

              <h3 className="font-cormorant font-semibold text-white-soft text-xl lg:text-2xl leading-tight">
                {pillar.title}
              </h3>

              <p className="font-instrument text-cream/45 text-sm leading-relaxed max-w-[220px]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

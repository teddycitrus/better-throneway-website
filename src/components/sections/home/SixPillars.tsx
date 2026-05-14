'use client'

import { motion, type Variants } from 'framer-motion'
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
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function SixPillars() {
  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0d0018 0%, #1a0030 40%, #1f1f22 100%)' }}
    >
      {/* Atmospheric glow at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{ height: '400px', background: 'radial-gradient(ellipse at 50% 0%, rgba(181,55,242,0.15) 0%, transparent 65%)' }}
      />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.5), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.2), transparent)' }} />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="section-label mb-4">Our Spirituality</p>
          <h2
            className="font-nunito font-extrabold text-white-soft leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Our Six Pillars
          </h2>
          <p className="font-cormorant italic text-cream/55 mt-5 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)' }}>
            &ldquo;Over the years, through its constant yearning and seeking, a refreshing spirituality has emerged within the Jesus Youth movement - drawn from the spirit of the Catholic Charismatic Renewal and the rich traditions of the Church.&rdquo;
          </p>
          <p className="font-instrument text-cream/35 text-xs tracking-[0.12em] uppercase mt-3">
            - Jesus Youth International
          </p>
        </motion.div>

        {/* 3×2 circle grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14">
          {SIX_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center gap-5"
            >
              {/* Circle photo */}
              <div
                className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden relative transition-all duration-300 group-hover:scale-105 flex-shrink-0"
                style={{
                  border: '1.5px solid rgba(181,55,242,0.35)',
                  boxShadow: '0 4px 30px rgba(181,55,242,0.12)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PILLAR_PHOTOS[i]}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(45,1,72,0.22)' }} />
              </div>

              <h3 className="font-nunito font-bold text-white-soft text-lg lg:text-xl leading-tight">
                {pillar.title}
              </h3>

              <p className="font-instrument text-cream/50 text-sm leading-relaxed max-w-[220px]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

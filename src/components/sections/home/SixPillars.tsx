'use client'

import { motion, type Variants } from 'framer-motion'
import { SIX_PILLARS } from '@/lib/constants'

function PillarIcon({ index }: { index: number }) {
  const VIVID = '#B537F2'
  const BASE = '#FAFAF8'

  const icons = [
    // 1. Prayer — praying hands with light rays
    <svg key="prayer" width="44" height="44" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="24" y1="3" x2="24" y2="8" stroke={VIVID} strokeWidth="2.5" />
      <line x1="16" y1="6" x2="18.5" y2="10" stroke={VIVID} strokeWidth="2.5" />
      <line x1="32" y1="6" x2="29.5" y2="10" stroke={VIVID} strokeWidth="2.5" />
      <path d="M21 38 L21 22 C21 20 22 18.5 24 18.5 C26 18.5 27 20 27 22 L27 38" stroke={BASE} strokeWidth="2.2" fill="none" />
      <path d="M17 37 L17 25 C17 22 19 20 21 19.5" stroke={BASE} strokeWidth="2.2" fill="none" />
      <path d="M31 37 L31 25 C31 22 29 20 27 19.5" stroke={BASE} strokeWidth="2.2" fill="none" />
      <path d="M17 37 Q17 42 24 42 Q31 42 31 37" stroke={BASE} strokeWidth="2.2" fill="none" />
    </svg>,

    // 2. Word of God — open Bible with cross
    <svg key="word" width="44" height="44" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10 C6 10 14 8 24 10 C34 8 42 10 42 10 L42 36 C42 36 34 34 24 36 C14 34 6 36 6 36 Z" stroke={BASE} strokeWidth="2.2" />
      <line x1="24" y1="10" x2="24" y2="36" stroke={BASE} strokeWidth="1.5" />
      <line x1="24" y1="14" x2="24" y2="25" stroke={VIVID} strokeWidth="2.5" />
      <line x1="18.5" y1="18" x2="29.5" y2="18" stroke={VIVID} strokeWidth="2.5" />
    </svg>,

    // 3. Sacraments — chalice with host
    <svg key="sacraments" width="44" height="44" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="9" r="4.5" stroke={VIVID} strokeWidth="2.2" />
      <path d="M14 18 L15.5 30 C15.5 34 19.5 37 24 37 C28.5 37 32.5 34 32.5 30 L34 18 Z" stroke={BASE} strokeWidth="2.2" fill="none" />
      <line x1="24" y1="37" x2="24" y2="43" stroke={BASE} strokeWidth="2.2" />
      <line x1="16" y1="43" x2="32" y2="43" stroke={BASE} strokeWidth="2.5" />
    </svg>,

    // 4. Fellowship — people circle
    <svg key="fellowship" width="44" height="44" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="4" stroke={VIVID} strokeWidth="2.2" />
      <circle cx="24" cy="7" r="3.5" stroke={BASE} strokeWidth="2" />
      <path d="M19.5 14.5 C19.5 12 21.5 10.5 24 10.5 C26.5 10.5 28.5 12 28.5 14.5" stroke={BASE} strokeWidth="2" />
      <circle cx="24" cy="41" r="3.5" stroke={BASE} strokeWidth="2" />
      <path d="M19.5 33.5 C19.5 36 21.5 37.5 24 37.5 C26.5 37.5 28.5 36 28.5 33.5" stroke={BASE} strokeWidth="2" />
      <circle cx="7" cy="24" r="3.5" stroke={BASE} strokeWidth="2" />
      <path d="M14.5 19.5 C12 19.5 10.5 21.5 10.5 24 C10.5 26.5 12 28.5 14.5 28.5" stroke={BASE} strokeWidth="2" />
      <circle cx="41" cy="24" r="3.5" stroke={BASE} strokeWidth="2" />
      <path d="M33.5 19.5 C36 19.5 37.5 21.5 37.5 24 C37.5 26.5 36 28.5 33.5 28.5" stroke={BASE} strokeWidth="2" />
    </svg>,

    // 5. Evangelisation — ichthys fish
    <svg key="evan" width="44" height="44" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 24 C8 24 16 12 30 18 C36 20 40 24 40 24 C40 24 36 28 30 30 C16 36 8 24 8 24 Z" stroke={BASE} strokeWidth="2.2" fill="none" />
      <path d="M40 24 L46 18 M40 24 L46 30" stroke={BASE} strokeWidth="2.2" />
      <circle cx="20" cy="22" r="2" fill={VIVID} />
    </svg>,

    // 6. Option for the Poor — heart with hands
    <svg key="poor" width="44" height="44" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 34 L8 18 C5 14 7 8 12 8 C15 8 18 10 24 16 C30 10 33 8 36 8 C41 8 43 14 40 18 Z" stroke={VIVID} strokeWidth="2.2" fill="none" />
      <path d="M10 38 C10 36 12 35 14 35 L22 35" stroke={BASE} strokeWidth="2.2" />
      <path d="M38 38 C38 36 36 35 34 35 L26 35" stroke={BASE} strokeWidth="2.2" />
      <path d="M10 38 L38 38" stroke={BASE} strokeWidth="2.2" />
    </svg>,
  ]

  return <>{icons[index]}</>
}

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
            &ldquo;Over the years, through its constant yearning and seeking, a refreshing spirituality has emerged within the Jesus Youth movement — drawn from the spirit of the Catholic Charismatic Renewal and the rich traditions of the Church.&rdquo;
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
              {/* Dark circle with purple accent */}
              <div
                className="w-36 h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{
                  background: 'rgba(45,1,72,0.35)',
                  border: '1.5px solid rgba(181,55,242,0.3)',
                  boxShadow: '0 4px 30px rgba(181,55,242,0.1)',
                }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <PillarIcon index={i} />
                </div>
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

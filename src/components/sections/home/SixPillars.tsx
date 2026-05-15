'use client'

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

export default function SixPillars() {
  return (
    <section className="relative py-24 lg:py-36" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal direction="up">
          <div className="flex items-end justify-between gap-6 pb-6" style={{ borderBottom: '1px solid rgba(245,240,232,0.18)' }}>
            <div className="flex items-baseline gap-5">
              <span className="ed-index text-cream/20" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>04</span>
              <span className="ed-kicker text-cream/55">Our Spirituality</span>
            </div>
            <span className="ed-caption text-cream/35 hidden sm:block">Foundations</span>
          </div>
        </Reveal>

        {/* Title + epigraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-14 lg:mt-20">
          <Reveal direction="up" delay={0.04} className="lg:col-span-6">
            <h2 className="ed-display text-white-soft" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
              Our Six<br />Pillars
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.08} className="lg:col-span-6 flex flex-col justify-end">
            <p className="font-cormorant italic text-cream/60 leading-[1.5]" style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
              &ldquo;Over the years, through its constant yearning and seeking, a refreshing spirituality has emerged within the Jesus Youth movement - drawn from the spirit of the Catholic Charismatic Renewal and the rich traditions of the Church.&rdquo;
            </p>
            <p className="ed-caption text-cream/35 mt-5">— Jesus Youth International</p>
          </Reveal>
        </div>

        {/* Numbered list */}
        <div className="mt-20 lg:mt-28">
          {SIX_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} direction="up" delay={i * 0.04}>
              <div
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-10 lg:py-12"
                style={{
                  borderTop: '1px solid rgba(245,240,232,0.14)',
                  borderBottom: i === SIX_PILLARS.length - 1 ? '1px solid rgba(245,240,232,0.14)' : 'none',
                }}
              >
                <div className="lg:col-span-1">
                  <span className="ed-index text-cream/25 group-hover:text-gold-light transition-colors duration-500" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-cormorant font-medium text-white-soft" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)' }}>
                    {pillar.title}
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="ed-body text-cream/55 text-base lg:text-lg max-w-md">
                    {pillar.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: '4 / 5', border: '1px solid rgba(245,240,232,0.14)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PILLAR_PHOTOS[i]}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      style={{ filter: 'grayscale(1)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(1)' }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

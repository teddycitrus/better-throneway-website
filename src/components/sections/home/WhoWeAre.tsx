'use client'

import Image from 'next/image'
import Reveal, { ImageReveal } from '@/components/ui/Reveal'

const ASSOCIATIONS = [
  { name: 'Jesus Youth Canada', logo: '/logos/JY Logo.png', href: 'https://jesusyouth.ca' },
  { name: 'Archdiocese of Toronto', logo: '/logos/arch-toronto.png', href: 'https://www.archtoronto.org' },
  { name: 'Vocations Toronto', logo: '/logos/vocations-toronto.png', href: 'https://www.vocationstoronto.ca' },
  { name: 'Office of Catholic Youth', logo: '/logos/ocy.png', href: 'https://ocytoronto.org/' },
]

export default function WhoWeAre() {
  return (
    <section className="relative py-24 lg:py-36" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal direction="up">
          <div className="flex items-end justify-between gap-6 pb-6" style={{ borderBottom: '1px solid rgba(22,21,24,0.2)' }}>
            <div className="flex items-baseline gap-5">
              <span className="ed-index text-ink/25" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>01</span>
              <span className="ed-kicker text-ink/60">Who We Are</span>
            </div>
            <span className="ed-caption text-ink/40 hidden sm:block">Identity</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal direction="up" delay={0.05}>
          <h2
            className="ed-display mt-12 lg:mt-16 max-w-[14ch]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Building a culture of worship{' '}
            <span className="italic" style={{ color: 'var(--purple-vivid)' }}>through the arts.</span>
          </h2>
        </Reveal>

        {/* Body grid — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 mt-14 lg:mt-20">

          {/* Lead paragraph — large serif */}
          <Reveal direction="up" delay={0.08} className="lg:col-span-7 lg:col-start-1">
            <p className="font-cormorant text-ink/85 leading-[1.35]" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)' }}>
              Throneway is a Catholic outreach ministry of Jesus Youth Canada dedicated to building a culture of worship through the arts. Through music, visual art, digital media, and live events, we strive to proclaim the Kingdom of God and build a community united in faith.
            </p>
          </Reveal>

          {/* Feature plate */}
          <Reveal direction="up" delay={0.12} className="lg:col-span-5 lg:row-span-2">
            <figure>
              <ImageReveal className="relative w-full overflow-hidden" >
                <div className="relative w-full" style={{ aspectRatio: '4 / 5' }}>
                  <Image
                    src="/photos/Image.173.JPG"
                    alt="Throneway worship"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </ImageReveal>
              <figcaption className="ed-caption text-ink/45 mt-4">
                Fig. A — Worship gathering, Toronto
              </figcaption>
            </figure>
          </Reveal>

          {/* Secondary paragraph — offset column */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-6 lg:col-start-1">
            <p className="ed-body text-ink/60 text-base lg:text-lg">
              Based in Toronto, we&apos;ve held Catholic conferences, praise and worship concerts, adoration nights, and collaborated with ministries across the Archdiocese - all united by the conviction that beauty leads to God.
            </p>
          </Reveal>
        </div>

        {/* In Association With */}
        <Reveal direction="up" className="mt-20 lg:mt-28">
          <div className="flex items-center gap-5 mb-10">
            <span className="ed-kicker text-ink/55">In Association With</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(22,21,24,0.18)' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {ASSOCIATIONS.map((org, i) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-5 py-10 px-4 text-center"
                style={{
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(22,21,24,0.14)',
                  borderTop: i >= 2 ? '1px solid rgba(22,21,24,0.14)' : 'none',
                }}
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={120}
                  height={64}
                  className="h-12 w-auto object-contain transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 opacity-55"
                  style={{ filter: 'grayscale(1)', mixBlendMode: 'multiply' }}
                />
                <span className="ed-caption text-ink/45 group-hover:text-ink/80 transition-colors">
                  {org.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Published In — press credit */}
        <Reveal direction="up" className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 pt-8" style={{ borderTop: '1px solid rgba(22,21,24,0.18)' }}>
            <span className="ed-kicker text-ink/45">Published In</span>
            <a
              href="https://www.catholicregister.org/find?query=throneway&page=1&archive=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <span
                className="font-cormorant font-semibold tracking-tight text-ink/75 group-hover:text-ink transition-colors"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
              >
                <span style={{ fontSize: '0.58em', verticalAlign: 'super', marginRight: '2px', letterSpacing: '0.12em' }}>THE</span>
                Catholic Register
              </span>
              <span className="ed-caption text-purple-vivid group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

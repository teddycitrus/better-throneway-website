'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const ASSOCIATIONS = [
  { name: 'Jesus Youth Canada', logo: '/logos/JY Logo.png', href: 'https://jesusyouth.ca' },
  { name: 'Archdiocese of Toronto', logo: '/logos/arch-toronto-transparent.png', href: 'https://www.archtoronto.org' },
  { name: 'Vocations Toronto', logo: '/logos/vocations-toronto.png', href: 'https://www.vocationstoronto.ca' },
  { name: 'Office of Catholic Youth', logo: '/logos/ocy_transparent.png', href: 'https://ocytoronto.org/' },
]

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%'])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #120320 0%, #1a0732 50%, #14041f 100%)' }}
    >
      {/* Soft warm light from upper-left, reverent atmosphere */}
      <div
        className="god-ray"
        style={{ top: '-8%', left: '4%', width: '40%', height: '70%', opacity: 0.55 }}
      />
      <div className="film-grain" aria-hidden />

      <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 lg:gap-20 items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-9">
            <Reveal direction="right">
              <p className="cine-kicker mb-6">Who We Are</p>
              <h2
                className="cine-display text-white-soft"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)' }}
              >
                Building a culture of worship{' '}
                <span className="italic" style={{ color: '#DEB96A' }}>through the arts.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <div className="flex flex-col gap-5 max-w-xl">
                <p className="font-lora text-cream/75 leading-relaxed text-base lg:text-lg">
                  Throneway is a Catholic outreach ministry of Jesus Youth Canada dedicated to building a culture of worship through the arts. Through music, visual art, digital media, and live events, we strive to proclaim the Kingdom of God and build a community united in faith.
                </p>
                <p className="font-lora text-cream/50 leading-relaxed text-base lg:text-lg">
                  Based in Toronto, we&apos;ve held Catholic conferences, praise and worship concerts, adoration nights, and collaborated with ministries across the Archdiocese - all united by the conviction that beauty leads to God.
                </p>
              </div>
            </Reveal>

            {/* In Association With */}
            <Reveal direction="up" delay={0.2}>
              <div className="pt-7" style={{ borderTop: '1px solid rgba(222,185,106,0.18)' }}>
                <p className="cine-kicker mb-7">In Association With</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {ASSOCIATIONS.map((org) => (
                    <a
                      key={org.name}
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 py-5 px-3 rounded-sm transition-all duration-300 group"
                      style={{ border: '1px solid rgba(245,240,232,0.08)' }}
                    >
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={56}
                        height={56}
                        className="h-11 w-auto object-contain opacity-45 group-hover:opacity-90 transition-opacity duration-300"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                      <span className="font-instrument text-[10px] tracking-[0.1em] text-center text-cream/40 leading-tight group-hover:text-cream/75 transition-colors">
                        {org.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Published In — Catholic Register */}
            <Reveal direction="up" delay={0.28}>
              <div className="pt-7" style={{ borderTop: '1px solid rgba(222,185,106,0.18)' }}>
                <p className="cine-kicker mb-5">Published In</p>
                <a
                  href="https://www.catholicregister.org/find?query=throneway&page=1&archive=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 group"
                >
                  <span
                    className="font-cormorant font-semibold tracking-tight transition-colors duration-300 text-cream/70 group-hover:text-cream"
                    style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)' }}
                  >
                    <span style={{ fontSize: '0.6em', verticalAlign: 'super', marginRight: '2px', letterSpacing: '0.1em' }}>THE</span>
                    Catholic Register
                  </span>
                  <span className="font-instrument text-sm text-gold/60 group-hover:text-gold transition-colors group-hover:translate-x-1 duration-300">
                    &rarr;
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — Photo with parallax + gold frame */}
          <Reveal direction="left" blur duration={1.3}>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-sm pointer-events-none"
                style={{ border: '1px solid rgba(222,185,106,0.22)' }}
              />
              <div
                className="relative rounded-sm overflow-hidden"
                style={{ aspectRatio: '4/5', boxShadow: '0 30px 90px rgba(0,0,0,0.6)' }}
              >
                <motion.div style={{ y: imageY }} className="absolute inset-[-9%]">
                  <Image
                    src="/photos/Image.173.JPG"
                    alt="Throneway worship"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </motion.div>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(18,3,32,0.15) 0%, transparent 35%, rgba(18,3,32,0.55) 100%)' }} />
                <div className="cine-vignette" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

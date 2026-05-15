'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Clock, Users } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { UPCOMING_EVENTS } from '@/lib/constants'

const MAYA = '#67C8FC'

export default function EventSpotlight() {
  const event = UPCOMING_EVENTS[0]
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const posterY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section
      ref={sectionRef}
      className="cine-frame relative py-24 lg:py-36 overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      {/* Full-bleed parallax photo */}
      <motion.div className="absolute inset-[-12%]" style={{ y: bgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photos/Image.81.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
      </motion.div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, rgba(8,16,30,0.95) 0%, rgba(11,28,54,0.82) 45%, rgba(8,16,30,0.96) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 65% 35%, rgba(103,200,252,0.10) 0%, transparent 60%)' }} />
      <div className="cine-vignette" />
      <div className="film-grain" aria-hidden />

      <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — heading + details */}
          <div className="lg:col-span-3 flex flex-col gap-7 min-w-0">
            <Reveal direction="right">
              <p className="cine-kicker mb-5" style={{ color: 'rgba(103,200,252,0.85)' }}>Ongoing</p>
              <h2 className="cine-display text-white-soft" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}>
                {event.title}
              </h2>
              <p className="font-instrument text-[11px] tracking-[0.3em] uppercase mt-5" style={{ color: MAYA }}>
                {event.subtitle}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <p className="font-lora text-cream/80 text-lg leading-relaxed max-w-xl">
                {event.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-col gap-3.5 pl-6" style={{ borderLeft: `1px solid ${MAYA}55` }}>
                <div className="flex items-center gap-3">
                  <Clock size={14} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                  <span className="font-instrument text-sm text-cream/90 tracking-wide">{event.schedule}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                  <span className="font-instrument text-sm text-cream/90 tracking-wide">{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={14} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                  <span className="font-instrument text-sm text-cream/90 tracking-wide">Ages {event.ageGroup}</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.28}>
              <div className="flex flex-wrap gap-2 mb-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-instrument text-[10px] tracking-[0.18em] uppercase px-3.5 py-2 rounded-sm"
                    style={{ background: `${MAYA}10`, border: `1px solid ${MAYA}35`, color: `${MAYA}cc` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/events" className="btn-primary w-fit">
                Learn More &rarr;
              </Link>
            </Reveal>
          </div>

          {/* Right — Heights poster, framed + parallax */}
          <Reveal direction="left" blur duration={1.3} className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-sm pointer-events-none"
                style={{ border: `1px solid ${MAYA}25` }}
              />
              <motion.div
                style={{ y: posterY }}
                className="relative rounded-sm overflow-hidden w-full"
              >
                <div
                  className="relative rounded-sm overflow-hidden"
                  style={{ maxWidth: '380px', boxShadow: `0 0 70px ${MAYA}20, 0 28px 80px rgba(0,0,0,0.6)` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/heights-poster.png"
                    alt="Throneway Heights poster"
                    className="w-full block"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `linear-gradient(to bottom, rgba(10,22,40,0.12) 0%, transparent 18%)` }}
                  />
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

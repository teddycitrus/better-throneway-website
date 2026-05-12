'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users } from 'lucide-react'
import { UPCOMING_EVENTS } from '@/lib/constants'

// Heights poster blue palette
const NAVY = '#0a1628'
const BLUE_MID = '#0d2241'
const MAYA = '#67C8FC'

export default function EventSpotlight() {
  const event = UPCOMING_EVENTS[0]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: NAVY }}>
      {/* Photo background with navy blue overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photos/Image.81.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
        {/* Navy blue tint — replaces the old purple overlay */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(10,22,40,0.93) 0%, rgba(13,34,65,0.88) 40%, rgba(10,22,40,0.95) 100%)` }} />
        {/* Subtle blue radial glow at center */}
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 60% 40%, rgba(103,200,252,0.07) 0%, transparent 60%)` }} />
      </div>

      {/* Subtle topographic contour lines on top */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-radial-gradient(ellipse at 60% 50%, transparent 0px, transparent 48px, rgba(103,200,252,0.05) 48px, rgba(103,200,252,0.05) 50px)`,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${MAYA}33, transparent)` }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${MAYA}1a, transparent)` }} />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left — heading + details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <div>
              <p className="section-label mb-3">Upcoming</p>
              <h2 className="font-nunito font-extrabold text-white-soft leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                {event.title}
              </h2>
            </div>

            <p className="font-instrument text-[11px] tracking-[0.2em] uppercase" style={{ color: MAYA }}>
              {event.subtitle}
            </p>

            <p className="font-instrument text-cream/80 text-lg leading-relaxed">
              {event.description}
            </p>

            <div className="flex flex-col gap-3 pl-5" style={{ borderLeft: `2px solid ${MAYA}55` }}>
              <div className="flex items-center gap-3">
                <Clock size={14} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                <span className="font-instrument text-sm text-cream/90">{event.schedule}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                <span className="font-instrument text-sm text-cream/90">{event.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={14} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                <span className="font-instrument text-sm text-cream/90">Ages {event.ageGroup}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-instrument text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm"
                  style={{ background: `${MAYA}12`, border: `1px solid ${MAYA}40`, color: `${MAYA}cc` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/events" className="btn-primary w-fit mt-2">
              Learn More &rarr;
            </Link>
          </motion.div>

          {/* Right — Poster card (navy/blue themed) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                background: `linear-gradient(160deg, ${BLUE_MID} 0%, ${NAVY} 55%, #0e1f38 100%)`,
                aspectRatio: '3/4',
                maxHeight: '480px',
                boxShadow: `0 0 60px ${MAYA}22, 0 20px 60px rgba(0,0,0,0.6)`,
                border: `1px solid ${MAYA}25`,
              }}
            >
              {/* Topographic texture */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `repeating-radial-gradient(ellipse at 50% 40%, transparent 0, transparent 22px, ${MAYA}08 22px, ${MAYA}08 24px)`,
              }} />
              {/* Top blue glow */}
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 15%, ${MAYA}28 0%, transparent 55%)` }} />
              <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${MAYA}80, transparent)` }} />
              <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(196,151,58,0.3), transparent)` }} />

              <div className="relative h-full flex flex-col items-center justify-between p-8 text-center">
                <p className="font-instrument text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,151,58,0.8)' }}>Throneway Presents</p>

                <div className="flex flex-col items-center gap-4">
                  <div style={{ opacity: 0.25 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/LOGO White.png" alt="" className="w-14 h-14 object-contain" />
                  </div>
                  <div>
                    <p className="font-nunito font-bold text-white-soft" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}>Throneway</p>
                    <p className="font-nunito font-extrabold" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: MAYA }}>Heights</p>
                  </div>
                  <p className="font-instrument italic text-cream/45 text-sm">Faith &middot; Music &middot; Fellowship</p>
                </div>

                <div className="flex flex-col items-center gap-2.5 w-full">
                  <div className="w-full h-px" style={{ background: `${MAYA}25` }} />
                  <p className="font-instrument text-xs tracking-[0.14em] uppercase text-cream/70">Every other Friday &bull; 7–9 PM</p>
                  <p className="font-instrument text-[10px] tracking-[0.12em] uppercase text-muted">St. Gregory&apos;s Parish, Etobicoke</p>
                  <span
                    className="font-instrument text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-sm mt-1"
                    style={{ border: `1px solid ${MAYA}60`, color: MAYA }}
                  >
                    18+
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users } from 'lucide-react'
import { UPCOMING_EVENTS } from '@/lib/constants'

const NAVY = '#0a1628'
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
            className="lg:col-span-3 flex flex-col gap-6 min-w-0"
          >
            <div>
              <p className="section-label mb-3">Ongoing</p>
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

          {/* Right — Actual Heights poster */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div
              className="relative rounded-sm overflow-hidden w-full"
              style={{
                maxWidth: '380px',
                border: `1px solid ${MAYA}25`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/heights-poster.png"
                alt="Throneway Heights poster"
                className="w-full block"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, rgba(10,22,40,0.15) 0%, transparent 15%), linear-gradient(to right, rgba(10,22,40,0.3) 0%, transparent 30%)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

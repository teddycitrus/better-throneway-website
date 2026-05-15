'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Clock, Users, Calendar, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { UPCOMING_EVENTS, PAST_EVENTS, SOCIAL_LINKS } from '@/lib/constants'

const NAVY = '#0a1628'
const BLUE_MID = '#0d2241'
const MAYA = '#67C8FC'

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'instagram') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
  if (icon === 'facebook') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
  if (icon === 'youtube') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
  if (icon === 'spotify') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
  if (icon === 'tiktok') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  )
  return null
}

function EventsHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

  return (
    <section ref={ref} className="cine-frame relative overflow-hidden" style={{ minHeight: '74vh' }}>
      <motion.div className="absolute inset-[-10%]" style={{ y: bgY, scale: bgScale }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photos/Image.193.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
      </motion.div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(12,3,22,0.70) 0%, rgba(12,3,22,0.82) 55%, rgba(10,2,18,0.98) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(222,185,106,0.12) 0%, transparent 62%)' }} />
      <div className="cine-vignette" />
      <div className="film-grain" aria-hidden />

      <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center" style={{ minHeight: '74vh' }}>
        <motion.div style={{ y: contentY }} className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="cine-kicker mb-6">Gatherings &amp; Events</p>
            <h1
              className="cine-display text-white-soft"
              style={{ fontSize: 'clamp(3.2rem, 9vw, 7rem)' }}
            >
              Where faith<br />
              <span className="italic" style={{ color: '#DEB96A' }}>comes alive.</span>
            </h1>
            <p className="font-lora text-cream/65 text-lg lg:text-xl mt-7 max-w-xl leading-relaxed">
              From weekly gatherings to large-scale conferences, every Throneway event is designed to bring you deeper - in worship, in community, and in faith.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function EventsPage() {
  const upcoming = UPCOMING_EVENTS[0]

  return (
    <main className="min-h-screen bg-void">

      <EventsHero />

      {/* ── Ongoing — Heights featured ── */}
      <section className="cine-frame relative overflow-hidden py-24 lg:py-32" style={{ background: NAVY }}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/Image.81.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(8,16,30,0.96) 0%, rgba(11,28,54,0.90) 40%, rgba(8,16,30,0.98) 100%)` }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 60% 40%, rgba(103,200,252,0.07) 0%, transparent 60%)` }} />
        </div>
        <div className="cine-vignette" />
        <div className="film-grain" aria-hidden />

        <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <Reveal direction="up" className="mb-16">
            <p className="cine-kicker mb-4" style={{ color: 'rgba(103,200,252,0.85)' }}>Ongoing</p>
            <h2 className="cine-display text-white-soft" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)' }}>
              Regular Gatherings
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.1} blur duration={1.2}>
            <div
              className="rounded-sm overflow-hidden"
              style={{
                border: `1px solid ${MAYA}25`,
                background: `linear-gradient(160deg, ${BLUE_MID} 0%, ${NAVY} 60%, #0e1f38 100%)`,
                boxShadow: `0 0 70px ${MAYA}1a, 0 28px 70px rgba(0,0,0,0.55)`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">

                <div
                  className="lg:col-span-2 relative overflow-hidden"
                  style={{ borderRight: `1px solid ${MAYA}20`, minHeight: '440px' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/heights-poster.png"
                    alt="Throneway Heights poster"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to right, transparent 55%, rgba(10,22,40,0.55) 100%), linear-gradient(to bottom, rgba(10,22,40,0.15) 0%, transparent 15%)` }}
                  />
                </div>

                <div className="lg:col-span-3 flex flex-col justify-center gap-6 p-10 lg:p-16">
                  <p className="font-instrument text-[11px] tracking-[0.3em] uppercase" style={{ color: MAYA }}>
                    {upcoming.subtitle}
                  </p>

                  <h3 className="cine-display text-white-soft" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>
                    {upcoming.title}
                  </h3>

                  <p className="font-lora text-cream/75 text-base lg:text-lg leading-relaxed max-w-lg">
                    {upcoming.description}
                  </p>

                  <div className="flex flex-col gap-3 pl-6" style={{ borderLeft: `1px solid ${MAYA}55` }}>
                    <div className="flex items-center gap-3">
                      <Clock size={13} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                      <span className="font-instrument text-sm text-cream/85 tracking-wide">{upcoming.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={13} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                      <span className="font-instrument text-sm text-cream/85 tracking-wide">{upcoming.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={13} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                      <span className="font-instrument text-sm text-cream/85 tracking-wide">Ages {upcoming.ageGroup}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {upcoming.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-instrument text-[10px] tracking-[0.18em] uppercase px-3.5 py-2 rounded-sm"
                        style={{ background: `${MAYA}10`, border: `1px solid ${MAYA}35`, color: `${MAYA}cc` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 pt-2">
                    <Link href="/contact" className="btn-primary w-fit">
                      RSVP / Get in Touch
                    </Link>
                    <a
                      href="https://www.instagram.com/throneway"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-instrument text-sm transition-colors"
                      style={{ color: `${MAYA}80` }}
                      onMouseEnter={e => (e.currentTarget.style.color = MAYA)}
                      onMouseLeave={e => (e.currentTarget.style.color = `${MAYA}80`)}
                    >
                      Follow for updates &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="font-instrument text-sm text-cream/40 mt-10 text-center tracking-wide">
              More events announced throughout the year - follow us on Instagram to stay updated.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Next Events ── */}
      <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: '#0d0018' }}>
        <div className="film-grain" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(222,185,106,0.22), transparent)' }} />

        <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal direction="up" className="mb-12">
            <p className="cine-kicker mb-4">Upcoming</p>
            <h2 className="cine-display text-white-soft" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)' }}>
              Next Events
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.12}>
            <div
              className="py-20 text-center rounded-sm"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(222,185,106,0.12)' }}
            >
              <p className="font-cormorant italic text-cream/40 text-lg tracking-wide">
                Nothing scheduled right now - follow us on Instagram to be the first to know.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="cine-frame relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #14041f 0%, #1a0732 50%, #14041f 100%)' }}>
        <div
          className="god-ray"
          style={{ top: '-6%', left: '8%', width: '40%', height: '60%', opacity: 0.6 }}
        />
        <div className="film-grain" aria-hidden />

        <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <Reveal direction="up" className="mb-16">
            <p className="cine-kicker mb-4">Looking Back</p>
            <h2 className="cine-display text-white-soft" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)' }}>
              Past Events
            </h2>
          </Reveal>

          {PAST_EVENTS.map((event) => (
            <Reveal key={event.title} direction="up" blur duration={1.2} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Photos */}
                <div className="grid grid-cols-2 gap-4">
                  {event.photos.map((photo, j) => (
                    <div
                      key={photo}
                      className="relative rounded-sm overflow-hidden group"
                      style={{
                        aspectRatio: '3/4',
                        boxShadow: '0 18px 50px rgba(0,0,0,0.55)',
                        marginTop: j === 1 ? '2.5rem' : '0',
                        border: '1px solid rgba(222,185,106,0.14)',
                      }}
                    >
                      <Image
                        src={photo}
                        alt={`${event.title} ${j + 1}`}
                        fill
                        className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(13,0,24,0.55) 100%)' }} />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-6 lg:pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} style={{ color: 'rgba(222,185,106,0.7)' }} />
                    <span className="font-instrument text-[11px] tracking-[0.28em] uppercase" style={{ color: 'rgba(222,185,106,0.7)' }}>
                      {event.year}
                    </span>
                  </div>

                  <h3
                    className="cine-display text-white-soft"
                    style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
                  >
                    {event.title}
                  </h3>

                  <p className="font-lora text-cream/65 text-base lg:text-lg leading-relaxed">
                    {event.description}
                  </p>

                  {event.scripture && (
                    <blockquote className="font-cormorant italic text-cream/55 text-lg leading-relaxed pl-5" style={{ borderLeft: '1px solid rgba(222,185,106,0.4)' }}>
                      &ldquo;{event.scripture.text}&rdquo;
                      <span className="block font-instrument not-italic text-[11px] tracking-[0.2em] uppercase text-gold/45 mt-2">
                        {event.scripture.reference}
                      </span>
                    </blockquote>
                  )}

                  {(event.location || event.time) && (
                    <div className="flex flex-col gap-2">
                      {event.location && (
                        <div className="flex items-center gap-3">
                          <MapPin size={13} style={{ color: 'rgba(222,185,106,0.6)' }} className="flex-shrink-0" />
                          <span className="font-instrument text-sm text-cream/70">{event.location}</span>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-center gap-3">
                          <Clock size={13} style={{ color: 'rgba(222,185,106,0.6)' }} className="flex-shrink-0" />
                          <span className="font-instrument text-sm text-cream/70">{event.time}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {event.program && (
                    <div>
                      <p className="font-instrument text-[10px] tracking-[0.24em] uppercase text-cream/35 mb-3">Program</p>
                      <div className="flex flex-wrap gap-2">
                        {event.program.map((item) => (
                          <span
                            key={item}
                            className="font-instrument text-[10px] tracking-[0.14em] uppercase px-3.5 py-2 rounded-sm"
                            style={{ background: 'rgba(222,185,106,0.07)', border: '1px solid rgba(222,185,106,0.2)', color: 'rgba(222,185,106,0.8)' }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.speakers && (
                    <div className="flex flex-col gap-3">
                      <p className="font-instrument text-[10px] tracking-[0.24em] uppercase text-cream/35">Featured</p>
                      {event.speakers.map((s) => (
                        <div key={s.name} className="flex flex-col gap-0.5">
                          <p className="font-instrument text-sm font-semibold text-cream/90">{s.name}</p>
                          <p className="font-instrument text-xs text-cream/45 leading-snug">{s.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Stay Connected CTA ── */}
      <section className="cine-frame relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #14041f 0%, #0d0018 100%)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(181,55,242,0.12) 0%, transparent 60%)' }}
        />
        <div className="film-grain" aria-hidden />

        <div className="relative z-[3] max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <Reveal direction="up" className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="flex flex-col gap-5">
              <p className="cine-kicker">Stay in the Loop</p>
              <h2
                className="cine-display text-white-soft"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
              >
                Never miss an event.
              </h2>
              <p className="font-lora text-cream/60 text-base lg:text-lg leading-relaxed max-w-lg">
                Follow us on social media for real-time announcements, behind-the-scenes content, and updates on upcoming gatherings.
              </p>

              <div className="flex flex-wrap gap-3 mt-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-instrument text-xs tracking-[0.08em] px-4 py-3 rounded-sm transition-all duration-300"
                    style={{ border: '1px solid rgba(245,240,232,0.12)', color: 'rgba(245,240,232,0.5)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(222,185,106,0.5)'
                      e.currentTarget.style.color = '#DEB96A'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(245,240,232,0.12)'
                      e.currentTarget.style.color = 'rgba(245,240,232,0.5)'
                    }}
                  >
                    <SocialIcon icon={link.icon} />
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="flex-shrink-0 flex flex-col gap-4 p-9 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(31,31,34,0.6) 0%, rgba(13,0,24,0.6) 100%)',
                minWidth: '300px',
                border: '1px solid rgba(222,185,106,0.2)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <p className="font-instrument text-[10px] tracking-[0.28em] uppercase text-gold/75">Got Questions?</p>
              <h3 className="font-cormorant font-semibold text-white-soft text-2xl">
                We&apos;d love to hear from you.
              </h3>
              <p className="font-instrument text-cream/55 text-sm leading-relaxed">
                Want to partner with us, book an event, or just learn more? Reach out.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-2 font-instrument text-sm tracking-[0.06em] px-5 py-3 rounded-sm transition-all duration-300 w-fit group"
                style={{ background: 'rgba(222,185,106,0.12)', border: '1px solid rgba(222,185,106,0.4)', color: '#DEB96A' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(222,185,106,0.22)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(222,185,106,0.12)' }}
              >
                Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

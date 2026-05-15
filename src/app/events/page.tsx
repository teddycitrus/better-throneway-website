'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Reveal, { ImageReveal } from '@/components/ui/Reveal'
import { UPCOMING_EVENTS, PAST_EVENTS, SOCIAL_LINKS } from '@/lib/constants'

const EASE = [0.22, 1, 0.36, 1] as const

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

function SectionHeader({ index, kicker, tag, dark }: { index: string; kicker: string; tag: string; dark: boolean }) {
  const line = dark ? 'rgba(245,240,232,0.18)' : 'rgba(22,21,24,0.2)'
  const idx = dark ? 'text-cream/20' : 'text-ink/25'
  const kick = dark ? 'text-cream/55' : 'text-ink/60'
  const tg = dark ? 'text-cream/35' : 'text-ink/40'
  return (
    <Reveal direction="up">
      <div className="flex items-end justify-between gap-6 pb-6" style={{ borderBottom: `1px solid ${line}` }}>
        <div className="flex items-baseline gap-5">
          <span className={`ed-index ${idx}`} style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>{index}</span>
          <span className={`ed-kicker ${kick}`}>{kicker}</span>
        </div>
        <span className={`ed-caption ${tg} hidden sm:block`}>{tag}</span>
      </div>
    </Reveal>
  )
}

export default function EventsPage() {
  const upcoming = UPCOMING_EVENTS[0]

  const upcomingSpecs = [
    { label: 'When', value: upcoming.schedule },
    { label: 'Where', value: upcoming.location },
    { label: 'Ages', value: upcoming.ageGroup },
  ]

  return (
    <main style={{ background: 'var(--ink)' }}>

      {/* ── Masthead ── */}
      <section className="relative" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 lg:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex items-end justify-between gap-6 pb-5"
            style={{ borderBottom: '1px solid rgba(245,240,232,0.16)' }}
          >
            <span className="ed-caption text-cream/55">Gatherings &amp; Events</span>
            <span className="ed-caption text-cream/55 hidden sm:block">Throneway — Toronto</span>
            <span className="ed-caption text-cream/55">Vol. 01</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-16 lg:py-24 items-end">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="lg:col-span-8"
            >
              <h1 className="ed-display text-white-soft" style={{ fontSize: 'clamp(3.4rem, 11vw, 9rem)' }}>
                Where faith{' '}
                <span className="italic" style={{ color: 'var(--gold-light)' }}>comes alive.</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
              className="lg:col-span-4"
            >
              <p className="ed-body text-cream/55 text-base lg:text-lg">
                From weekly gatherings to large-scale conferences, every Throneway event is designed to bring you deeper - in worship, in community, and in faith.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 7', border: '1px solid rgba(245,240,232,0.16)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/Image.193.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
            </div>
            <span className="ed-caption text-cream/40 mt-4 block">Fig. 01 — Throneway gathering</span>
          </motion.div>
        </div>
      </section>

      {/* ── 01 Ongoing ── */}
      <section className="relative py-24 lg:py-36 mt-16 lg:mt-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader index="01" kicker="Ongoing" tag="Regular Gatherings" dark={false} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 lg:mt-20 items-start">
            <Reveal direction="up" delay={0.08} className="lg:col-span-5 order-1">
              <figure>
                <ImageReveal className="overflow-hidden">
                  <div style={{ border: '1px solid rgba(22,21,24,0.18)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/heights-poster.png" alt="Throneway Heights poster" className="w-full block" />
                  </div>
                </ImageReveal>
                <figcaption className="ed-caption text-ink/45 mt-4">Fig. A — Throneway Heights</figcaption>
              </figure>
            </Reveal>

            <div className="lg:col-span-7 order-2 flex flex-col">
              <Reveal direction="up" delay={0.04}>
                <p className="ed-caption text-purple-rich mb-5">{upcoming.subtitle}</p>
                <h2 className="ed-display" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}>{upcoming.title}</h2>
              </Reveal>

              <Reveal direction="up" delay={0.08}>
                <p className="font-cormorant text-ink/75 leading-[1.4] mt-7 max-w-xl" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)' }}>
                  {upcoming.description}
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.12} className="mt-10 max-w-lg">
                {upcomingSpecs.map((s, i) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-[100px_1fr] gap-6 py-4 items-baseline"
                    style={{
                      borderTop: '1px solid rgba(22,21,24,0.16)',
                      borderBottom: i === upcomingSpecs.length - 1 ? '1px solid rgba(22,21,24,0.16)' : 'none',
                    }}
                  >
                    <span className="ed-caption text-ink/45">{s.label}</span>
                    <span className="font-cormorant text-xl lg:text-2xl text-ink/85">{s.value}</span>
                  </div>
                ))}
              </Reveal>

              <Reveal direction="up" delay={0.16} className="mt-10 flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {upcoming.tags.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-5">
                      {i > 0 && <span className="text-ink/25">/</span>}
                      <span className="ed-caption text-ink/55">{tag}</span>
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                  <Link href="/contact" className="btn-primary w-fit">
                    <span>RSVP / Get in Touch</span>
                  </Link>
                  <a
                    href="https://www.instagram.com/throneway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-link text-ink"
                  >
                    Follow for updates &rarr;
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal direction="up" delay={0.1}>
            <p className="ed-caption text-ink/40 mt-16 text-center">
              More events announced throughout the year — follow us on Instagram to stay updated.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 02 Upcoming ── */}
      <section className="relative py-24 lg:py-32" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader index="02" kicker="Upcoming" tag="Calendar" dark />
          <Reveal direction="up" delay={0.1}>
            <div className="mt-16 py-24 text-center" style={{ border: '1px solid rgba(245,240,232,0.14)' }}>
              <p className="font-cormorant italic text-cream/45" style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)' }}>
                Nothing scheduled right now — follow us on Instagram to be the first to know.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 03 Past Events ── */}
      <section className="relative py-24 lg:py-36" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader index="03" kicker="Looking Back" tag="Archive" dark={false} />

          {PAST_EVENTS.map((event) => (
            <div key={event.title} className="mt-16 lg:mt-24 first:mt-16">
              <Reveal direction="up">
                <div className="flex items-baseline justify-between gap-6 flex-wrap">
                  <h2 className="ed-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>{event.title}</h2>
                  <span className="ed-index text-ink/25" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.8rem)' }}>{event.year}</span>
                </div>
              </Reveal>

              {/* Photo essay */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-12">
                <Reveal direction="up" delay={0.06} className="lg:col-span-7">
                  <ImageReveal className="overflow-hidden">
                    <div className="relative w-full" style={{ aspectRatio: '4 / 3', border: '1px solid rgba(22,21,24,0.18)' }}>
                      <Image src={event.photos[0]} alt={`${event.title} 1`} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 58vw" />
                    </div>
                  </ImageReveal>
                </Reveal>
                {event.photos[1] && (
                  <Reveal direction="up" delay={0.12} className="lg:col-span-5 lg:mt-16">
                    <ImageReveal className="overflow-hidden">
                      <div className="relative w-full" style={{ aspectRatio: '3 / 4', border: '1px solid rgba(22,21,24,0.18)' }}>
                        <Image src={event.photos[1]} alt={`${event.title} 2`} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 40vw" />
                      </div>
                    </ImageReveal>
                  </Reveal>
                )}
              </div>

              {/* Editorial body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 mt-16">
                <Reveal direction="up" delay={0.04} className="lg:col-span-7">
                  <p className="font-cormorant text-ink/80 leading-[1.4]" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)' }}>
                    {event.description}
                  </p>
                  {event.scripture && (
                    <blockquote className="font-cormorant italic text-ink/55 leading-[1.5] mt-10 pl-6" style={{ borderLeft: '2px solid rgba(181,55,242,0.5)', fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
                      &ldquo;{event.scripture.text}&rdquo;
                      <span className="ed-caption text-ink/45 block mt-3 not-italic">{event.scripture.reference}</span>
                    </blockquote>
                  )}
                </Reveal>

                <Reveal direction="up" delay={0.08} className="lg:col-span-5 flex flex-col gap-10">
                  {(event.location || event.time) && (
                    <div>
                      <span className="ed-caption text-ink/40 block mb-4">Details</span>
                      {event.location && (
                        <div className="grid grid-cols-[80px_1fr] gap-5 py-3" style={{ borderTop: '1px solid rgba(22,21,24,0.16)' }}>
                          <span className="ed-caption text-ink/45">Where</span>
                          <span className="font-cormorant text-lg text-ink/85">{event.location}</span>
                        </div>
                      )}
                      {event.time && (
                        <div className="grid grid-cols-[80px_1fr] gap-5 py-3" style={{ borderTop: '1px solid rgba(22,21,24,0.16)', borderBottom: '1px solid rgba(22,21,24,0.16)' }}>
                          <span className="ed-caption text-ink/45">Time</span>
                          <span className="font-cormorant text-lg text-ink/85">{event.time}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {event.program && (
                    <div>
                      <span className="ed-caption text-ink/40 block mb-4">Program</span>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {event.program.map((item, i) => (
                          <span key={item} className="flex items-center gap-4">
                            {i > 0 && <span className="text-ink/25">·</span>}
                            <span className="font-cormorant text-lg text-ink/75">{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.speakers && (
                    <div>
                      <span className="ed-caption text-ink/40 block mb-4">Featured</span>
                      {event.speakers.map((s, i) => (
                        <div
                          key={s.name}
                          className="py-4"
                          style={{
                            borderTop: '1px solid rgba(22,21,24,0.16)',
                            borderBottom: i === event.speakers!.length - 1 ? '1px solid rgba(22,21,24,0.16)' : 'none',
                          }}
                        >
                          <p className="font-cormorant text-xl text-ink/90">{s.name}</p>
                          <p className="ed-caption text-ink/45 mt-1.5">{s.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 Stay Connected ── */}
      <section className="relative py-24 lg:py-36" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader index="04" kicker="Stay in the Loop" tag="Connect" dark />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 lg:mt-20">
            <div className="lg:col-span-7 flex flex-col">
              <Reveal direction="up" delay={0.04}>
                <h2 className="ed-display text-white-soft" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}>
                  Never miss an event.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <p className="ed-body text-cream/55 text-base lg:text-lg max-w-lg mt-8">
                  Follow us on social media for real-time announcements, behind-the-scenes content, and updates on upcoming gatherings.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.12} className="mt-12 max-w-lg">
                <ul>
                  {SOCIAL_LINKS.map((link, i) => (
                    <li key={link.platform}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4"
                        style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(245,240,232,0.1)' }}
                      >
                        <span className="flex items-center gap-4">
                          <span className="ed-caption text-cream/30 w-6">{String(i + 1).padStart(2, '0')}</span>
                          <span className="text-cream/50 group-hover:text-gold-light transition-colors"><SocialIcon icon={link.icon} /></span>
                          <span className="font-cormorant text-xl lg:text-2xl text-cream/85 group-hover:text-white-soft transition-colors">{link.platform}</span>
                        </span>
                        <span className="ed-caption text-cream/30 group-hover:text-gold-light group-hover:translate-x-1 transition-all duration-300">&#8599;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal direction="up" delay={0.1} className="lg:col-span-5">
              <div className="p-9 lg:p-11 h-full flex flex-col gap-5" style={{ border: '1px solid rgba(245,240,232,0.16)' }}>
                <span className="ed-caption text-gold-light">Got Questions?</span>
                <h3 className="font-cormorant font-medium text-white-soft" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                  We&apos;d love to hear from you.
                </h3>
                <p className="ed-body text-cream/55 text-sm lg:text-base">
                  Want to partner with us, book an event, or just learn more? Reach out.
                </p>
                <Link href="/contact" className="ed-link text-gold-light mt-2 w-fit">
                  Contact Us &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Calendar, ArrowRight } from 'lucide-react'
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

export default function EventsPage() {
  const upcoming = UPCOMING_EVENTS[0]

  return (
    <main className="min-h-screen bg-void">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '52vh' }}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/Image.193.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,0,24,0.72) 0%, rgba(13,0,24,0.85) 60%, rgba(13,0,24,0.97) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(181,55,242,0.12) 0%, transparent 65%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">Gatherings & Events</p>
            <h1
              className="font-nunito font-extrabold text-white-soft leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Where faith<br />
              <span style={{ color: '#B537F2' }}>comes alive.</span>
            </h1>
            <p className="font-instrument text-cream/60 text-lg mt-6 max-w-xl leading-relaxed">
              From weekly gatherings to large-scale conferences, every Throneway event is designed to bring you deeper - in worship, in community, and in faith.
            </p>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.3), transparent)' }} />
      </section>

      {/* ── Upcoming Events ── */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: NAVY }}>
        {/* Photo background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/Image.81.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(13,34,65,0.90) 40%, rgba(10,22,40,0.97) 100%)` }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 60% 40%, rgba(103,200,252,0.06) 0%, transparent 60%)` }} />
        </div>

        {/* Contour lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{ backgroundImage: `repeating-radial-gradient(ellipse at 60% 50%, transparent 0px, transparent 48px, rgba(103,200,252,0.05) 48px, rgba(103,200,252,0.05) 50px)` }}
        />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${MAYA}33, transparent)` }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${MAYA}1a, transparent)` }} />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="section-label mb-3">Ongoing</p>
            <h2 className="font-nunito font-extrabold text-white-soft leading-none" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Regular Gatherings
            </h2>
          </motion.div>

          {/* Heights Card — full-width featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div
              className="rounded-sm overflow-hidden"
              style={{
                border: `1px solid ${MAYA}25`,
                background: `linear-gradient(160deg, ${BLUE_MID} 0%, ${NAVY} 60%, #0e1f38 100%)`,
                boxShadow: `0 0 60px ${MAYA}18, 0 20px 60px rgba(0,0,0,0.5)`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Left — Poster */}
                <div
                  className="lg:col-span-2 relative flex flex-col items-center justify-center p-10 text-center"
                  style={{ borderRight: `1px solid ${MAYA}20` }}
                >
                  <div className="absolute inset-0 opacity-15" style={{
                    backgroundImage: `repeating-radial-gradient(ellipse at 50% 40%, transparent 0, transparent 22px, ${MAYA}08 22px, ${MAYA}08 24px)`,
                  }} />
                  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 20%, ${MAYA}20 0%, transparent 55%)` }} />

                  <div className="relative flex flex-col items-center gap-5 py-6">
                    <p className="font-instrument text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,151,58,0.8)' }}>Throneway Presents</p>

                    <div className="opacity-20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/logos/LOGO White.png" alt="" className="w-16 h-16 object-contain" />
                    </div>

                    <div>
                      <p className="font-nunito font-bold text-white-soft" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>Throneway</p>
                      <p className="font-nunito font-extrabold" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: MAYA }}>Heights</p>
                    </div>

                    <p className="font-instrument italic text-cream/45 text-sm">Faith &middot; Music &middot; Fellowship</p>

                    <div className="flex flex-col items-center gap-2 w-full pt-2">
                      <div className="w-full h-px" style={{ background: `${MAYA}25` }} />
                      <p className="font-instrument text-xs tracking-[0.14em] uppercase text-cream/70 mt-2">Every other Friday &bull; 7–9 PM</p>
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

                {/* Right — Details */}
                <div className="lg:col-span-3 flex flex-col justify-center gap-6 p-10 lg:p-14">
                  <p className="font-instrument text-[11px] tracking-[0.2em] uppercase" style={{ color: MAYA }}>
                    {upcoming.subtitle}
                  </p>

                  <h3 className="font-nunito font-extrabold text-white-soft" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                    {upcoming.title}
                  </h3>

                  <p className="font-instrument text-cream/75 text-base lg:text-lg leading-relaxed max-w-lg">
                    {upcoming.description}
                  </p>

                  <div className="flex flex-col gap-3 pl-5" style={{ borderLeft: `2px solid ${MAYA}55` }}>
                    <div className="flex items-center gap-3">
                      <Clock size={13} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                      <span className="font-instrument text-sm text-cream/85">{upcoming.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={13} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                      <span className="font-instrument text-sm text-cream/85">{upcoming.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={13} style={{ color: `${MAYA}99` }} className="flex-shrink-0" />
                      <span className="font-instrument text-sm text-cream/85">Ages {upcoming.ageGroup}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {upcoming.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-instrument text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm"
                        style={{ background: `${MAYA}12`, border: `1px solid ${MAYA}40`, color: `${MAYA}cc` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
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
          </motion.div>

          {/* More events placeholder note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-instrument text-sm text-muted mt-8 text-center"
          >
            More events announced throughout the year - follow us on Instagram to stay updated.
          </motion.p>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: '#0d0018' }}>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.2), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.1), transparent)' }} />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="section-label mb-3">Upcoming</p>
            <h2 className="font-nunito font-extrabold text-white-soft leading-none" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Next Events
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="py-16 text-center rounded-sm"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="font-instrument text-cream/30 text-sm tracking-[0.06em]">
              Nothing scheduled right now - follow us on Instagram to be the first to know.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a0030 0%, #1f1f22 100%)' }}>
        <div
          className="absolute pointer-events-none"
          style={{
            top: '30%', left: '15%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(181,55,242,0.08) 0%, transparent 65%)',
            filter: 'blur(60px)',
            borderRadius: '9999px',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="section-label mb-3">Looking Back</p>
            <h2 className="font-nunito font-extrabold text-white-soft leading-none" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Past Events
            </h2>
          </motion.div>

          {PAST_EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                {/* Photos */}
                <div className="grid grid-cols-2 gap-3">
                  {event.photos.map((photo, j) => (
                    <div
                      key={photo}
                      className="relative rounded-sm overflow-hidden"
                      style={{
                        aspectRatio: j === 0 ? '3/4' : '3/4',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                        marginTop: j === 1 ? '2rem' : '0',
                      }}
                    >
                      <Image
                        src={photo}
                        alt={`${event.title} ${j + 1}`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(13,0,24,0.5) 100%)' }} />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-6 lg:pt-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} style={{ color: 'rgba(181,55,242,0.7)' }} />
                    <span className="font-instrument text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(181,55,242,0.7)' }}>
                      {event.year}
                    </span>
                  </div>

                  <h3
                    className="font-cormorant font-bold text-white-soft leading-none"
                    style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}
                  >
                    {event.title}
                  </h3>

                  <p className="font-instrument text-cream/65 text-base lg:text-lg leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event details */}
                  {(event.location || event.time) && (
                    <div className="flex flex-col gap-2">
                      {event.location && (
                        <div className="flex items-center gap-3">
                          <MapPin size={13} style={{ color: 'rgba(181,55,242,0.6)' }} className="flex-shrink-0" />
                          <span className="font-instrument text-sm text-cream/70">{event.location}</span>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-center gap-3">
                          <Clock size={13} style={{ color: 'rgba(181,55,242,0.6)' }} className="flex-shrink-0" />
                          <span className="font-instrument text-sm text-cream/70">{event.time}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Program */}
                  {event.program && (
                    <div>
                      <p className="font-instrument text-[10px] tracking-[0.18em] uppercase text-muted mb-3">Program</p>
                      <div className="flex flex-wrap gap-2">
                        {event.program.map((item) => (
                          <span
                            key={item}
                            className="font-instrument text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-sm"
                            style={{ background: 'rgba(181,55,242,0.08)', border: '1px solid rgba(181,55,242,0.2)', color: 'rgba(181,55,242,0.8)' }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Speakers */}
                  {event.speakers && (
                    <div className="flex flex-col gap-3">
                      <p className="font-instrument text-[10px] tracking-[0.18em] uppercase text-muted">Featured</p>
                      {event.speakers.map((s) => (
                        <div key={s.name} className="flex flex-col gap-0.5">
                          <p className="font-instrument text-sm font-semibold text-cream/90">{s.name}</p>
                          <p className="font-instrument text-xs text-muted leading-snug">{s.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stay Connected CTA ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
          >
            <div className="flex flex-col gap-4">
              <p className="section-label">Stay in the Loop</p>
              <h2
                className="font-nunito font-extrabold text-void leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Never miss an event.
              </h2>
              <p className="font-instrument text-void/60 text-base lg:text-lg leading-relaxed max-w-lg">
                Follow us on social media for real-time announcements, behind-the-scenes content, and updates on upcoming gatherings.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mt-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-instrument text-xs tracking-[0.08em] px-4 py-2.5 rounded-sm transition-all duration-200"
                    style={{
                      border: '1px solid rgba(31,31,34,0.15)',
                      color: 'rgba(31,31,34,0.55)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(181,55,242,0.5)'
                      e.currentTarget.style.color = '#B537F2'
                      e.currentTarget.style.background = 'rgba(181,55,242,0.05)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(31,31,34,0.15)'
                      e.currentTarget.style.color = 'rgba(31,31,34,0.55)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <SocialIcon icon={link.icon} />
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div
              className="flex-shrink-0 flex flex-col gap-4 p-8 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #1f1f22 0%, #0d0018 100%)',
                minWidth: '280px',
                border: '1px solid rgba(181,55,242,0.2)',
              }}
            >
              <p className="font-instrument text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(181,55,242,0.75)' }}>Got Questions?</p>
              <h3 className="font-nunito font-bold text-white-soft" style={{ fontSize: '1.3rem' }}>
                We&apos;d love to hear from you.
              </h3>
              <p className="font-instrument text-cream/55 text-sm leading-relaxed">
                Want to partner with us, book an event, or just learn more? Reach out.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-2 font-instrument text-sm tracking-[0.06em] px-5 py-3 rounded-sm transition-all duration-200 w-fit"
                style={{
                  background: 'rgba(181,55,242,0.15)',
                  border: '1px solid rgba(181,55,242,0.4)',
                  color: '#B537F2',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(181,55,242,0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(181,55,242,0.15)'
                }}
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

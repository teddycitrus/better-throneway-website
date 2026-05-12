'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SixPillars from '@/components/sections/home/SixPillars'

const ASSOCIATIONS = [
  { name: 'Jesus Youth Canada', logo: '/logos/JY Logo.png', href: 'https://jesusyouth.ca', className: 'brightness-0 invert' },
  { name: 'Archdiocese of Toronto', logo: '/logos/arch-toronto-transparent.png', href: 'https://www.archtoronto.org', className: '' },
  { name: 'Vocations Toronto', logo: '/logos/vocations-toronto.png', href: 'https://www.vocationstoronto.ca', className: '' },
  { name: 'Office of Catholic Youth', logo: '/logos/ocy_transparent.png', href: 'https://ocytoronto.org/', className: '' },
]

const PILLARS_SUMMARY = [
  { icon: '🎶', label: 'Music' },
  { icon: '🎨', label: 'Visual Art' },
  { icon: '📸', label: 'Digital Media' },
  { icon: '🕊️', label: 'Live Events' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-void">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/Image.129.JPG" alt="" className="w-full h-full object-cover object-center" aria-hidden />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,0,24,0.65) 0%, rgba(13,0,24,0.80) 55%, rgba(13,0,24,0.98) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 65%, rgba(181,55,242,0.14) 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-44 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="section-label mb-4">About Us</p>
            <h1
              className="font-nunito font-extrabold text-white-soft leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Built for<br />
              <span style={{ color: '#B537F2' }}>worship.</span>
            </h1>
            <p className="font-instrument text-cream/60 text-lg leading-relaxed">
              Throneway is a Catholic outreach ministry of Jesus Youth Canada — a community of young artists, musicians, and creatives united by the conviction that beauty leads to God.
            </p>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.3), transparent)' }} />
      </section>

      {/* ── Mission ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-7"
            >
              <div>
                <p className="section-label mb-4">Our Mission</p>
                <h2
                  className="font-nunito font-extrabold text-void leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
                >
                  Building a culture of worship{' '}
                  <span style={{ color: '#B537F2' }}>through the arts.</span>
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-instrument text-void/70 leading-relaxed text-base lg:text-lg">
                  We believe the arts are not decoration — they are proclamation. Every song, every image, every gathering is an act of worship: a declaration that God is worthy, and that beauty is one of his most potent languages.
                </p>
                <p className="font-instrument text-void/55 leading-relaxed text-base lg:text-lg">
                  Based in Toronto, we operate through music, visual art, digital media, and live events — always aimed at one thing: helping young people encounter the living God.
                </p>
              </div>

              {/* Arts mediums */}
              <div className="grid grid-cols-2 gap-3">
                {PILLARS_SUMMARY.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 py-3 px-4 rounded-sm"
                    style={{ background: 'rgba(181,55,242,0.06)', border: '1px solid rgba(181,55,242,0.15)' }}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="font-instrument text-sm tracking-[0.06em] text-void/70">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Photo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="relative rounded-sm overflow-hidden"
                style={{ aspectRatio: '4/5', boxShadow: '0 20px 60px rgba(31,31,34,0.18)' }}
              >
                <Image
                  src="/photos/Image.173.JPG"
                  alt="Throneway worship"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(31,31,34,0.35) 100%)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0d0018 0%, #1a0030 50%, #1f1f22 100%)' }}
      >
        {/* Purple orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '40%', right: '5%',
            width: '550px', height: '550px',
            background: 'radial-gradient(circle, rgba(181,55,242,0.10) 0%, transparent 65%)',
            filter: 'blur(70px)',
            borderRadius: '9999px',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 lg:mb-18"
          >
            <p className="section-label mb-4">Our Story</p>
            <h2
              className="font-nunito font-extrabold text-white-soft leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              From one night of worship<br />
              <span style={{ color: '#B537F2' }}>to a movement.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Timeline cards */}
            {[
              {
                year: '2022',
                title: 'Renewal',
                body: "It began with one question: what if we gathered young Catholics in Toronto for a full day of worship, art, and prayer? Throneway '22: Renewal brought hundreds together at Noble Hall in Oakville — Holy Mass, live music with Steadfast Worship, a keynote from Fr. Kevin Belgrave, a \"Youth Revival\" panel, and an art showcase celebrating the gifts of the Holy Spirit. That day became the seed of everything that followed.",
                accent: '#B537F2',
              },
              {
                year: 'Ongoing',
                title: 'Throneway Heights',
                body: "After Renewal, the question became: how do we keep this community alive? Heights was the answer — a recurring gathering every other Friday at St. Gregory's Parish in Etobicoke. Praise and worship, faith talks, adoration, and the kind of fellowship that sustains you through the week. A home for young adults who want more from their faith.",
                accent: '#67C8FC',
              },
              {
                year: '2024',
                title: 'Running',
                body: 'Throneway stepped into the recording studio and released our debut single — \"Running.\" A declaration of pursuit, surrender, and faith in motion. Now streaming on Spotify, Apple Music, YouTube Music, and beyond. The arts becoming proclamation, exactly as we always believed they could.',
                accent: '#C4973A',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex flex-col gap-4 p-7 rounded-sm"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: card.accent }} />
                  <span className="font-instrument text-[10px] tracking-[0.22em] uppercase text-muted">{card.year}</span>
                </div>
                <h3 className="font-nunito font-bold text-white-soft text-xl">{card.title}</h3>
                <p className="font-instrument text-cream/60 text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <p
              className="font-cormorant italic text-cream/80 leading-snug"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              &ldquo;Beauty is not a luxury for the Church — it is a language. And we intend to speak it.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Six Pillars ── */}
      <SixPillars />

      {/* ── In Association With ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="section-label mb-4">Partners in Mission</p>
            <h2
              className="font-nunito font-extrabold text-void leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              In association with.
            </h2>
            <p className="font-instrument text-void/55 leading-relaxed text-base lg:text-lg mt-4 max-w-xl">
              Throneway operates within and alongside established Catholic institutions in the Archdiocese of Toronto, grounded in the broader Church.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {ASSOCIATIONS.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 py-6 px-4 rounded-sm transition-all duration-200 hover:bg-black/5 group"
                style={{ border: '1px solid rgba(31,31,34,0.1)' }}
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={56}
                  height={56}
                  className={`h-14 w-auto object-contain transition-opacity group-hover:opacity-100 opacity-65 ${org.className}`}
                />
                <span className="font-instrument text-[10px] tracking-[0.08em] text-center text-void/60 leading-tight group-hover:text-void/90 transition-colors">
                  {org.name}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Catholic Register */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 pt-8"
            style={{ borderTop: '1px solid rgba(31,31,34,0.1)' }}
          >
            <p className="section-label mb-5">Published In</p>
            <a
              href="https://www.catholicregister.org/find?query=throneway&page=1&archive=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <span
                className="font-nunito font-extrabold tracking-tight transition-opacity opacity-75 group-hover:opacity-100"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#1a5fa8' }}
              >
                <span style={{ fontSize: '0.65em', verticalAlign: 'super', marginRight: '1px' }}>THE</span>
                Catholic Register
              </span>
              <span className="font-instrument text-[10px] tracking-[0.15em] uppercase text-void/40 group-hover:text-purple-vivid transition-colors">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #1f1f22 0%, #0d0018 100%)' }}
      >
        <div
          className="absolute pointer-events-none inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(181,55,242,0.10) 0%, transparent 65%)' }}
        />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/events"
                className="flex flex-col gap-4 p-8 rounded-sm h-full transition-all duration-300 group"
                style={{
                  background: 'rgba(103,200,252,0.06)',
                  border: '1px solid rgba(103,200,252,0.2)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(103,200,252,0.10)'; e.currentTarget.style.borderColor = 'rgba(103,200,252,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(103,200,252,0.06)'; e.currentTarget.style.borderColor = 'rgba(103,200,252,0.2)' }}
              >
                <p className="font-instrument text-[10px] tracking-[0.22em] uppercase" style={{ color: 'rgba(103,200,252,0.7)' }}>Come As You Are</p>
                <h3 className="font-nunito font-bold text-white-soft text-2xl">Join us at an event</h3>
                <p className="font-instrument text-cream/55 text-sm leading-relaxed">
                  Throneway Heights runs every other Friday at St. Gregory&apos;s Parish, Etobicoke. 18+ young adults welcome. Come for the music, stay for the community.
                </p>
                <span className="font-instrument text-sm mt-2 transition-colors" style={{ color: '#67C8FC' }}>
                  See all events &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Link
                href="/contact"
                className="flex flex-col gap-4 p-8 rounded-sm h-full transition-all duration-300"
                style={{
                  background: 'rgba(181,55,242,0.06)',
                  border: '1px solid rgba(181,55,242,0.2)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(181,55,242,0.10)'; e.currentTarget.style.borderColor = 'rgba(181,55,242,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(181,55,242,0.06)'; e.currentTarget.style.borderColor = 'rgba(181,55,242,0.2)' }}
              >
                <p className="font-instrument text-[10px] tracking-[0.22em] uppercase" style={{ color: 'rgba(181,55,242,0.7)' }}>Get Involved</p>
                <h3 className="font-nunito font-bold text-white-soft text-2xl">Work with us</h3>
                <p className="font-instrument text-cream/55 text-sm leading-relaxed">
                  Are you a musician, artist, photographer, or videographer? We&apos;re always looking for creatives who share our vision. Or reach out about events, media, or collaboration.
                </p>
                <span className="font-instrument text-sm mt-2 transition-colors" style={{ color: '#B537F2' }}>
                  Get in touch &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

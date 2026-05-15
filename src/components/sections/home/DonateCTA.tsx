'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DONATE_URL } from '@/lib/constants'

const REVERENT_EASE = [0.16, 1, 0.3, 1] as const

export default function DonateCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.22])

  return (
    <section
      ref={sectionRef}
      className="cine-frame relative overflow-hidden py-36 lg:py-48"
    >
      {/* Parallax + slow scale background — the climactic image */}
      <motion.div className="absolute inset-[-14%]" style={{ y: bgY, scale: bgScale }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/Image.379.JPG"
          alt="Priest raising the golden monstrance"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(10,3,20,0.86) 0%, rgba(12,3,22,0.74) 50%, rgba(8,2,16,0.94) 100%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(222,185,106,0.16) 0%, rgba(181,55,242,0.14) 38%, transparent 70%)' }}
      />
      <div className="cine-vignette" />
      <div className="film-grain" aria-hidden />

      {/* Content */}
      <div className="relative z-[3] max-w-[920px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16 } },
          }}
          className="flex flex-col items-center gap-8"
        >
          {([
            <p key="k" className="cine-kicker cine-kicker--center">Support the Ministry</p>,
            <blockquote
              key="q"
              className="cine-display font-light italic text-cream/95"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)' }}
            >
              &ldquo;To the one who conquers I will give a place with me on my{' '}
              <em className="not-italic font-medium" style={{ color: '#DEB96A' }}>THRONE</em>
              ...&rdquo;
            </blockquote>,
            <p key="r" className="font-instrument text-xs tracking-[0.3em] uppercase text-cream/45">
              Revelation 3:21
            </p>,
            <div key="rule" className="w-20 h-px" style={{ background: 'rgba(222,185,106,0.45)' }} />,
            <p key="b" className="font-lora text-cream/75 text-lg lg:text-xl leading-relaxed max-w-lg">
              Help us create our debut album and keep this ministry alive. Every gift goes directly toward music, events, and outreach.
            </p>,
            <a
              key="cta"
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden font-instrument text-sm tracking-[0.22em] uppercase font-semibold px-12 py-4 rounded-sm mt-2 transition-all duration-300 group"
              style={{ background: '#6740AA', color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8B52D4'
                e.currentTarget.style.boxShadow = '0 0 50px rgba(181,55,242,0.55)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6740AA'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span
                className="absolute top-0 bottom-0 w-1/3 pointer-events-none animate-sheen"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)' }}
              />
              <span className="relative">Support the Album</span>
            </a>,
          ]).map((node, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: REVERENT_EASE } },
              }}
            >
              {node}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

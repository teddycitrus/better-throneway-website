'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DONATE_URL } from '@/lib/constants'

export default function DonateCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 lg:py-36">
      {/* Parallax background */}
      <motion.div className="absolute inset-[-10%]" style={{ y: bgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/Image.379.JPG"
          alt="Priest raising the golden monstrance"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Deep purple overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(13,0,26,0.82) 0%, rgba(13,0,26,0.72) 50%, rgba(13,0,26,0.88) 100%)' }}
      />
      {/* Vivid purple radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(181,55,242,0.25) 0%, rgba(71,1,112,0.15) 40%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-7"
        >
          <p className="section-label">Support the Ministry</p>

          <blockquote
            className="font-cormorant font-light italic text-cream/90 leading-tight text-balance"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
          >
            &ldquo;To the one who conquers I will give a place with me on my{' '}
            <em className="text-gold not-italic font-medium">THRONE</em>
            ...&rdquo;
          </blockquote>

          <p className="font-instrument text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(138,138,154,0.8)' }}>
            Revelation 3:21
          </p>

          <div className="w-16 h-px my-2" style={{ background: 'rgba(196,151,58,0.4)' }} />

          <p className="font-lora text-cream/75 text-lg leading-relaxed max-w-lg">
            Help us create our debut album and keep this ministry alive. Every gift goes directly toward music, events, and outreach.
          </p>

          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-instrument text-sm tracking-[0.2em] uppercase font-semibold px-10 py-4 rounded-sm mt-2 transition-all duration-300"
            style={{ background: '#6740AA', color: '#ffffff' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8B52D4'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(181,55,242,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#6740AA'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Support the Album
          </a>
        </motion.div>
      </div>
    </section>
  )
}

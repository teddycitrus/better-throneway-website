'use client'

import Reveal, { ImageReveal } from '@/components/ui/Reveal'
import { DONATE_URL } from '@/lib/constants'

export default function DonateCTA() {
  return (
    <section className="relative py-24 lg:py-36" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal direction="up">
          <div className="flex items-end justify-between gap-6 pb-6" style={{ borderBottom: '1px solid rgba(22,21,24,0.2)' }}>
            <div className="flex items-baseline gap-5">
              <span className="ed-index text-ink/25" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>05</span>
              <span className="ed-kicker text-ink/60">Support the Ministry</span>
            </div>
            <span className="ed-caption text-ink/40 hidden sm:block">Give</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 lg:mt-24 items-center">

          {/* Statement */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
            <Reveal direction="up" delay={0.04}>
              <blockquote className="ed-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}>
                &ldquo;To the one who conquers I will give a place with me on my{' '}
                <span className="italic" style={{ color: 'var(--purple-vivid)' }}>throne</span>
                &hellip;&rdquo;
              </blockquote>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <p className="ed-caption text-ink/45 mt-7">Revelation 3:21</p>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <p className="ed-body text-ink/65 text-base lg:text-lg max-w-lg mt-10">
                Help us create our debut album and keep this ministry alive. Every gift goes directly toward music, events, and outreach.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.16}>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 w-fit"
              >
                <span>Support the Album</span>
              </a>
            </Reveal>
          </div>

          {/* Photo plate */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 order-1 lg:order-2">
            <figure>
              <ImageReveal className="overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: '4 / 5', border: '1px solid rgba(22,21,24,0.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/Image.379.JPG"
                    alt="Priest raising the golden monstrance"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </ImageReveal>
              <figcaption className="ed-caption text-ink/45 mt-4">
                Fig. C — Eucharistic adoration
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

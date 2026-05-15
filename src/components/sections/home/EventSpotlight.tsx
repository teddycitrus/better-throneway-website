'use client'

import Link from 'next/link'
import Reveal, { ImageReveal } from '@/components/ui/Reveal'
import { UPCOMING_EVENTS } from '@/lib/constants'

export default function EventSpotlight() {
  const event = UPCOMING_EVENTS[0]

  const specs = [
    { label: 'When', value: event.schedule },
    { label: 'Where', value: event.location },
    { label: 'Ages', value: event.ageGroup },
  ]

  return (
    <section className="relative py-24 lg:py-36" style={{ background: 'var(--paper-deep)', color: 'var(--ink)' }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal direction="up">
          <div className="flex items-end justify-between gap-6 pb-6" style={{ borderBottom: '1px solid rgba(22,21,24,0.2)' }}>
            <div className="flex items-baseline gap-5">
              <span className="ed-index text-ink/25" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>03</span>
              <span className="ed-kicker text-ink/60">Ongoing</span>
            </div>
            <span className="ed-caption text-ink/40 hidden sm:block">Gatherings</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 lg:mt-20 items-start">

          {/* Text column */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
            <Reveal direction="up" delay={0.04}>
              <p className="ed-caption text-purple-rich mb-5">{event.subtitle}</p>
              <h2 className="ed-display" style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)' }}>
                {event.title}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <p className="font-cormorant text-ink/75 leading-[1.4] mt-8 max-w-xl" style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)' }}>
                {event.description}
              </p>
            </Reveal>

            {/* Spec table */}
            <Reveal direction="up" delay={0.12} className="mt-12 max-w-lg">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[100px_1fr] gap-6 py-4 items-baseline"
                  style={{
                    borderTop: '1px solid rgba(22,21,24,0.16)',
                    borderBottom: i === specs.length - 1 ? '1px solid rgba(22,21,24,0.16)' : 'none',
                  }}
                >
                  <span className="ed-caption text-ink/45">{s.label}</span>
                  <span className="font-cormorant text-xl lg:text-2xl text-ink/85">{s.value}</span>
                </div>
              ))}
            </Reveal>

            {/* Tags + CTA */}
            <Reveal direction="up" delay={0.16} className="mt-10 flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {event.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-5">
                    {i > 0 && <span className="text-ink/25">/</span>}
                    <span className="ed-caption text-ink/55">{tag}</span>
                  </span>
                ))}
              </div>
              <Link href="/events" className="ed-link text-ink w-fit">
                Learn More &rarr;
              </Link>
            </Reveal>
          </div>

          {/* Poster plate */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 order-1 lg:order-2">
            <figure>
              <ImageReveal className="overflow-hidden" >
                <div style={{ border: '1px solid rgba(22,21,24,0.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/heights-poster.png" alt="Throneway Heights poster" className="w-full block" />
                </div>
              </ImageReveal>
              <figcaption className="ed-caption text-ink/45 mt-4">
                Fig. B — Throneway Heights
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

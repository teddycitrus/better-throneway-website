'use client'

import Image from 'next/image'
import Reveal, { ImageReveal } from '@/components/ui/Reveal'
import { RUNNING_SINGLE } from '@/lib/constants'

function SpotifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function AppleMusicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function YouTubeMusicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function AmazonMusicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.67-1.94 1.28-4.06 1.92-6.36 1.92-3.7 0-6.95-1.04-9.76-3.11-.28-.23-.4-.4-.35-.6l.006-.02zm21.394-2.083c-.174-.22-.583-.261-1.215-.137-1.907.354-3.262.515-4.064.49-.378-.012-.747-.07-1.088-.167-.183-.07-.281-.007-.234.177l.066.224c.107.36.31.67.605.93.424.37.962.553 1.61.553.535 0 1.05-.097 1.538-.29.49-.193.88-.45 1.172-.773.212-.232.322-.521.32-.874.002-.1-.02-.202-.065-.332h-.645zM11.543 8.3c1.14-.012 2.095.456 2.864 1.405.384.47.69 1.016.91 1.63.218.612.328 1.2.325 1.8.011.31.016.624.016.938v1.439c0 .25-.012.5-.035.752-.09 1.008-.373 1.9-.85 2.674a5.122 5.122 0 01-1.865 1.77c-.763.44-1.636.663-2.583.663-2.027 0-3.516-1.018-4.467-3.054-.462-.993-.693-2.09-.693-3.29 0-1.258.239-2.387.717-3.39.479-1 1.142-1.75 1.993-2.25a5.09 5.09 0 012.668-.09zm.039 1.427c-.88.013-1.59.43-2.13 1.25-.54.82-.81 1.88-.81 3.18 0 1.31.275 2.376.823 3.2.548.824 1.253 1.235 2.117 1.235.897 0 1.616-.425 2.157-1.276.542-.85.813-1.943.813-3.277 0-1.342-.267-2.43-.8-3.264-.534-.833-1.257-1.26-2.17-1.248z" />
    </svg>
  )
}

const PLATFORMS = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/52QRkOMy637alursB1Qybs?si=iBNtDDbTSYmS4m5ehM9UZQ', Icon: SpotifyIcon },
  { name: 'Apple Music', href: 'https://music.apple.com/search?term=throneway', Icon: AppleMusicIcon },
  { name: 'YouTube Music', href: 'https://music.youtube.com/search?q=throneway', Icon: YouTubeMusicIcon },
  { name: 'Amazon Music', href: 'https://music.amazon.ca/search/throneway', Icon: AmazonMusicIcon },
]

export default function RunningSection() {
  return (
    <section className="relative py-24 lg:py-36" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal direction="up">
          <div className="flex items-end justify-between gap-6 pb-6" style={{ borderBottom: '1px solid rgba(245,240,232,0.18)' }}>
            <div className="flex items-baseline gap-5">
              <span className="ed-index text-cream/20" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>02</span>
              <span className="ed-kicker text-cream/55">Debut Single</span>
            </div>
            <span className="ed-caption text-cream/35 hidden sm:block">Music</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 lg:mt-20 items-start">

          {/* Cover plate */}
          <Reveal direction="up" delay={0.06} className="lg:col-span-5">
            <figure>
              <ImageReveal>
                <div className="relative w-full aspect-square overflow-hidden" style={{ border: '1px solid rgba(245,240,232,0.16)' }}>
                  <Image
                    src="/running-cover.png"
                    alt="Running — Throneway debut single album cover"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </ImageReveal>
              <figcaption className="ed-caption text-cream/40 mt-4 flex items-center justify-between">
                <span>Single — {RUNNING_SINGLE.artist}</span>
                <span>2025</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Feature text */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal direction="up" delay={0.04}>
              <h2 className="ed-display text-white-soft" style={{ fontSize: 'clamp(4rem, 11vw, 9rem)' }}>
                Running
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <p className="font-cormorant italic text-cream/75 leading-[1.4] mt-7 max-w-xl" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)' }}>
                {RUNNING_SINGLE.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <div className="overflow-hidden mt-9 max-w-xl" style={{ border: '1px solid rgba(245,240,232,0.14)' }}>
                <iframe
                  src={`${RUNNING_SINGLE.spotifyEmbedUrl}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ border: 'none', display: 'block' }}
                  title="Running by Throneway on Spotify"
                />
              </div>
            </Reveal>

            {/* Streaming — editorial list */}
            <Reveal direction="up" delay={0.16} className="mt-12 max-w-xl">
              <div className="flex items-center gap-5 mb-3">
                <span className="ed-caption text-cream/40">Listen on</span>
                <div className="flex-1 h-px" style={{ background: 'rgba(245,240,232,0.16)' }} />
              </div>
              <ul>
                {PLATFORMS.map(({ name, href, Icon }, i) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 transition-colors"
                      style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(245,240,232,0.1)' }}
                    >
                      <span className="flex items-center gap-4">
                        <span className="ed-caption text-cream/30 w-6">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-cream/50 group-hover:text-gold-light transition-colors"><Icon /></span>
                        <span className="font-cormorant text-xl lg:text-2xl text-cream/85 group-hover:text-white-soft transition-colors">{name}</span>
                      </span>
                      <span className="ed-caption text-cream/30 group-hover:text-gold-light group-hover:translate-x-1 transition-all duration-300">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

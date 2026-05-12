import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SOCIAL_LINKS, DONATE_URL } from '@/lib/constants'

function MailIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d0018" />
    </svg>
  )
}

function SpotifyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  )
}

function SocialIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  switch (icon) {
    case 'instagram': return <InstagramIcon size={size} />
    case 'facebook': return <FacebookIcon size={size} />
    case 'youtube': return <YoutubeIcon size={size} />
    case 'spotify': return <SpotifyIcon size={size} />
    case 'tiktok': return <TikTokIcon size={size} />
    default: return null
  }
}

export default function Footer() {
  return (
    <footer style={{ background: '#0d0018', borderTop: '1px solid rgba(181,55,242,0.2)' }}>
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.5), transparent)' }} />

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Logo + tagline — using Logotitle.png like navbar */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image
                src="/logos/LOGO White.png"
                alt="Throneway"
                width={32}
                height={32}
                className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"
              />
              <div
                className="relative flex-shrink-0 overflow-hidden"
                style={{ width: '160px', height: '24px' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/Logotitle.png"
                  alt="Throneway"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '130px',
                    width: 'auto',
                    maxWidth: 'none',
                    transform: 'translate(-50%, -50%)',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.7,
                  }}
                />
              </div>
            </Link>
            <p className="font-instrument text-xs tracking-[0.15em] uppercase text-muted">
              Worship through the Arts
            </p>
            <p className="font-instrument text-sm text-muted leading-relaxed max-w-xs">
              An outreach ministry of Jesus Youth Canada. Building a culture of worship through music, art, and community.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <p className="font-instrument text-xs tracking-[0.2em] uppercase text-muted/60 mb-1">
              Navigate
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-instrument text-sm tracking-wide text-muted hover:text-cream transition-colors duration-200 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact + Socials */}
          <div className="flex flex-col gap-4">
            <p className="font-instrument text-xs tracking-[0.2em] uppercase text-muted/60 mb-1">
              Connect
            </p>
            <a
              href="mailto:contact@throneway.com"
              className="flex items-center gap-2 font-instrument text-sm text-muted hover:text-cream transition-colors duration-200 w-fit"
            >
              <MailIcon size={14} />
              contact@throneway.com
            </a>
            <p className="font-instrument text-sm text-muted">Toronto, ON, Canada</p>
            <div className="flex items-center gap-4 mt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="text-muted hover:text-cream transition-colors duration-200"
                >
                  <SocialIcon icon={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(181,55,242,0.12)' }}>
          <p className="font-instrument text-xs text-muted/60">
            &copy; 2026 Throneway Ministries. An outreach ministry of Jesus Youth Canada.
          </p>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-instrument text-xs tracking-[0.12em] uppercase transition-colors duration-200"
            style={{ color: 'rgba(181,55,242,0.8)' }}
          >
            Support the Album &rarr;
          </a>
        </div>
      </div>
    </footer>
  )
}

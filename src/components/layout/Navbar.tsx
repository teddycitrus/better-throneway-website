'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, DONATE_URL } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-void/95 backdrop-blur-md border-b border-white/8'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[70px] lg:h-[78px]">

            {/* Logo — crown icon + THRONEWAY wordmark from the brand PNG.
                The PNG has heavy padding around the text; we render it oversized
                inside an overflow-hidden window, centered both axes, so only the
                wordmark itself is visible. Exact same typeface as the hero logo. */}
            <Link href="/" className="flex items-center gap-1.5 group flex-shrink-0">
              <Image
                src="/logos/LOGO White.png"
                alt="Throneway"
                width={48}
                height={48}
                className="w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0"
              />
              <div
                className="hidden sm:block relative flex-shrink-0 overflow-hidden"
                style={{ width: '200px', height: '30px' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/Logotitle.png"
                  alt="Throneway"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '160px',
                    width: 'auto',
                    maxWidth: 'none',
                    transform: 'translate(-50%, -50%)',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.95,
                  }}
                />
              </div>
            </Link>

            {/* Desktop Nav — centered */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-instrument text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 relative group ${
                      isActive ? 'text-white-soft' : 'text-muted hover:text-white-soft'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-purple-vivid transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Donate + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center font-instrument text-[10px] font-semibold uppercase tracking-[0.2em] px-5 py-2.5 text-white-soft transition-colors duration-300 hover:bg-purple-vivid hover:border-purple-vivid"
                style={{ border: '1px solid rgba(245,240,232,0.4)' }}
              >
                Donate
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-cream/80 hover:text-cream transition-colors p-2 -mr-1"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-void/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logos/LOGO White.png" alt="Throneway" width={40} height={40} className="w-9 h-9 object-contain" />
              <span className="font-cormorant font-bold text-2xl text-white-soft tracking-[0.02em] uppercase">Throneway</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-cream/70 hover:text-cream transition-colors p-2 -mr-2" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-cormorant text-5xl font-light leading-none tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-white-soft' : 'text-white/40 hover:text-white-soft'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center font-instrument text-xs font-semibold uppercase tracking-[0.18em] py-4 text-ink bg-white-soft transition-colors duration-300 hover:bg-purple-vivid hover:text-white"
          >
            Donate
          </a>
        </div>
      </div>
    </>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ASSOCIATIONS = [
  { name: 'Jesus Youth Canada', logo: '/logos/JY Logo.png', href: 'https://jesusyouth.ca', className: 'brightness-0' },
  { name: 'Archdiocese of Toronto', logo: '/logos/arch-toronto-transparent.png', href: 'https://www.archtoronto.org', className: '' },
  { name: 'Vocations Toronto', logo: '/logos/vocations-toronto.png', href: 'https://www.vocationstoronto.ca', className: '' },
  { name: 'Office of Catholic Youth', logo: '/logos/ocy_transparent.png', href: 'https://ocytoronto.org/', className: '' },
]

export default function WhoWeAre() {
  return (
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
              <p className="section-label mb-4">Who We Are</p>
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
                Throneway is a Catholic outreach ministry of Jesus Youth Canada dedicated to building a culture of worship through the arts. Through music, visual art, digital media, and live events, we strive to proclaim the Kingdom of God and build a community united in faith.
              </p>
              <p className="font-instrument text-void/55 leading-relaxed text-base lg:text-lg">
                Based in Toronto, we&apos;ve held Catholic conferences, praise and worship concerts, adoration nights, and collaborated with ministries across the Archdiocese — all united by the conviction that beauty leads to God.
              </p>
            </div>

            {/* In Association With */}
            <div className="pt-5" style={{ borderTop: '1px solid rgba(31,31,34,0.1)' }}>
              <p className="section-label mb-6">In Association With</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ASSOCIATIONS.map((org) => (
                  <a
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 py-4 px-2 rounded-sm transition-all duration-200 hover:bg-black/5 group"
                    style={{ border: '1px solid rgba(31,31,34,0.1)' }}
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={56}
                      height={56}
                      className={`h-12 w-auto object-contain transition-opacity group-hover:opacity-100 opacity-70 ${org.className}`}
                    />
                    <span className="font-instrument text-[10px] tracking-[0.08em] text-center text-void/60 leading-tight group-hover:text-void/90 transition-colors">
                      {org.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Published In — Catholic Register */}
            <div className="pt-5" style={{ borderTop: '1px solid rgba(31,31,34,0.1)' }}>
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(31,31,34,0.4) 100%)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

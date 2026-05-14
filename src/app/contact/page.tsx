'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

const SUBJECTS = [
  'General Inquiry',
  'Events & Booking',
  'Press & Media',
  'Volunteer with Us',
  'Prayer Request',
  'Other',
]

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'instagram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
  if (icon === 'facebook') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
  if (icon === 'youtube') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
  if (icon === 'spotify') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
  if (icon === 'tiktok') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  )
  return null
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: SUBJECTS[0], message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulated submit — connect to Formspree or similar service
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  const inputClass = `
    w-full font-instrument text-sm text-void bg-white rounded-sm px-4 py-3
    border border-void/15 outline-none transition-all duration-200
    placeholder:text-void/30 focus:border-purple-vivid focus:ring-1 focus:ring-purple-vivid/30
  `

  return (
    <main>
      {/* Hero header */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #1f1f22 0%, #0d0018 100%)' }}
      >
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: '400px', background: 'radial-gradient(ellipse at 50% 0%, rgba(181,55,242,0.15) 0%, transparent 65%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(181,55,242,0.3), transparent)' }} />

        <div className="relative max-w-[900px] mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <p className="section-label">Contact</p>
            <h1
              className="font-nunito font-extrabold text-white-soft leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Get in Touch
            </h1>
            <p className="font-instrument text-cream/60 text-lg leading-relaxed max-w-xl">
              Whether you have a question, want to get involved, or just want to say hello - we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="relative py-16 lg:py-24" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact form (3/5) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex flex-col items-start gap-5 py-12">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(181,55,242,0.1)', border: '1px solid rgba(181,55,242,0.3)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B537F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="font-nunito font-extrabold text-void" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
                    Message sent!
                  </h2>
                  <p className="font-instrument text-void/65 text-lg leading-relaxed max-w-md">
                    Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: SUBJECTS[0], message: '' }) }}
                    className="font-instrument text-sm tracking-[0.1em] uppercase transition-colors duration-200 mt-2"
                    style={{ color: '#B537F2' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-instrument text-xs tracking-[0.12em] uppercase text-void/55">
                        Name <span style={{ color: '#B537F2' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-instrument text-xs tracking-[0.12em] uppercase text-void/55">
                        Email <span style={{ color: '#B537F2' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-instrument text-xs tracking-[0.12em] uppercase text-void/55">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-instrument text-xs tracking-[0.12em] uppercase text-void/55">
                      Message <span style={{ color: '#B537F2' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ resize: 'vertical', minHeight: '140px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-fit mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info (2/5) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-2 flex flex-col gap-8 lg:pt-1"
            >
              <div>
                <p className="section-label mb-5">Contact Info</p>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:contact@throneway.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-purple-vivid/10"
                      style={{ background: 'rgba(181,55,242,0.06)', border: '1px solid rgba(181,55,242,0.15)' }}>
                      <Mail size={14} style={{ color: '#B537F2' }} />
                    </div>
                    <div>
                      <p className="font-instrument text-xs tracking-[0.1em] uppercase text-void/40 mb-0.5">Email</p>
                      <p className="font-instrument text-sm text-void/80 group-hover:text-void transition-colors">contact@throneway.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(181,55,242,0.06)', border: '1px solid rgba(181,55,242,0.15)' }}>
                      <MapPin size={14} style={{ color: '#B537F2' }} />
                    </div>
                    <div>
                      <p className="font-instrument text-xs tracking-[0.1em] uppercase text-void/40 mb-0.5">Location</p>
                      <p className="font-instrument text-sm text-void/80">Toronto, ON, Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(181,55,242,0.06)', border: '1px solid rgba(181,55,242,0.15)' }}>
                      <Clock size={14} style={{ color: '#B537F2' }} />
                    </div>
                    <div>
                      <p className="font-instrument text-xs tracking-[0.1em] uppercase text-void/40 mb-0.5">Response time</p>
                      <p className="font-instrument text-sm text-void/80">Within 1–2 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'rgba(31,31,34,0.1)' }} />

              {/* Social */}
              <div>
                <p className="section-label mb-5">Follow Along</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map(social => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      title={social.platform}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: 'rgba(181,55,242,0.06)',
                        border: '1px solid rgba(181,55,242,0.15)',
                        color: 'rgba(31,31,34,0.6)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(181,55,242,0.12)'
                        e.currentTarget.style.borderColor = 'rgba(181,55,242,0.35)'
                        e.currentTarget.style.color = '#B537F2'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(181,55,242,0.06)'
                        e.currentTarget.style.borderColor = 'rgba(181,55,242,0.15)'
                        e.currentTarget.style.color = 'rgba(31,31,34,0.6)'
                      }}
                    >
                      <SocialIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'rgba(31,31,34,0.1)' }} />

              {/* Throneway Heights CTA */}
              <div
                className="rounded-sm p-5"
                style={{ background: 'rgba(181,55,242,0.05)', border: '1px solid rgba(181,55,242,0.15)' }}
              >
                <p className="font-nunito font-bold text-void text-base mb-2">Join Us in Person</p>
                <p className="font-instrument text-void/60 text-sm leading-relaxed mb-4">
                  Throneway Heights meets every other Friday, 7–9 PM at St. Gregory&apos;s Parish, Etobicoke. Open to all 18+.
                </p>
                <a
                  href="/events"
                  className="font-instrument text-xs tracking-[0.15em] uppercase transition-colors duration-200"
                  style={{ color: '#B537F2' }}
                >
                  See upcoming events &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

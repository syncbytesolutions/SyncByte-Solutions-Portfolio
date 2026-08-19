'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send, CheckCircle2, MapPin, Phone, MessageSquare } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/brand-icons'
import { motion } from 'framer-motion'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="relative overflow-hidden aurora-bg pt-32 pb-28 min-h-screen">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      {/* Orbs */}
      <div aria-hidden className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 65%)' }} />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 65%)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-badge-dark mb-5 inline-flex">
            <MessageSquare size={11} />
            Connect With Us
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            Have a complex project in mind? Reach out to our engineering team to discuss how
            we can partner to build your future.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email */}
            <a
              href="mailto:info@syncbytesolutions.com"
              className="group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.06) 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)', boxShadow: '0 4px 16px rgba(124,58,237,0.4)' }}
              >
                <Mail size={20} className="text-white" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email us</p>
                <p className="mt-0.5 font-medium text-slate-200 transition-colors group-hover:text-violet-300">
                  info@syncbytesolutions.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div
              className="flex items-center gap-4 rounded-2xl p-5"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.06) 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: 'linear-gradient(135deg, #6d28d9, #3b0764)', boxShadow: '0 4px 16px rgba(109,40,217,0.4)' }}
              >
                <MapPin size={20} className="text-white" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Location</p>
                <p className="mt-0.5 font-medium text-slate-200">Sri Lanka</p>
              </div>
            </div>

            {/* Social links */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.06) 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Follow us</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-violet-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                  style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(139,92,246,0.3)' }}
                >
                  <LinkedinIcon size={22} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-violet-300 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                  style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(139,92,246,0.3)' }}
                >
                  <GithubIcon size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl p-8"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(139,92,246,0.08) 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Inner top glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="name" type="text" placeholder="Your name" dark />
                <Field label="Email Address" id="email" type="email" placeholder="you@example.com" dark />
              </div>
              <div className="mt-5">
                <Field label="Subject" id="subject" type="text" placeholder="How can we help?" dark />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-200 placeholder:text-slate-600 focus:ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    resize: 'none',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.2)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <button
                type="submit"
                className="shimmer-btn gradient-purple-vibrant mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 font-sans text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-900/50"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent! We'll be in touch soon.
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, type, placeholder, dark }: {
  label: string; id: string; type: string; placeholder: string; dark?: boolean
}) {
  const inputStyle = dark ? {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(139,92,246,0.2)',
    color: '#e2e8f0',
  } : {}

  return (
    <div>
      <label htmlFor={id} className={`mb-2 block text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${dark ? 'placeholder:text-slate-600 text-slate-200' : 'placeholder:text-slate-400 text-slate-800 border border-slate-200 bg-white/60 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20'}`}
        style={inputStyle}
        onFocus={(e) => {
          if (dark) {
            e.target.style.borderColor = 'rgba(139,92,246,0.6)'
            e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)'
          }
        }}
        onBlur={(e) => {
          if (dark) {
            e.target.style.borderColor = 'rgba(139,92,246,0.2)'
            e.target.style.boxShadow = 'none'
          }
        }}
      />
    </div>
  )
}

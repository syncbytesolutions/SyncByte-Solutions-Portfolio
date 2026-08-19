'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, ShieldCheck } from 'lucide-react'
import { values } from '@/lib/site-data'

export function About() {
  return (
    <section className="relative overflow-hidden bg-white aurora-light pt-32 pb-28 min-h-screen">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)' }} />
      <div aria-hidden className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 65%)' }} />

      {/* 3D decorative shapes */}
      <div className="pointer-events-none absolute right-10 top-40 hidden xl:block opacity-80">
        <AboutGem />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-badge mb-5 inline-flex">
            <Target size={11} />
            Corporate Overview
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About{' '}
            <span className="gradient-text">SyncByte</span>
            <br />Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500">
            A premier engineering and design firm dedicated to architecting enterprise-grade digital
            solutions that drive global business transformation.
          </p>
        </motion.div>

        {/* Mission statement card */}
        <motion.div
          className="mx-auto mt-14 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-3xl p-[1px]"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(99,102,241,0.2), rgba(124,58,237,0.5))' }}
          >
            <div className="relative rounded-3xl bg-white px-10 py-9 text-center"
              style={{ boxShadow: '0 8px 40px rgba(124,58,237,0.1)' }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.06) 0%, transparent 60%)' }} />
              <Eye size={28} className="mx-auto text-violet-600 relative z-10" />
              <p className="font-caps mt-4 text-xs font-semibold text-violet-600 relative z-10">Our Mission</p>
              <p className="font-heading relative z-10 mt-4 text-xl font-semibold leading-relaxed text-balance text-slate-800 sm:text-2xl">
                To deliver intelligent, scalable digital solutions that{' '}
                <span className="gradient-text font-bold">connect businesses</span> with their future.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group relative overflow-hidden rounded-2xl p-6"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(99,102,241,0.08) 100%)',
                  border: '1px solid rgba(124,58,237,0.2)',
                }}
              >
                <value.icon size={20} className="text-violet-600" />
              </div>
              <h3 className="font-heading mt-5 text-base font-semibold text-slate-800">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.description}</p>
            </motion.article>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { value: '10+', label: 'Projects Delivered' },
            { value: '5', label: 'Visionary Founding Members'},
            { value: '2+', label: 'Years in Industry' },
            { value: '100%', label: 'Client Dedication' },
          ].map((s) => (
            <div key={s.label}
              className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-2xl p-6 text-center"
            >
              <p className="gradient-text font-heading text-4xl font-extrabold">{s.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AboutGem() {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: 200, height: 240 }}
    >
      <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gem-top" x1="50" y1="20" x2="150" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ede9fe" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="gem-left" x1="20" y1="80" x2="100" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id="gem-right" x1="100" y1="80" x2="180" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="gem-bottom" x1="50" y1="160" x2="150" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5b21b6" />
            <stop offset="1" stopColor="#2e1065" />
          </linearGradient>
          <filter id="gem-glow">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Glow */}
        <ellipse cx="100" cy="200" rx="60" ry="18" fill="rgba(124,58,237,0.25)" filter="url(#gem-glow)" />
        {/* Top facet */}
        <polygon points="100,20 160,80 100,100 40,80" fill="url(#gem-top)" />
        {/* Left facet */}
        <polygon points="40,80 100,100 60,200" fill="url(#gem-left)" />
        {/* Right facet */}
        <polygon points="100,100 160,80 140,200" fill="url(#gem-right)" />
        {/* Bottom facet */}
        <polygon points="60,200 100,100 140,200 100,220" fill="url(#gem-bottom)" />
        {/* Highlights */}
        <polygon points="100,20 140,75 100,90 60,75" fill="rgba(255,255,255,0.2)" />
        <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Sparkle */}
        <motion.g
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          style={{ transformOrigin: '68px 48px' }}
        >
          <line x1="68" y1="42" x2="68" y2="54" stroke="white" strokeWidth="1.5" />
          <line x1="62" y1="48" x2="74" y2="48" stroke="white" strokeWidth="1.5" />
        </motion.g>
      </svg>
    </motion.div>
  )
}

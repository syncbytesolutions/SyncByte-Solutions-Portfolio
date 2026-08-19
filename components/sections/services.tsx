'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { services } from '@/lib/site-data'

export function Services() {
  return (
    <section className="relative overflow-hidden aurora-bg pt-32 pb-28 min-h-screen">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      {/* Gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(154, 76, 170, 0.3) 0%, transparent 65%)' }} />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(176, 74, 226, 0.25) 0%, transparent 65%)' }} />

      {/* 3D floating accent */}
      <div className="pointer-events-none absolute right-10 top-24 opacity-60 hidden lg:block">
        <ServiceOrb />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-badge-dark mb-5 inline-flex">
            <Zap size={11} />
            Capabilities
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What We Build <span className="gradient-text"></span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            From concept to deployment, we build digital products that scale with your ambition.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="premium-card group relative overflow-hidden rounded-2xl p-7"
            >
              {/* Card top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

              {/* Icon */}
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(195, 114, 239, 0.3) 0%, rgba(208, 77, 220, 0.31) 100%)', border: '1px solid rgba(139,92,246,0.35)' }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(135deg, rgba(197, 107, 227, 0.5) 0%, rgba(208, 77, 220, 0.31) 100%)' }} />
                <service.icon size={24} className="relative z-10 text-violet-300 transition-colors duration-300 group-hover:text-white" />
              </div>

              {/* Number */}
              <span className="absolute right-6 top-6 font-mono text-5xl font-black text-white/[0.04] select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="font-heading mt-6 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{service.description}</p>

              {/* Bottom hover line */}
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom section divider */}
        <motion.div
          className="mx-auto mt-20 max-w-xs section-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  )
}

function ServiceOrb() {
  return (
    <motion.div
      className="float-slow"
      style={{ width: 200, height: 200 }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="svc-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="orb-fill" cx="40%" cy="35%">
            <stop stopColor="#c4b5fd" />
            <stop offset="0.6" stopColor="#b057dfff" />
            <stop offset="1" stopColor="#b834d5ff" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="70" fill="url(#orb-fill)" filter="url(#svc-glow)" opacity="0.85" />
        <ellipse cx="78" cy="76" rx="24" ry="14" fill="rgba(255,255,255,0.25)" />
        {/* Rings */}
        <ellipse cx="100" cy="100" rx="90" ry="28" stroke="rgba(159, 81, 218, 0.5)" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="100" rx="90" ry="28" stroke="rgba(205, 100, 226, 0.2)" strokeWidth="3" fill="none"
          strokeDasharray="12 8" />
        {/* Satellite dot */}
        <motion.circle
          cx="190" cy="100" r="6"
          fill="rgba(196,181,253,0.9)"
          filter="url(#svc-glow)"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>
    </motion.div>
  )
}

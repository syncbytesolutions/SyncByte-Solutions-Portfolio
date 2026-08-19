'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden aurora-bg"
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-60" />
      </div>

      {/* Large blurred orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.45) 0%, transparent 70%)' }}
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%)' }}
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 3D Floating geometry on right */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 xl:block">
        <FloatingGeometry />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span className="eyebrow-badge-dark">
              <Zap size={11} />
              Smart Solutions. Synced Future.
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
              Turning ideas
            <br />
            <span className="gradient-text-animated">into intelligent software</span>
            <br />
          
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            From Sri Lanka to the world — SyncByte Solutions delivers
            intelligent, scalable applications, IoT systems, and design
            experiences that connect businesses with their future.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link
              href="/portfolio"
              className="shimmer-btn gradient-purple-vibrant glow-violet-sm group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-sans text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:glow-violet"
            >
              View Our Work
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-sans text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-white/10"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 flex flex-wrap gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { value: '10+', label: 'Projects Shipped' },
              { value: '2+', label: 'Years of Excellence' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <p className="stat-number">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b14] to-transparent" />
    </section>
  )
}

/* ─── Floating 3D Geometry ─────────────────────────────────────── */
function FloatingGeometry() {
  return (
    <motion.div
      className="relative h-[520px] w-[480px]"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          {/* Main violet gradients */}
          <linearGradient id="cube-top" x1="240" y1="80" x2="380" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c4b5fd" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="cube-left" x1="100" y1="170" x2="240" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id="cube-right" x1="240" y1="170" x2="380" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#5b21b6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-sm" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Reflection */}
          <linearGradient id="reflect" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>

          {/* Clip for reflection */}
          <clipPath id="cube-clip">
            <polygon points="240,310 100,230 100,170 240,250 380,170 380,230" />
          </clipPath>
        </defs>

        {/* ── Background glow blobs ── */}
        <ellipse cx="240" cy="300" rx="160" ry="90" fill="rgba(109,40,217,0.22)" filter="url(#glow)" />

        {/* ── Main 3D Cube ── */}
        {/* Top face */}
        <polygon
          points="240,80 380,170 240,250 100,170"
          fill="url(#cube-top)"
          filter="url(#glow-sm)"
        />
        {/* Left face */}
        <polygon
          points="100,170 240,250 240,370 100,280"
          fill="url(#cube-left)"
        />
        {/* Right face */}
        <polygon
          points="240,250 380,170 380,280 240,370"
          fill="url(#cube-right)"
        />

        {/* Edge highlights */}
        <line x1="240" y1="80" x2="380" y2="170" stroke="rgba(196,181,253,0.8)" strokeWidth="1.5" />
        <line x1="240" y1="80" x2="100" y2="170" stroke="rgba(196,181,253,0.5)" strokeWidth="1" />
        <line x1="240" y1="80" x2="240" y2="250" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />

        {/* Bottom edge glow */}
        <line x1="100" y1="280" x2="240" y2="370" stroke="rgba(124,58,237,0.6)" strokeWidth="1.5" />
        <line x1="380" y1="280" x2="240" y2="370" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" />
        <line x1="100" y1="280" x2="100" y2="170" stroke="rgba(109,40,217,0.4)" strokeWidth="1" />
        <line x1="380" y1="280" x2="380" y2="170" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />

        {/* ── Ground reflection ── */}
        <polygon
          points="240,390 380,310 380,340 240,420 100,340 100,310"
          fill="url(#reflect)"
          opacity="0.25"
        />

        {/* ── Orbiting small sphere ── */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '240px 200px' }}
        >
          <circle cx="390" cy="160" r="14" fill="rgba(196,181,253,0.9)" filter="url(#glow-sm)" />
          <circle cx="390" cy="160" r="7" fill="white" opacity="0.6" />
        </motion.g>

        {/* ── Orbiting small cube ── */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '240px 220px' }}
        >
          <rect x="68" y="200" width="24" height="24" rx="4"
            fill="rgba(79,70,229,0.8)"
            filter="url(#glow-sm)"
            transform="rotate(15 80 212)"
          />
        </motion.g>

        {/* ── Floating dots ── */}
        {[
          { cx: 170, cy: 110, r: 4, delay: 0 },
          { cx: 310, cy: 90, r: 3, delay: 1 },
          { cx: 410, cy: 240, r: 5, delay: 0.5 },
          { cx: 80, cy: 320, r: 3, delay: 1.5 },
          { cx: 360, cy: 390, r: 4, delay: 0.8 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="rgba(167,139,250,0.8)"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 3, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* ── Scan line effect ── */}
        <motion.line
          x1="80" y1="170" x2="400" y2="170"
          stroke="rgba(139,92,246,0.5)"
          strokeWidth="1"
          strokeDasharray="8 6"
          animate={{ opacity: [0, 0.7, 0], y: [0, 200, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />

        {/* ── Corner brackets ── */}
        <g stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" fill="none">
          <path d="M60 80 L60 100 M60 80 L80 80" />
          <path d="M420 80 L420 100 M420 80 L400 80" />
          <path d="M60 440 L60 420 M60 440 L80 440" />
          <path d="M420 440 L420 420 M420 440 L400 440" />
        </g>
      </svg>
    </motion.div>
  )
}

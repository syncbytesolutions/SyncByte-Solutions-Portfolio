'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { GithubIcon } from '@/components/brand-icons'
import { projects, type Category } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { ExternalLink, Layers } from 'lucide-react'

const filters = ['All', 'Web App', 'Mobile App'] as const
type Filter = (typeof filters)[number]

export function Portfolio() {
  const [active, setActive] = useState<Filter>('All')

  const visible = projects.filter(
    (p) => active === 'All' || p.category === (active as Category),
  )

  return (
    <section className="relative overflow-hidden aurora-bg pt-32 pb-28 min-h-screen">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      {/* Orbs */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 65%)' }} />

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
            <Layers size={11} />
            Featured Work
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            Explore a curated selection of mission-critical applications and systems we have
            successfully architected and deployed for clients worldwide.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-6 py-2.5 font-sans text-sm font-medium transition-all duration-300',
                active === f
                  ? 'gradient-purple-vibrant text-white shadow-lg shadow-violet-900/50 scale-105'
                  : 'border border-white/15 bg-white/5 text-slate-400 hover:border-violet-500/40 hover:text-white hover:bg-white/10',
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={`${project.title}-${project.category}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.06) 100%)',
                  border: '1px solid rgba(139,92,246,0.18)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                {/* Image with overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-transparent to-transparent opacity-60" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-violet-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Category badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-violet-300 backdrop-blur-sm border border-violet-500/30">
                    {project.category}
                  </span>
                  {/* Hover links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm border border-white/20 transition-transform duration-200 hover:scale-110"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-white">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-2.5 py-0.5 text-xs font-medium text-violet-300"
                        style={{
                          background: 'rgba(124,58,237,0.15)',
                          border: '1px solid rgba(139,92,246,0.3)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Animated underline on hover */}
                  <div className="mt-5 h-px w-0 bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080b14] to-transparent" />
    </section>
  )
}

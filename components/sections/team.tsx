'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LinkedinIcon } from '@/components/brand-icons'
import { team } from '@/lib/site-data'
import { Users } from 'lucide-react'

const cardAccents = [
  { from: '#7c3aed', to: '#4c1d95', ring: 'rgba(124,58,237,0.5)' },
  { from: '#4f46e5', to: '#312e81', ring: 'rgba(79,70,229,0.5)' },
  { from: '#a21caf', to: '#701a75', ring: 'rgba(162,28,175,0.5)' },
  { from: '#be185d', to: '#881337', ring: 'rgba(190,24,93,0.5)' },
  { from: '#0369a1', to: '#0c4a6e', ring: 'rgba(3,105,161,0.5)' },
]

export function Team() {
  return (
    <section className="relative overflow-hidden aurora-bg pt-32 pb-28 min-h-screen">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      {/* Orbs */}
      <div aria-hidden className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.28) 0%, transparent 65%)' }} />
      <div aria-hidden className="pointer-events-none absolute right-1/4 bottom-20 h-64 w-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, transparent 65%)' }} />

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
            <Users size={11} />
            Leadership
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            The seasoned engineers and strategic minds driving innovation and
            executing SyncByte Solutions&apos; vision.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((member, i) => {
            const accent = cardAccents[i % cardAccents.length]
            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl text-center"
                style={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(139,92,246,0.07) 100%)',
                  border: '1px solid rgba(139,92,246,0.18)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                {/* Top colored gradient bar */}
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                />

                {/* Inner top glow on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(180deg, ${accent.from}22 0%, transparent 100%)` }}
                />

                <div className="relative p-7">
                  {/* Photo ring */}
                  <div className="relative mx-auto h-28 w-28">
                    {/* Glow ring */}
                    <div
                      className="absolute -inset-1 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-sm"
                      style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                    />
                    <div
                      className="relative h-28 w-28 overflow-hidden rounded-full"
                      style={{ border: `2px solid ${accent.ring}` }}
                    >
                      <Image
                        src={member.photo}
                        alt={`Portrait of ${member.name}`}
                        fill
                        sizes="112px"
                        className="object-cover object-top"
                      />
                      {/* LinkedIn overlay */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `${accent.from}cc` }}
                      >
                        <LinkedinIcon size={26} className="text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-heading mt-5 flex min-h-[3rem] flex-col items-center justify-center text-base font-semibold leading-snug text-white">
                    {member.name.split(' ').map((word) => (
                      <span key={word}>{word}</span>
                    ))}
                  </h3>

                  {/* Role badge */}
                  <div className="mt-3">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: `${accent.from}22`,
                        border: `1px solid ${accent.from}55`,
                        color: '#c4b5fd',
                      }}
                    >
                      {member.role}
                    </span>
                  </div>

                  {/* Animated bottom border */}
                  <div
                    className="mx-auto mt-5 h-px w-0 transition-all duration-500 group-hover:w-3/4"
                    style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                  />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080b14] to-transparent" />
    </section>
  )
}

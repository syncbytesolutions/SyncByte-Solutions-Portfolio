'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Briefcase,
  Heart,
  Zap,
  Coffee,
  Globe,
  TrendingUp,
  CheckCircle,
  X,
  Upload,
  User,
  Mail,
  Phone,
  Link2,
  ExternalLink,
} from 'lucide-react'
import { jobOpenings, applicationSteps } from '@/lib/site-data'

const deptColors: Record<string, { bg: string; text: string; border: string }> = {
  Engineering: { bg: 'rgba(124,58,237,0.15)', text: '#a78bfa', border: 'rgba(139,92,246,0.35)' },
  Design:      { bg: 'rgba(236,72,153,0.12)', text: '#f9a8d4', border: 'rgba(236,72,153,0.3)' },
  Operations:  { bg: 'rgba(6,182,212,0.12)',  text: '#67e8f9', border: 'rgba(6,182,212,0.3)'  },
  Business:    { bg: 'rgba(16,185,129,0.12)', text: '#6ee7b7', border: 'rgba(16,185,129,0.3)' },
  Marketing:   { bg: 'rgba(251,146,60,0.12)', text: '#fdba74', border: 'rgba(251,146,60,0.3)'  },
}

const perks = [
  { icon: Heart,      label: 'Health & Wellbeing',  desc: 'Comprehensive health coverage for you and your family.' },
  { icon: Coffee,     label: 'Flexible Hours',       desc: 'Work when you are most productive. We trust our team.' },
  { icon: TrendingUp, label: 'Growth Budget',        desc: 'Annual learning & development allowance for courses and conferences.' },
  { icon: Globe,      label: 'Remote Friendly',      desc: 'Hybrid and remote options available for most roles.' },
  { icon: Zap,        label: 'Latest Tech Stack',    desc: 'Work with cutting-edge tools and modern engineering practices.' },
  { icon: Briefcase,  label: 'Equity Opportunities', desc: 'Performance-based equity participation as the company grows.' },
]

/* ── Application Modal ─────────────────────────────────────────── */
function ApplicationModal({
  jobTitle,
  onClose,
}: {
  jobTitle: string
  onClose: () => void
}) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', linkedin: '', portfolio: '', coverLetter: '',
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleField(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) setCvFile(e.target.files[0])
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!cvFile) {
      setError('Please attach your CV')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      if (form.linkedin) formData.append('linkedin', form.linkedin)
      if (form.portfolio) formData.append('portfolio', form.portfolio)
      formData.append('coverLetter', form.coverLetter)
      formData.append('jobTitle', jobTitle)
      formData.append('cvFile', cvFile)

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(4,6,14,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-[1px]"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.6), rgba(99,102,241,0.25), rgba(124,58,237,0.5))' }}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-3xl p-7 sm:p-9"
          style={{ background: 'linear-gradient(160deg, #0c0e1e 0%, #0f0a24 100%)' }}
        >
          {/* Inner top glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)' }} />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>

          {submitted ? (
            /* ── Success state ── */
            <div className="relative flex flex-col items-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.15))', border: '1px solid rgba(16,185,129,0.4)' }}
              >
                <CheckCircle size={30} className="text-emerald-400" />
              </div>
              <h3 className="font-heading mt-5 text-2xl font-bold text-white">Application Received!</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                Thank you for applying for the <strong className="text-violet-300">{jobTitle}</strong> position. 
                Our HR team will review your CV and get back to you within 3 business days.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-7 rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)', boxShadow: '0 4px 20px rgba(124,58,237,0.4)' }}
              >
                Done
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <div className="relative">
              <div className="mb-7">
                <p className="font-caps text-xs text-violet-400">Application Form</p>
                <h2 className="font-heading mt-2 text-2xl font-bold text-white">{jobTitle}</h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  Fill in your details below. Your application will be sent directly to our HR team for review.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField icon={User} label="Full Name *" id="name" type="text"
                    placeholder="Your full name" value={form.name} onChange={handleField} required />
                  <FormField icon={Mail} label="Email Address *" id="email" type="email"
                    placeholder="you@example.com" value={form.email} onChange={handleField} required />
                </div>

                {/* Phone + LinkedIn */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField icon={Phone} label="Phone Number *" id="phone" type="tel"
                    placeholder="+94 77 000 0000" value={form.phone} onChange={handleField} required />
                  <FormField icon={Link2} label="LinkedIn Profile" id="linkedin" type="url"
                    placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={handleField} />
                </div>

                {/* Portfolio */}
                <FormField icon={ExternalLink} label="Portfolio / GitHub URL" id="portfolio" type="url"
                  placeholder="github.com/yourname" value={form.portfolio} onChange={handleField} />

                {/* CV Upload */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    CV / Resume *
                  </label>
                  <label
                    htmlFor="cv-upload"
                    className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl p-7 text-center transition-all duration-300"
                    style={{
                      background: cvFile ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.03)',
                      border: cvFile ? '1px solid rgba(139,92,246,0.5)' : '1.5px dashed rgba(139,92,246,0.3)',
                    }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(124,58,237,0.25)', border: '1px solid rgba(139,92,246,0.4)' }}
                    >
                      {cvFile ? <CheckCircle size={20} className="text-emerald-400" /> : <Upload size={20} className="text-violet-300" />}
                    </div>
                    {cvFile ? (
                      <div>
                        <p className="text-sm font-semibold text-emerald-400">{cvFile.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{(cvFile.size / 1024).toFixed(0)} KB — click to replace</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-slate-300">Drop your CV here or <span className="text-violet-400">browse</span></p>
                        <p className="mt-0.5 text-xs text-slate-600">PDF, DOCX up to 10 MB</p>
                      </div>
                    )}
                    <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={handleFile} />
                  </label>
                  <p className="mt-2 text-xs text-slate-600">
                    PDF, DOC, DOCX up to 10MB.
                  </p>
                </div>

                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="mb-2 block text-sm font-medium text-slate-300">
                    Cover Letter / Message *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    rows={5}
                    placeholder={`Tell us why you're excited about the ${jobTitle} role and what makes you a great fit for SyncByte Solutions...`}
                    value={form.coverLetter}
                    onChange={handleField}
                    className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-200 placeholder:text-slate-600"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.12)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.2)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Info note & Error */}
                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-sm text-red-400">
                    {error}
                  </div>
                )}
                <div className="flex items-start gap-3 rounded-xl p-4"
                  style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}
                >
                  <Briefcase size={16} className="mt-0.5 shrink-0 text-violet-400" />
                  <p className="text-xs leading-relaxed text-slate-400">
                    Your application will be saved securely and reviewed by the founding team.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="shimmer-btn inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #7c3aed, #4f46e5)',
                    boxShadow: '0 6px 24px rgba(124,58,237,0.45)',
                  }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function FormField({
  icon: Icon, label, id, type, placeholder, value, onChange, required,
}: {
  icon: React.ElementType; label: string; id: string; type: string
  placeholder: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      <div className="relative">
        <Icon size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" />
        <input
          id={id} name={id} type={type} required={required}
          placeholder={placeholder} value={value} onChange={onChange}
          className="w-full rounded-xl py-3 pl-10 pr-4 text-sm text-slate-200 outline-none transition-all duration-200 placeholder:text-slate-600"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)' }}
          onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.12)' }}
          onBlur={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.2)'; e.target.style.boxShadow = 'none' }}
        />
      </div>
    </div>
  )
}

/* ── Main Careers Section ──────────────────────────────────────── */
export function Careers() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [applyFor, setApplyFor] = useState<string | null>(null)

  return (
    <>
      {/* Application Modal */}
      <AnimatePresence>
        {applyFor && (
          <ApplicationModal jobTitle={applyFor} onClose={() => setApplyFor(null)} />
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden aurora-bg pt-32 pb-28 min-h-screen">
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="grid-pattern absolute inset-0 opacity-40" />
        </div>

        {/* Gradient orbs */}
        <div aria-hidden className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.28) 0%, transparent 65%)' }} />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 65%)' }} />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* ── Hero Header ── */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow-badge-dark mb-5 inline-flex">
              <Briefcase size={11} />
              Join Our Team
            </span>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Build the <span className="gradient-text-animated">Future</span>
              <br />with Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              We are a team of engineers, designers, and strategists on a mission to build world-class
              digital products. If you thrive in a fast-moving, collaborative environment — we want to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {[
                { value: '6', label: 'Open Positions' },
                { value: '5+', label: 'Team Members' },
                { value: 'Remote', label: 'Friendly Culture' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="stat-number text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Why SyncByte — Perks ── */}
          <motion.div className="mt-20"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="mb-10 text-center">
              <h2 className="font-heading text-3xl font-bold text-white">
                Why <span className="gradient-text">SyncByte?</span>
              </h2>
              <p className="mt-3 text-sm text-slate-400">We invest in our people as much as we invest in our products.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk, i) => (
                <motion.div key={perk.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.07) 100%)', border: '1px solid rgba(139,92,246,0.18)' }}
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(79,70,229,0.2))', border: '1px solid rgba(139,92,246,0.3)' }}
                  >
                    <perk.icon size={18} className="text-violet-300" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{perk.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Open Positions ── */}
          <motion.div className="mt-20"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="mb-10 text-center">
              <h2 className="font-heading text-3xl font-bold text-white">
                Open <span className="gradient-text">Positions</span>
              </h2>
              <p className="mt-3 text-sm text-slate-400">Find your perfect role and start your journey with us.</p>
            </div>

            <div className="flex flex-col gap-4">
              {jobOpenings.map((job, i) => {
                const isOpen = expanded === job.title
                const color = deptColors[job.department] ?? deptColors.Engineering

                return (
                  <motion.div key={job.title}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="overflow-hidden rounded-2xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.07) 100%)',
                      border: isOpen ? '1px solid rgba(139,92,246,0.45)' : '1px solid rgba(139,92,246,0.18)',
                      boxShadow: isOpen ? '0 8px 32px rgba(124,58,237,0.2)' : '0 2px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* Header row */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setExpanded(isOpen ? null : job.title)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(isOpen ? null : job.title) } }}
                      className="flex w-full items-center gap-4 px-6 py-5 text-left"
                    >
                      <span className="hidden shrink-0 sm:inline-flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: color.bg, border: `1px solid ${color.border}` }}
                      >
                        <job.icon size={20} style={{ color: color.text }} />
                      </span>

                      <div className="flex-1 min-w-0">
                        <p className="font-heading text-base font-semibold text-white">{job.title}</p>
                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                          <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                            style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
                          >
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <MapPin size={11} /> {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock size={11} /> {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setApplyFor(job.title) }}
                          className="hidden sm:inline-flex shimmer-btn items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                          style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)', boxShadow: '0 4px 14px rgba(124,58,237,0.4)' }}
                        >
                          <Send size={12} /> Apply Now
                        </button>
                        <span className="text-slate-500">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </div>
                    </div>

                    {/* Expanded details */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="mb-5 h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />
                            <div className="grid gap-6 sm:grid-cols-2">
                              <div>
                                <p className="text-sm font-semibold text-slate-300">About this role</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{job.description}</p>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-300">Key Requirements</p>
                                <ul className="mt-2 flex flex-col gap-1.5">
                                  {job.requirements.map((req) => (
                                    <li key={req} className="flex items-center gap-2 text-sm text-slate-500">
                                      <CheckCircle size={13} className="shrink-0 text-violet-500" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            {/* Mobile apply button */}
                            <button
                              type="button"
                              onClick={() => setApplyFor(job.title)}
                              className="shimmer-btn mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white sm:hidden"
                              style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)' }}
                            >
                              <Send size={13} /> Apply Now
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ── Application Process ── */}
          <motion.div className="mt-24"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-bold text-white">
                Application <span className="gradient-text">Process</span>
              </h2>
              <p className="mt-3 text-sm text-slate-400">Our simple, transparent, and respectful hiring process.</p>
            </div>

            <div className="relative flex flex-col gap-0">
              <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px sm:block"
                style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.6), rgba(79,70,229,0.1))' }} />

              {applicationSteps.map((step, i) => (
                <motion.div key={step.number}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-5 pb-6"
                >
                  <div className="relative shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full font-mono text-sm font-bold text-white transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(79,70,229,0.3))',
                        border: '1px solid rgba(139,92,246,0.5)',
                        boxShadow: '0 0 20px rgba(124,58,237,0.2)',
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl p-5 transition-all duration-300 group-hover:border-violet-500/40"
                    style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.07) 100%)', border: '1px solid rgba(139,92,246,0.18)' }}
                  >
                    <p className="font-heading text-base font-semibold text-white">{step.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── CTA Banner ── */}
          <motion.div
            className="mt-16 overflow-hidden rounded-3xl p-[1px]"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.6), rgba(99,102,241,0.3), rgba(124,58,237,0.6))' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl px-8 py-12 text-center"
              style={{ background: 'linear-gradient(145deg, rgba(15,10,40,0.95), rgba(30,20,70,0.9))' }}
            >
              <div className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
              <div className="relative">
                <p className="font-caps text-xs font-semibold text-violet-400">Don&apos;t See a Perfect Fit?</p>
                <h3 className="font-heading mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Send Us an Open Application
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
                  We are always on the lookout for exceptional talent. If you believe you can contribute
                  to SyncByte Solutions&apos; mission, we would love to hear from you regardless of the role.
                </p>
                <button
                  type="button"
                  onClick={() => setApplyFor('Open Application')}
                  className="shimmer-btn mt-7 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed, #4f46e5)', boxShadow: '0 6px 24px rgba(124,58,237,0.45)' }}
                >
                  <Send size={16} />
                  Apply with Open Application
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080b14] to-transparent" />
      </section>
    </>
  )
}

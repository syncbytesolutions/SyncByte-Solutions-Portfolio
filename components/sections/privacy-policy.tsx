'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden bg-white aurora-light pt-32 pb-28">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-badge mb-5 inline-flex">
            <ShieldCheck size={11} />
            Legal
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="mt-5 text-sm text-slate-500">Last updated: [DATE]</p>
        </motion.div>

        <motion.div
          className="prose prose-slate mt-14 max-w-none text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <h2 className="font-heading text-xl font-semibold text-slate-800">1. Information We Collect</h2>
          <p>
            When you submit our contact form, we collect your name, email address, and message content.
            We do not collect any information beyond what you voluntarily provide.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">2. How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your inquiry and, where applicable,
            to follow up regarding our services. We do not sell or share your data with third parties.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">3. Data Storage</h2>
          <p>
            Contact form submissions are securely stored using Supabase. Data is retained only as long
            as necessary to respond to and resolve your inquiry.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">4. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at any time by
            contacting us at{' '}
            <a href="mailto:info@syncbytesolutions.com" className="text-violet-600 hover:underline">
              info@syncbytesolutions.com
            </a>.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">5. Contact Us</h2>
          <p>
            SyncByte Solutions (Pvt) Ltd — For any privacy-related questions, reach us at{' '}
            <a href="mailto:info@syncbytesolutions.com" className="text-violet-600 hover:underline">
              info@syncbytesolutions.com
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
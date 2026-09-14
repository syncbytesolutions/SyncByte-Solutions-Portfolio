'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export function TermsOfService() {
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
            Terms of <span className="gradient-text">Service</span>
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
          <h2 className="font-heading text-xl font-semibold text-slate-800">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using this website, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">
            2. Use of Site
          </h2>
          <p>
            You agree to use this site only for lawful purposes and in a way that does not
            infringe the rights of others.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">
            3. Intellectual Property
          </h2>
          <p>
            All content on this site, including text, graphics, and logos, is the property of
            SyncByte Solutions (Pvt) Ltd unless otherwise stated.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">
            4. Limitation of Liability
          </h2>
          <p>
            SyncByte Solutions (Pvt) Ltd is not liable for any damages arising from your use of
            this website.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">
            5. Governing Law
          </h2>
          <p>These terms are governed by the laws of Sri Lanka.</p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">
            6. Changes to Terms
          </h2>
          <p>
            We may update these terms at any time. Continued use of the site constitutes
            acceptance of the updated terms.
          </p>

          <h2 className="font-heading text-xl font-semibold text-slate-800">
            7. Contact
          </h2>
          <p>
            Questions about these Terms? Reach us at{' '}
            <a
              href="mailto:info@syncbytesolutions.com"
              className="text-violet-600 hover:underline"
            >
              info@syncbytesolutions.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import { LinkedinIcon, GithubIcon } from '@/components/brand-icons'
import { Logo } from '@/components/logo'
import { navLinks } from '@/lib/site-data'

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: '#06080f',
        borderTopColor: 'rgba(139,92,246,0.15)',
      }}
    >
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />

      {/* Background orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Logo wordmarkClassName="text-white" />

            <p className="font-caps mt-4 text-xs font-semibold text-violet-400">
              Smart Solutions. Synced Future.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Building intelligent, scalable digital products from Sri Lanka to
              the world.
            </p>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Footer navigation"
            className="md:justify-self-center"
          >
            <h3 className="font-heading text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-violet-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:justify-self-end">
            <h3 className="font-heading text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex gap-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-violet-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-white"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(139,92,246,0.25)',
                }}
              >
                <LinkedinIcon size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-violet-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-white"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(139,92,246,0.25)',
                }}
              >
                <GithubIcon size={18} />
              </a>

            </div>

            {/* Email */}
            <a
              href="mailto:info@syncbytesolutions.com"
              className="mt-4 inline-block text-sm text-slate-500 transition-colors hover:text-violet-400"
            >
              info@syncbytesolutions.com
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-900/60 to-transparent" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2026{' '}
            <span className="text-violet-500">
              SyncByte Solutions (Pvt) Ltd.
            </span>{' '}
            All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 hover:text-violet-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="text-xs text-slate-500 hover:text-violet-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
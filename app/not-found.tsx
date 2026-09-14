import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white aurora-light px-4 text-center">
      <span className="gradient-text font-heading text-7xl font-extrabold">
        404
      </span>

      <h1 className="font-heading mt-4 text-2xl font-semibold text-slate-800">
        Page not found
      </h1>

      <p className="mt-3 max-w-sm text-sm text-slate-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
      >
        Back to Home
      </Link>
    </main>
  )
}
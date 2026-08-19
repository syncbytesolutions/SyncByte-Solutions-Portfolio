import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow && (
        <p className="font-caps mb-3 text-xs font-semibold text-[#7C3AED]">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl',
          dark ? 'text-white' : 'text-[#111827]',
        )}
      >
        {title}
      </h2>
      <span className="gradient-purple mx-auto mt-4 block h-1 w-16 rounded-full" />
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed text-pretty',
            dark ? 'text-[#9CA3AF]' : 'text-[#6b7280]',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

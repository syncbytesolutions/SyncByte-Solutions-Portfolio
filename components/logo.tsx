import { cn } from '@/lib/utils'
import Image from 'next/image'

type LogoProps = {
  className?: string
  showWordmark?: boolean
  wordmarkClassName?: string
  markSize?: number
}

/**
 * SyncByte brand logo.
 */
export function Logo({
  className,
  showWordmark = true,
  wordmarkClassName,
  markSize = 36,
}: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark size={markSize} />
      {showWordmark && (
        <span
          className={cn(
            'font-heading text-xl font-bold tracking-tight',
            wordmarkClassName,
          )}
        >
          Sync<span className="gradient-text">Byte</span> Solutions
        </span>
      )}
    </span>
  )
}

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image
        src="/syncbyte-mark.png"
        alt="SyncByte Solutions logo mark"
        fill
        className="object-contain drop-shadow-none"
        priority
        sizes={`${size}px`}
      />
    </div>
  )
}

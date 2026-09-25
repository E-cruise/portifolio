import Image from 'next/image'

export function HeroPhoto() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-[var(--color-border)] sm:max-w-sm">
      <Image
        src="/photo.jpg"
        alt="Okello Eric Denis"
        fill
        sizes="(min-width: 640px) 384px, 320px"
        priority
        className="object-cover object-[center_25%] grayscale contrast-125"
      />
      <div className="absolute inset-0 mix-blend-color bg-[var(--color-accent)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
    </div>
  )
}

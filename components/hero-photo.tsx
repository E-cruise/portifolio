import Image from 'next/image'

export function HeroPhoto() {
  return (
    <div className="relative w-64 overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-lg sm:w-72 md:w-80 lg:w-96">
      <div className="relative aspect-[3/4]">
        <Image
          src="/photo.jpg"
          alt="Okello Eric Denis"
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, (min-width: 640px) 288px, 256px"
          priority
          className="object-cover object-[center_25%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
    </div>
  )
}

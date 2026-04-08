import Image from 'next/image'

interface PhoneMockupProps {
  screenshot: string
  alt: string
  className?: string
  priority?: boolean
}

export default function PhoneMockup({ screenshot, alt, className = '', priority = false }: PhoneMockupProps) {
  return (
    <div
      className={`relative rounded-[44px] overflow-hidden phone-glow ${className}`}
      style={{ background: '#0F1115', border: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255, 87, 34, 0.06), inset 0 1px 0 rgba(255,255,255,0.05)' }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black" style={{ width: '120px', height: '36px' }} />
      <Image src={screenshot} alt={alt} width={390} height={844} className="w-full h-auto block" priority={priority} unoptimized />
    </div>
  )
}

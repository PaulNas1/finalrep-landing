interface PhoneMockupProps {
  screenshot: string
  alt: string
  /** outer frame width in px */
  width?: number
  /** rounded corner radius of the frame */
  radius?: number
  className?: string
  style?: React.CSSProperties
  /** stronger shadow + orange edge glow (used by the front hero phone) */
  glow?: boolean
}

/** Phone frame with a screenshot inside, matching the design's mockups. */
export default function PhoneMockup({
  screenshot,
  alt,
  width,
  radius = 44,
  className = '',
  style,
  glow = false,
}: PhoneMockupProps) {
  const innerRadius = radius - 8
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: width ? `${width}px` : '100%',
        aspectRatio: '1180 / 2556',
        borderRadius: radius,
        padding: 9,
        background: 'linear-gradient(160deg,#222328,#0c0d10)',
        boxShadow: glow
          ? '0 50px 90px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.07),0 0 60px rgba(255,87,34,.12)'
          : '0 44px 80px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06)',
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={screenshot}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: innerRadius, display: 'block' }}
      />
    </div>
  )
}

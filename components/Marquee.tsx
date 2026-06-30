import { marqueeWords } from '@/lib/content'

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }} aria-hidden={ariaHidden || undefined}>
    {marqueeWords.map((w, i) => (
      <span
        key={i}
        className="fr-ot font-display"
        style={{ fontSize: 30, letterSpacing: '1.5px', padding: '0 38px' }}
      >
        {w}
      </span>
    ))}
  </div>
)

export default function Marquee() {
  return (
    <div
      style={{
        position: 'relative',
        padding: '26px 0',
        borderTop: '1px solid rgba(255,255,255,.06)',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        overflow: 'hidden',
        background: '#0C0D10',
      }}
    >
      <div className="anim-marquee" style={{ display: 'flex', width: 'max-content' }}>
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}

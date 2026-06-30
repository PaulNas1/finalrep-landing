import Reveal from './Reveal'
import PausingGif from './PausingGif'
import { movements } from '@/lib/content'

export default function MovementsSection() {
  return (
    <section id="movements" style={{ position: 'relative', padding: '100px 28px' }}>
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg,transparent,rgba(255,87,34,.04) 50%,transparent)',
        }}
      />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal
          className="fr-movements-head"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 54 }}
        >
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent,#FF5722)', marginBottom: 18 }}>
              Know the movement
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: 1, letterSpacing: '.5px' }}>
              Never guess
              <br />
              the form again.
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#A9AEB8', maxWidth: 380 }}>
            Every exercise ships with a looping demo so you load the bar knowing exactly how the rep should look.
          </p>
        </Reveal>

        <div className="fr-movements-grid">
          {movements.map((m) => (
            <Reveal
              key={m.name}
              className="fr-card"
              style={{
                position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.09)',
                background: '#111317', display: 'flex', flexDirection: 'column',
              }}
            >
              <div
                style={{
                  position: 'relative', aspectRatio: '1 / 1',
                  background: 'radial-gradient(circle at 50% 38%,#ffffff 0%,#eef0f3 62%,#dfe2e7 100%)', overflow: 'hidden',
                }}
              >
                <PausingGif
                  src={m.gif}
                  alt={`${m.name} demo`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 7, padding: '5px 10px',
                    borderRadius: 7, background: 'rgba(10,11,13,.78)', backdropFilter: 'blur(4px)',
                  }}
                >
                  <span className="anim-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent,#FF5722)' }} />
                  <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: 10, fontWeight: 600, letterSpacing: '1px', color: '#fff' }}>
                    LIVE DEMO
                  </span>
                </div>
              </div>
              <div style={{ padding: '16px 18px', borderTop: '1px solid rgba(255,255,255,.07)' }}>
                <span className="font-display" style={{ display: 'block', fontSize: 'clamp(18px,1.7vw,23px)', letterSpacing: '.5px', color: '#fff', lineHeight: 1.05 }}>
                  {m.name}
                </span>
                <span style={{ display: 'block', fontSize: 12.5, color: 'var(--accent,#FF5722)', fontWeight: 600, letterSpacing: '.3px', marginTop: 4 }}>
                  {m.target}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

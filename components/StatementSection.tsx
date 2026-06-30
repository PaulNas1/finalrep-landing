import Reveal from './Reveal'
import { statements } from '@/lib/content'

export default function StatementSection() {
  return (
    <section style={{ position: 'relative', padding: '60px 28px 110px' }}>
      <Reveal
        style={{
          maxWidth: 1200, margin: '0 auto', position: 'relative', borderRadius: 28, overflow: 'hidden',
          border: '1px solid rgba(255,255,255,.08)', background: '#0E1014',
        }}
      >
        <div className="fr-built-grid" style={{ minHeight: 460 }}>
          {/* photo half */}
          <div className="fr-built-photos" style={{ position: 'relative', overflow: 'hidden', background: '#0A0B0D' }}>
            <div style={{ position: 'relative', overflow: 'hidden', background: '#0A0B0D' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lift-female.jpg" alt="Athlete training" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 35%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(8,9,11,.55) 100%)' }} />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', background: '#0A0B0D', borderLeft: '1px solid rgba(255,255,255,.06)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lift-male.jpg" alt="Athlete training" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 28%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(8,9,11,.55) 100%)' }} />
            </div>
            {/* BUILT DIFFERENT overlay */}
            <div style={{ position: 'absolute', left: 0, bottom: 0, padding: '24px 26px', zIndex: 2, pointerEvents: 'none' }}>
              <span className="fr-od font-display" style={{ display: 'block', fontSize: 'clamp(30px,3.4vw,48px)', letterSpacing: '1px', lineHeight: 0.92 }}>
                Built
              </span>
              <span className="font-display" style={{ display: 'block', fontSize: 'clamp(30px,3.4vw,48px)', color: 'var(--accent,#FF5722)', letterSpacing: '1px', lineHeight: 0.92 }}>
                Different
              </span>
            </div>
          </div>

          {/* text half */}
          <div style={{ padding: 'clamp(36px,4vw,60px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent,#FF5722)', marginBottom: 26 }}>
              For people who actually train
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {statements.map((s) => (
                <div key={s.title} style={{ display: 'flex', gap: 18 }}>
                  <span style={{ flexShrink: 0, width: 4, borderRadius: 4, background: 'var(--accent,#FF5722)' }} />
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 7 }}>{s.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.55, color: '#A9AEB8' }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

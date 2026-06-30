import Reveal from './Reveal'
import { APP_STORE_URL, freeFeatures, premiumFeatures } from '@/lib/content'

function Bullet({ text, premium }: { text: string; premium?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span
        style={{
          flexShrink: 0, width: 20, height: 20, borderRadius: 6,
          background: premium ? 'rgba(255,87,34,.18)' : 'rgba(255,255,255,.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: premium ? 'var(--accent,#FF5722)' : '#A9AEB8', fontSize: 11, fontWeight: 800,
        }}
      >
        ✓
      </span>
      <span style={{ fontSize: 15, color: premium ? '#fff' : '#D4D7DD' }}>{text}</span>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" style={{ position: 'relative', padding: '90px 28px 110px', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at top,rgba(255,87,34,.08),transparent 65%)', opacity: 'var(--glow,1)',
        }}
      />
      <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 15px', borderRadius: 999,
              background: 'rgba(255,87,34,.1)', border: '1px solid rgba(255,87,34,.25)', marginBottom: 22,
              fontSize: 12.5, fontWeight: 600, letterSpacing: '.4px', color: 'var(--accent,#FF5722)',
            }}
          >
            Free to start · upgrade anytime
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '.5px' }}>
            Simple <span style={{ color: 'var(--accent,#FF5722)' }}>pricing.</span>
          </h2>
          <p style={{ fontSize: 17, color: '#A9AEB8', maxWidth: 480, margin: '18px auto 0', lineHeight: 1.55 }}>
            Start free and stay free as long as you like. Go Premium when you want the auto-programmer and cloud sync —
            14 days on the house.
          </p>
        </Reveal>

        <Reveal className="fr-pricing-grid">
          {/* FREE */}
          <div
            style={{
              borderRadius: 22, padding: 38, background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.09)',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#A9AEB8', marginBottom: 18 }}>Free</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
              <span className="font-display" style={{ fontSize: 58, lineHeight: 1 }}>$0</span>
              <span style={{ fontSize: 15, color: '#71757F' }}>forever</span>
            </div>
            <p style={{ fontSize: 14, color: '#71757F', marginBottom: 30 }}>Everything you need to start training.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 34 }}>
              {freeFeatures.map((f) => <Bullet key={f} text={f} />)}
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fr-btn-ghost"
              style={{
                marginTop: 'auto', textAlign: 'center', padding: 15, borderRadius: 13, background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.12)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}
            >
              Download Free
            </a>
          </div>

          {/* PREMIUM */}
          <div
            style={{
              position: 'relative', borderRadius: 22, padding: 38,
              background: 'linear-gradient(180deg,rgba(255,87,34,.1),rgba(255,87,34,.03))', border: '1px solid rgba(255,87,34,.4)',
              display: 'flex', flexDirection: 'column', boxShadow: '0 30px 70px rgba(255,87,34,.12)',
            }}
          >
            <div
              style={{
                position: 'absolute', top: 26, right: 26, fontSize: 11, fontWeight: 700, letterSpacing: '.4px',
                padding: '6px 11px', borderRadius: 999, background: 'var(--accent,#FF5722)', color: '#fff',
              }}
            >
              14-DAY FREE TRIAL
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--accent,#FF5722)', marginBottom: 18 }}>Premium</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
              <span className="font-display" style={{ fontSize: 58, lineHeight: 1 }}>$4.99</span>
              <span style={{ fontSize: 15, color: '#A9AEB8' }}>/ month</span>
            </div>
            <p style={{ fontSize: 14, color: '#FFB86B', marginBottom: 30 }}>or $39.99 / year — save 33%</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 34 }}>
              {premiumFeatures.map((f) => <Bullet key={f} text={f} premium />)}
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fr-btn-primary"
              style={{
                marginTop: 'auto', textAlign: 'center', padding: 15, borderRadius: 13, background: 'var(--accent,#FF5722)',
                color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 30px rgba(255,87,34,.35)',
              }}
            >
              Start Free Trial
            </a>
          </div>
        </Reveal>

        <p style={{ textAlign: 'center', fontSize: 12.5, color: '#5E626B', marginTop: 26 }}>
          Prices shown in AUD. Local pricing shown on the App Store.
        </p>
      </div>
    </section>
  )
}

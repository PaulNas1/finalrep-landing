import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'
import { features, type Feature } from '@/lib/content'

function FeatureRow({ f }: { f: Feature }) {
  const text = (
    <div>
      <span
        className="font-display"
        style={{ display: 'inline-block', fontSize: 18, color: 'rgba(255,255,255,.18)', letterSpacing: '2px', marginBottom: 18 }}
      >
        {f.num}
      </span>
      <h3 className="font-display" style={{ fontSize: 'clamp(30px,3.4vw,46px)', lineHeight: 1.02, letterSpacing: '.5px', marginBottom: 20 }}>
        {f.title}
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: '#A9AEB8', maxWidth: 440, marginBottom: 26 }}>{f.body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
        {f.bullets.map((b) => (
          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                flexShrink: 0, width: 22, height: 22, borderRadius: 7, background: 'rgba(255,87,34,.12)',
                border: '1px solid rgba(255,87,34,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent,#FF5722)', fontSize: 12, fontWeight: 800,
              }}
            >
              ✓
            </span>
            <span style={{ fontSize: 15, color: '#D4D7DD', fontWeight: 500 }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const phone = (
    <div className="fr-feature-phone" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div
        style={{
          position: 'absolute', width: '70%', height: '70%', borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(255,87,34,.14),transparent 70%)', filter: 'blur(40px)', opacity: 'var(--glow,1)',
        }}
      />
      <PhoneMockup screenshot={f.shot} alt={f.title} radius={46} width={300} style={{ maxWidth: '78vw' }} />
    </div>
  )

  return (
    <Reveal className="fr-feature-row" style={{ padding: '54px 0' }}>
      {f.phoneFirst ? (
        <>
          {phone}
          {text}
        </>
      ) : (
        <>
          {text}
          {phone}
        </>
      )}
    </Reveal>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" style={{ position: 'relative', padding: '120px 28px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 90, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent,#FF5722)', marginBottom: 18 }}>
            The Toolkit
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(38px,4.8vw,68px)', lineHeight: 1, letterSpacing: '.5px' }}>
            Everything you need.
            <br />
            <span className="fr-om">Nothing you don&apos;t.</span>
          </h2>
        </Reveal>

        {features.map((f) => (
          <FeatureRow key={f.num} f={f} />
        ))}
      </div>
    </section>
  )
}

import AppStoreButton from './AppStoreButton'
import PhoneMockup from './PhoneMockup'
import { heroChips } from '@/lib/content'

export default function HeroSection() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 28px 70px',
        overflow: 'hidden',
      }}
    >
      {/* background glows */}
      <div
        style={{
          position: 'absolute', top: '-10%', right: '-8%', width: 780, height: 780, borderRadius: '50%',
          pointerEvents: 'none', background: 'radial-gradient(circle at center,rgba(255,87,34,.18) 0%,transparent 68%)',
          filter: 'blur(30px)', opacity: 'var(--glow,1)',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '-20%', left: '-12%', width: 560, height: 560, borderRadius: '50%',
          pointerEvents: 'none', background: 'radial-gradient(circle at center,rgba(255,138,61,.09) 0%,transparent 70%)',
          filter: 'blur(50px)', opacity: 'var(--glow,1)',
        }}
      />

      <div className="fr-hero-grid" style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        {/* left / copy */}
        <div className="anim-hero-1">
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 14px', borderRadius: 999,
              background: 'rgba(255,87,34,.1)', border: '1px solid rgba(255,87,34,.28)', marginBottom: 30,
            }}
          >
            <span className="anim-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent,#FF5722)' }} />
            <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.6px', color: 'var(--accent,#FF5722)', textTransform: 'uppercase' }}>
              Now on the App Store · iOS
            </span>
          </div>

          <h1
            className="font-display"
            style={{ fontSize: 'clamp(52px,7.2vw,104px)', lineHeight: 0.92, letterSpacing: '.5px', marginBottom: 26 }}
          >
            <span style={{ display: 'block', color: '#fff' }}>Track every</span>
            <span style={{ display: 'block', color: '#fff' }}>rep.</span>
            <span style={{ display: 'block', color: 'var(--accent,#FF5722)' }}>Beat every set.</span>
          </h1>

          <p style={{ fontSize: 'clamp(17px,1.4vw,20px)', lineHeight: 1.55, color: '#A9AEB8', maxWidth: 480, marginBottom: 36 }}>
            The no-fluff workout tracker built for people who train seriously. Log every set, smash every PR, and let
            FinalRep build your next program around the equipment you actually have.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <AppStoreButton size="large" />
            <span style={{ fontSize: 14, color: '#71757F', lineHeight: 1.4 }}>
              Free forever.
              <br />
              14-day Premium trial.
            </span>
          </div>

          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 22, marginTop: 44, paddingTop: 30,
              borderTop: '1px solid rgba(255,255,255,.07)', flexWrap: 'wrap',
            }}
          >
            {heroChips.map((chip) => (
              <div key={chip} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ color: 'var(--accent,#FF5722)', fontSize: 17, lineHeight: 1 }}>✦</span>
                <span style={{ fontSize: 14, color: '#A9AEB8', fontWeight: 500 }}>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right / phones */}
        <div
          className="anim-hero-2 fr-hero-phones"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 620 }}
        >
          <div style={{ position: 'absolute', right: '2%', top: '4%', width: 230, transform: 'rotate(5deg)', opacity: 0.62, zIndex: 0 }}>
            <PhoneMockup screenshot="/screenshots/screen-3.PNG" alt="FinalRep progress" radius={38} />
          </div>
          <div className="anim-floaty" style={{ position: 'relative', width: 282, transform: 'rotate(-2deg)', zIndex: 1 }}>
            <PhoneMockup screenshot="/screenshots/screen-1.PNG" alt="FinalRep home" radius={44} glow />
          </div>
        </div>
      </div>
    </section>
  )
}

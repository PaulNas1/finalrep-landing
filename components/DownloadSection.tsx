import Reveal from './Reveal'
import AppStoreButton from './AppStoreButton'

export default function DownloadSection() {
  return (
    <section id="download" style={{ position: 'relative', padding: '30px 28px 120px' }}>
      <Reveal
        style={{
          position: 'relative', maxWidth: 1100, margin: '0 auto', borderRadius: 30, overflow: 'hidden',
          padding: 'clamp(50px,7vw,90px) 28px', textAlign: 'center',
          background: 'linear-gradient(135deg,#16171C,#0C0D10)', border: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <div
          style={{
            position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(255,87,34,.16),transparent 65%)', filter: 'blur(30px)', opacity: 'var(--glow,1)', pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(42px,6vw,90px)', lineHeight: 0.95, letterSpacing: '.5px', marginBottom: 24 }}>
            Your next PR
            <br />
            <span style={{ color: 'var(--accent,#FF5722)' }}>starts today.</span>
          </h2>
          <p style={{ fontSize: 18, color: '#A9AEB8', maxWidth: 460, margin: '0 auto 38px', lineHeight: 1.55 }}>
            Download FinalRep free and log your first session in under a minute.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AppStoreButton size="large" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

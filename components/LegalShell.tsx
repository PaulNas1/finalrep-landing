import type { ReactNode } from 'react'

interface LegalShellProps {
  eyebrow: string
  title: ReactNode
  meta?: ReactNode
  children: ReactNode
}

/** Shared header / hero / footer wrapper for the Privacy, Terms and Support pages. */
export default function LegalShell({ eyebrow, title, meta, children }: LegalShellProps) {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0B0D' }}>
      <header
        style={{
          position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
          background: 'rgba(10,11,13,.82)', borderBottom: '1px solid rgba(255,255,255,.06)',
        }}
      >
        <div style={{ maxWidth: 920, margin: '0 auto', height: 74, padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo_wordmark.png" alt="FinalRep" style={{ height: 28, width: 'auto', display: 'block' }} />
          </a>
          <a href="/" className="fr-navlink" style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
            ← Back to home
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 820, margin: '0 auto', padding: '72px 28px 40px' }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF5722', marginBottom: 18 }}>
            {eyebrow}
          </p>
          <h1 className="font-display" style={{ fontSize: 'clamp(44px,6vw,72px)', lineHeight: 0.95, letterSpacing: '.5px', marginBottom: 16 }}>
            {title}
          </h1>
          {meta ? <p style={{ fontSize: 15, color: '#71757F' }}>{meta}</p> : null}
        </div>

        {children}
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', marginTop: 64, padding: '34px 28px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: '#5E626B' }}>© 2026 FinalRep. Train serious.</span>
          <nav style={{ display: 'flex', gap: 24 }}>
            <a href="/privacy" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Privacy</a>
            <a href="/terms" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Terms</a>
            <a href="/support" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Support</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

/** Consistent prose container for legal body copy. */
export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 42, color: '#A9AEB8', fontSize: 16, lineHeight: 1.7 }}>
      {children}
    </div>
  )
}

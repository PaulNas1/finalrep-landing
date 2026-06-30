import { APP_STORE_URL } from '@/lib/content'

export default function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        background: 'rgba(10,11,13,.72)',
        borderBottom: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          height: 74,
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_wordmark.png" alt="FinalRep" style={{ height: 30, width: 'auto', display: 'block' }} />
        </a>
        <nav className="fr-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
          <a href="#features" className="fr-navlink" style={{ fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Features</a>
          <a href="#movements" className="fr-navlink" style={{ fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Movements</a>
          <a href="#pricing" className="fr-navlink" style={{ fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Pricing</a>
        </nav>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fr-btn-nav"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            padding: '11px 22px',
            borderRadius: 13,
            background: 'var(--accent, #FF5722)',
            color: '#fff',
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
            letterSpacing: '.2px',
            boxShadow: '0 4px 24px rgba(255,87,34,.32)',
          }}
        >
          Download Free
        </a>
      </div>
    </header>
  )
}

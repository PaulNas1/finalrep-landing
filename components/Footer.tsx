export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', padding: '46px 28px' }}>
      <div
        style={{
          maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo_wordmark.png" alt="FinalRep" style={{ height: 26, width: 'auto' }} />
        <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          <a href="#features" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Features</a>
          <a href="#pricing" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Pricing</a>
          <a href="/privacy" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Terms</a>
          <a href="/support" className="fr-navlink" style={{ fontSize: 14, textDecoration: 'none' }}>Support</a>
        </nav>
        <span style={{ fontSize: 13, color: '#5E626B' }}>© 2026 FinalRep. Train serious.</span>
      </div>
    </footer>
  )
}

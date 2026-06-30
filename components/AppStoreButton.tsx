import { APP_STORE_URL } from '@/lib/content'

interface AppStoreButtonProps {
  /** large = hero / final CTA size; default = slightly smaller */
  size?: 'default' | 'large'
}

/** Orange "Download on the App Store" button matching the design. */
export default function AppStoreButton({ size = 'large' }: AppStoreButtonProps) {
  const large = size === 'large'
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fr-btn-primary"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 13,
        padding: large ? '18px 34px' : '16px 28px',
        borderRadius: 15,
        background: 'var(--accent, #FF5722)',
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 10px 40px rgba(255,87,34,.45)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 26,
          height: 26,
          border: '2px solid rgba(255,255,255,.85)',
          borderRadius: 7,
          fontSize: 15,
          fontWeight: 800,
        }}
      >
        ↓
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
        <span style={{ fontSize: 11, fontWeight: 500, opacity: 0.8, letterSpacing: '.4px' }}>
          DOWNLOAD ON THE
        </span>
        <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '.2px' }}>App Store</span>
      </span>
    </a>
  )
}

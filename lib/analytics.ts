// Analytics & ad attribution for finalrep.io.
//
// - GA4_MEASUREMENT_ID: GA4 property (lastrep-17ff6) → web stream "LastRep".
// - META_PIXEL_ID: Meta Events Manager dataset "FinalRep Website".
//
// UTM/fbclid params are captured on any landing page and persisted for 30
// days so the App Store click can be attributed even if the user browses
// around (or first lands on privacy/terms/support) before downloading.

export const GA4_MEASUREMENT_ID = 'G-4FWQHFBLN3'
export const META_PIXEL_ID = '4045469558918196'

const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
] as const

const STORAGE_KEY = 'fr_attribution'
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

function readStoredAttribution(): Record<string, string> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw)
    if (!stored.savedAt || Date.now() - stored.savedAt > THIRTY_DAYS_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return stored.params
  } catch {
    return null
  }
}

/**
 * Capture attribution params from the URL and persist them; a new tagged
 * visit overwrites the stored set so the most recent ad click wins.
 * Returns the currently-active attribution (from URL or storage).
 */
export function captureAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const url = new URLSearchParams(window.location.search)
  const fromUrl: Record<string, string> = {}
  let found = false
  for (const key of ATTRIBUTION_KEYS) {
    const value = url.get(key)
    if (value) {
      fromUrl[key] = value
      found = true
    }
  }
  if (found) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ params: fromUrl, savedAt: Date.now() }))
    } catch {
      /* storage unavailable (private mode) — session-only attribution */
    }
    return fromUrl
  }
  return readStoredAttribution() ?? {}
}

/**
 * The last measurable moment before the user leaves the browser for the
 * App Store — fired with full attribution params. The button opens in a new
 * tab, so the events send from the still-open page (no unload race).
 */
export function trackAppStoreClick() {
  if (typeof window === 'undefined') return
  const attribution = captureAttribution()
  if (window.gtag) {
    window.gtag('event', 'app_store_click', { transport_type: 'beacon', ...attribution })
  }
  if (window.fbq) {
    window.fbq('trackCustom', 'AppStoreClick', attribution)
  }
}

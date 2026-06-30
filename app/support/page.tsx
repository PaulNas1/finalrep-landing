'use client'

import { useState } from 'react'
import LegalShell from '@/components/LegalShell'
import { SUPPORT_EMAIL } from '@/lib/content'

const faqs = [
  {
    q: 'How do I log a workout?',
    a: 'Tap Start Workout on the Home screen. You can start fresh or choose a saved template. Log your sets and weights as you go, then tap Complete when you’re done.',
  },
  {
    q: 'How do I save a workout as a template?',
    a: 'After completing a workout, tap Save as Template, give it a name, and it’ll appear in your Workouts tab for future use.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Your data is stored securely in the cloud and syncs across your devices when you’re signed in. Your data is private and never shared with other users.',
  },
  {
    q: 'How do I delete a workout or template?',
    a: 'Long press on any workout in the History or Workouts tab to bring up the options menu, then tap Delete.',
  },
]

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <LegalShell eyebrow="Support" title={<>We&apos;re here<br />to help</>}>
      <p style={{ fontSize: 18, color: '#A9AEB8', lineHeight: 1.55, maxWidth: 560, marginTop: -8, marginBottom: 44 }}>
        Get answers to common questions or reach out directly — we respond to every message.
      </p>

      {/* Contact card */}
      <div
        style={{
          borderRadius: 20, padding: 34, marginBottom: 56,
          background: 'linear-gradient(180deg,rgba(255,87,34,.09),rgba(255,87,34,.03))', border: '1px solid rgba(255,87,34,.28)',
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Contact Us</h2>
        <p style={{ fontSize: 15, color: '#A9AEB8', lineHeight: 1.55, marginBottom: 24 }}>
          Questions, bugs, or feedback — email us and we&apos;ll get back to you as soon as possible.
        </p>
        <p style={{ fontSize: 12, color: '#71757F', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>
          Have a question or found a bug?
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="fr-emaillink"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 17, fontWeight: 600, color: '#FF5722', textDecoration: 'none' }}
        >
          {SUPPORT_EMAIL}
        </a>
      </div>

      {/* FAQ */}
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF5722', marginBottom: 22 }}>
          Common Questions
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  borderRadius: 16, overflow: 'hidden', background: 'rgba(255,255,255,.03)',
                  border: `1px solid ${isOpen ? 'rgba(255,87,34,.35)' : 'rgba(255,255,255,.06)'}`,
                  transition: 'border-color .2s',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    color: '#fff', font: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{faq.q}</span>
                  <span
                    style={{
                      flexShrink: 0, color: '#A9AEB8', fontSize: 13, transition: 'transform .2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
                    <p style={{ paddingTop: 16, fontSize: 15, color: '#A9AEB8', lineHeight: 1.65 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </LegalShell>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SupportPage() {
  const faqs = [
    {
      q: 'How do I log a workout?',
      a: 'Tap Start Workout on the Home screen. You can start fresh or choose a saved template. Log your sets and weights as you go, then tap Complete when you\'re done.',
    },
    {
      q: 'How do I save a workout as a template?',
      a: 'After completing a workout, tap Save as Template, give it a name, and it\'ll appear in your Workouts tab for future use.',
    },
    {
      q: 'Where is my data stored?',
      a: 'Your data is stored securely in the cloud and syncs across your devices when you\'re signed in. Your data is private and never shared with other users.',
    },
    {
      q: 'How do I delete a workout or template?',
      a: 'Long press on any workout in the History or Workouts tab to bring up the options menu, then tap Delete.',
    },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(11, 12, 16, 0.9)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-4xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo_icon.png" alt="FinalRep" width={36} height={36} className="rounded-xl" unoptimized />
            <span className="font-black text-xl tracking-tight">
              Final<span className="text-accent">Rep</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-text-secondary hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero */}
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Support</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">We&apos;re here to help</h1>
          <p className="text-text-secondary text-lg">Get answers to common questions or reach out directly — we respond to every message.</p>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl p-8 mb-14"
          style={{
            background: 'rgba(108, 99, 255, 0.07)',
            border: '1px solid rgba(108, 99, 255, 0.2)',
          }}
        >
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-text-secondary mb-6">
            Questions, bugs, or feedback — email us and we&apos;ll get back to you as soon as possible.
          </p>
          <p className="text-sm text-text-secondary uppercase tracking-widest mb-3">📬 Have a question or found a bug?</p>
          <a
            href="mailto:finalrepfitness@icloud.com"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium text-base"
          >
            finalrepfitness@icloud.com
          </a>
        </div>

        {/* FAQ */}
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-6">Common Questions</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: open === i ? '1px solid rgba(108, 99, 255, 0.3)' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-base">{faq.q}</span>
                  <span
                    className="text-text-secondary ml-4 flex-shrink-0 transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ▾
                  </span>
                </button>
                {open === i && (
                  <div
                    className="px-6 pb-5 text-text-secondary leading-relaxed"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-4xl mx-auto px-8 flex items-center justify-between text-sm text-text-muted">
          <span>© {new Date().getFullYear()} FinalRep</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'rgba(11, 12, 16, 0.85)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/icon.png" alt="FinalRep" width={44} height={44} className="rounded-xl" unoptimized />
          <span className="font-black text-2xl tracking-tight">Final<span className="text-accent">Rep</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-base text-text-secondary hover:text-white transition-colors duration-200 font-medium">Features</a>
          <a href="#download" className="text-base text-text-secondary hover:text-white transition-colors duration-200 font-medium">Download</a>
          <a href="/privacy" className="text-base text-text-secondary hover:text-white transition-colors duration-200 font-medium">Privacy</a>
          <a href="/support" className="text-base text-text-secondary hover:text-white transition-colors duration-200 font-medium">Support</a>
        </nav>
        <a href="https://apps.apple.com/au/app/finalrep-workout-tracker/id6758363706" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-base font-semibold transition-all duration-200 hover:shadow-[0_4px_20px_rgba(255,87,34,0.4)] active:scale-95">
          <span>Download Free</span>
        </a>
      </div>
    </header>
  )
}

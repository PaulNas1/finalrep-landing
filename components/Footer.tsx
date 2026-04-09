import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t py-10" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="FinalRep" width={28} height={28} className="rounded-xl" unoptimized />
            <span className="font-black text-sm tracking-tight">Final<span className="text-accent">Rep</span></span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Use</a>
            <a href="https://apps.apple.com/au/app/finalrep-workout-tracker/id6758363706" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">App Store</a>
          </nav>
          <p className="text-text-muted text-sm">© {year} FinalRep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

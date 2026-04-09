import AppStoreButton from './AppStoreButton'
import PhoneMockup from './PhoneMockup'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,87,34,0.12) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(20%, -20%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,184,107,0.05) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }} />
      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start animate-fade-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide" style={{ background: 'rgba(255,87,34,0.1)', border: '1px solid rgba(255,87,34,0.25)', color: '#FF5722' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available on iOS
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#999' }}>
                Android coming soon
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-6">
              Track every rep.<br />
              <span className="gradient-text">Beat every set.</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              FinalRep is the no-fluff workout tracker built for people who train seriously. Log workouts, crush PRs, and build your next program around your available equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <AppStoreButton size="large" />
              <p className="text-text-muted text-sm">Free to download · Premium features available</p>
            </div>
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2"><span className="text-accent text-lg">✦</span><p className="text-sm text-text-secondary">Offline first</p></div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2"><span className="text-accent text-lg">✦</span><p className="text-sm text-text-secondary">AI-powered programs</p></div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2"><span className="text-accent text-lg">✦</span><p className="text-sm text-text-secondary">Cloud sync</p></div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end items-center h-[620px] lg:h-[760px]">
            <div className="absolute" style={{ right: '2%', top: '5%', width: '260px', transform: 'rotate(6deg)', opacity: 0.65, zIndex: 0 }}>
              <PhoneMockup screenshot="/screenshots/screen-2.PNG" alt="FinalRep progress tracking" />
            </div>
            <div className="absolute" style={{ left: '2%', bottom: '3%', width: '290px', transform: 'rotate(-2deg)', zIndex: 1 }}>
              <PhoneMockup screenshot="/screenshots/screen-1.PNG" alt="FinalRep workout tracking" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

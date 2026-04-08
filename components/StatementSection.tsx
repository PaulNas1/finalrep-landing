import PhoneMockup from './PhoneMockup'

export default function StatementSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,87,34,0.04) 50%, transparent 100%)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start items-center h-[480px]">
            <div className="absolute" style={{ left: '10%', top: '5%', width: '210px', transform: 'rotate(-3deg)', opacity: 0.6, zIndex: 0 }}>
              <PhoneMockup screenshot="/screenshots/screen-4.PNG" alt="FinalRep 1RM testing" />
            </div>
            <div className="absolute" style={{ right: '5%', bottom: '5%', width: '235px', zIndex: 1 }}>
              <PhoneMockup screenshot="/screenshots/screen-3.PNG" alt="FinalRep progress charts" />
            </div>
          </div>
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Built different</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">For people who<br /><span className="gradient-text">actually train.</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full" style={{ background: '#FF5722' }} />
                <div><h3 className="text-white font-semibold mb-1">1RM Testing Protocol</h3><p className="text-text-secondary text-sm leading-relaxed">Auto-calculated warmup sets at 50%, 70%, 80%, 90% of your estimated max. Test properly, not randomly.</p></div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full" style={{ background: '#FFB86B' }} />
                <div><h3 className="text-white font-semibold mb-1">Offline First, Always</h3><p className="text-text-secondary text-sm leading-relaxed">No signal in the gym? Doesn&apos;t matter. FinalRep works completely offline and syncs when you&apos;re back on Wi-Fi.</p></div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full" style={{ background: '#3DDC84' }} />
                <div><h3 className="text-white font-semibold mb-1">Smart Weekly Programs</h3><p className="text-text-secondary text-sm leading-relaxed">Choose your training days, goal, and available equipment. Get a complete week — Push/Pull/Legs, Upper/Lower, and more.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

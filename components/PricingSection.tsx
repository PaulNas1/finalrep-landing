import AppStoreButton from './AppStoreButton'

const freeFeatures = [
  'Log workouts — sets, reps & weight',
  'Automatic personal records',
  'Full training history & progress charts',
  'Exercise library with instructions',
]

const premiumFeatures = [
  'Everything in Free',
  'Auto-generated workout programs',
  'Unlimited custom templates',
  'Cloud sync across devices',
  'Data export (CSV)',
]

function Check({ muted = false }: { muted?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 ${muted ? 'text-text-muted' : 'text-success'}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,87,34,0.06) 0%, transparent 60%)' }} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium" style={{ background: 'rgba(255,87,34,0.1)', border: '1px solid rgba(255,87,34,0.2)', color: '#FF5722' }}>
            Free to use · upgrade anytime
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Simple<br className="sm:hidden" /> <span className="gradient-text">pricing.</span></h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">Start free and stay free for as long as you like. Upgrade to Premium when you want more — with a 14-day free trial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl p-8 flex flex-col" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #27272A' }}>
            <h3 className="text-white font-bold text-xl mb-1">Free</h3>
            <p className="text-text-muted text-sm mb-6">Everything you need to start training.</p>
            <div className="mb-6"><span className="text-4xl font-black text-white">$0</span><span className="text-text-muted text-sm"> forever</span></div>
            <ul className="flex flex-col gap-3 mb-8">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-text-secondary"><Check />{f}</li>
              ))}
            </ul>
            <div className="mt-auto"><AppStoreButton size="large" /></div>
          </div>

          {/* Premium */}
          <div className="rounded-2xl p-8 flex flex-col relative" style={{ background: 'rgba(255,87,34,0.06)', border: '1px solid rgba(255,87,34,0.35)' }}>
            <div className="absolute top-6 right-6 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,87,34,0.15)', color: '#FF5722' }}>14-day free trial</div>
            <h3 className="text-white font-bold text-xl mb-1">Premium</h3>
            <p className="text-text-muted text-sm mb-6">For serious lifters who want it all.</p>
            <div className="mb-1"><span className="text-4xl font-black text-white">$4.99</span><span className="text-text-muted text-sm"> / month</span></div>
            <p className="text-sm text-accent-amber mb-6">or $39.99 / year — save 33%</p>
            <ul className="flex flex-col gap-3 mb-8">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-text-secondary"><Check />{f}</li>
              ))}
            </ul>
            <div className="mt-auto"><AppStoreButton size="large" /></div>
          </div>
        </div>
        <p className="text-center text-text-muted text-xs mt-8">Prices shown in AUD. Local pricing shown on the App Store.</p>
      </div>
    </section>
  )
}

import AppStoreButton from './AppStoreButton'

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,87,34,0.08) 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px pointer-events-none" style={{ width: '80%', background: 'linear-gradient(90deg, transparent, rgba(255,87,34,0.3), transparent)' }} />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium" style={{ background: 'rgba(255,87,34,0.1)', border: '1px solid rgba(255,87,34,0.2)', color: '#FF5722' }}>
          7-day free trial
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">Start training<br /><span className="gradient-text">smarter today.</span></h2>
        <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">Download FinalRep for free and log your first workout in under a minute. Premium features available for serious athletes.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppStoreButton size="large" />
        </div>
        <div className="flex items-center justify-center gap-6 mt-10 text-sm text-text-muted">
          {[['7-day free trial', 'success'], ['Works offline', 'success'], ['Requires iOS 16 or later', 'success']].map(([label]) => (
            <span key={label} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

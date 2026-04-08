import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy — FinalRep',
  description: 'Privacy Policy for the FinalRep workout tracking app.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <header style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'rgba(11, 12, 16, 0.9)', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo_icon.png" alt="FinalRep" width={36} height={36} className="rounded-xl" unoptimized />
            <span className="font-black text-xl tracking-tight">Final<span className="text-accent">Rep</span></span>
          </Link>
          <Link href="/" className="text-sm text-text-secondary hover:text-white transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-text-secondary">Last updated: February 2026</p>
        </div>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <p>This Privacy Policy describes how Paul Nasrallah (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and handles your information when you use the FinalRep mobile application (&ldquo;App&rdquo;). We are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information when you use FinalRep:</p>
            <ul className="space-y-2 list-none">
              {['Account information — email address and display name when you create an account.','Profile photo — if you choose to upload one.','Workout data — exercises, sets, reps, weights, durations, and session timestamps you log in the App.','Body measurements — weight, body fat percentage, and other physical measurements you choose to record.','Personal records — one-rep max estimates and strength benchmarks you track.','Equipment preferences — gym equipment you indicate you have access to.','Subscription status — whether you have an active FinalRep subscription.','Device information — device type and operating system version, collected automatically for crash reporting and performance monitoring.'].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-4">We do not collect precise location data, contacts, or any biometric identifiers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-2 list-none">
              {['Provide and operate the App, including syncing your data across devices.','Personalise your experience, such as generating workout recommendations based on your equipment and history.','Process and manage your subscription.','Diagnose technical problems and improve App performance.','Respond to your support requests.'].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties. We do not use your data for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Services</h2>
            <p className="mb-3">FinalRep uses the following third-party services to operate. Each has its own privacy policy:</p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span><strong className="text-white">Google Firebase</strong> (Authentication, Firestore, Analytics) — your account and workout data is stored on Firebase servers operated by Google LLC. Firebase may store data in the United States.</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span><strong className="text-white">RevenueCat</strong> — manages in-app subscription purchases and restores.</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span><strong className="text-white">Apple App Store</strong> — payment processing for subscriptions is handled by Apple.</span></li>
            </ul>
            <p className="mt-4">By using the App, you acknowledge that your data may be transferred to and processed in countries outside Australia, including the United States, in connection with these services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide you with the App. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="mb-3">Under the Australian Privacy Principles, you have the right to:</p>
            <ul className="space-y-2 list-none">
              {['Access the personal information we hold about you.','Request correction of inaccurate or incomplete information.','Request deletion of your personal information.','Opt out of any direct marketing communications (we do not currently send any).'].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us using the details below. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Data Security</h2>
            <p>We take reasonable steps to protect your information from unauthorised access, disclosure, or misuse. All data is transmitted over encrypted connections (HTTPS/TLS) and stored on Firebase&apos;s secured infrastructure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Children&apos;s Privacy</h2>
            <p>FinalRep is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the App after changes are posted constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy or wish to make a privacy-related request, please contact:</p>
            <p>Paul Nasrallah &mdash; Email: <a href="mailto:finalrepfitness@icloud.com" className="text-accent hover:underline">finalrepfitness@icloud.com</a></p>
            <p className="mt-4">If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.oaic.gov.au</a>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t mt-16 py-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-4xl mx-auto px-8 flex items-center justify-between text-sm text-text-muted">
          <span>© {new Date().getFullYear()} FinalRep</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

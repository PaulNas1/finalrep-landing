import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Terms of Use — FinalRep',
  description: 'Terms of Use for the FinalRep workout tracking app.',
}

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Terms of Use</h1>
          <p className="text-text-secondary">Last updated: February 2026</p>
        </div>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <p>These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the FinalRep mobile application (&ldquo;App&rdquo;) developed and operated by Paul Nasrallah (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.</p>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Eligibility</h2>
            <p>You must be at least 13 years of age to use FinalRep. By using the App you represent that you meet this requirement. If you are under 18, you must have the consent of a parent or legal guardian.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Your Account</h2>
            <p className="mb-3">FinalRep requires you to create an account to use the App. You may sign up using your Apple ID, Google account, or email address. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Please notify us immediately if you suspect unauthorised access to your account.</p>
            <p>You agree to provide accurate and current information when creating your account and to keep it up to date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Subscription and Payments</h2>
            <p className="mb-3">FinalRep offers an auto-renewing subscription (&ldquo;FinalRep Premium&rdquo;) that unlocks additional features. By subscribing you agree to the following:</p>
            <ul className="space-y-2 list-none mb-4">
              {[
                'Payment is charged to your Apple ID account at confirmation of purchase.',
                'Your subscription automatically renews at the end of each billing period unless cancelled at least 24 hours before the renewal date.',
                'Renewal charges are made within 24 hours prior to the end of the current period at the same price.',
                "You can manage and cancel your subscription at any time in your iPhone's App Store settings under Subscriptions.",
                'A free trial, if offered, will convert to a paid subscription unless cancelled before the trial period ends. Any unused portion of a free trial is forfeited upon purchase of a subscription.',
                'No refunds are provided for partial subscription periods, except as required by applicable law.',
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mb-2">To cancel: Go to <strong className="text-white">Settings → [Your Name] → Subscriptions → FinalRep</strong> on your iPhone and tap Cancel Subscription.</p>
            <p>Prices are displayed in Australian Dollars (AUD) unless otherwise stated, and are inclusive of applicable taxes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Health and Fitness Disclaimer</h2>
            <p className="mb-3">FinalRep is a fitness tracking and workout planning tool. The content and exercise information provided in the App is for general informational purposes only and does not constitute medical advice. You should consult a qualified healthcare professional before beginning any exercise programme, particularly if you have any pre-existing health conditions or injuries.</p>
            <p>You use the App and undertake any physical activity at your own risk. We are not responsible for any injury, illness, or health complication arising from use of the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. User Content</h2>
            <p className="mb-3">You retain ownership of any workout data, measurements, and other content you input into the App (&ldquo;User Content&rdquo;). By using the App, you grant us a limited, non-exclusive licence to store and process your User Content solely for the purpose of operating and improving the App.</p>
            <p>You are responsible for ensuring that any User Content you submit does not violate any law or third-party rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <p className="mb-3">The App, including its design, code, graphics, and all content provided by us, is owned by Paul Nasrallah and is protected by Australian and international intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the App without our prior written consent.</p>
            <p>Exercise data and animated visuals within the App are licensed from ExerciseDB.io and are subject to their licence terms. You may not extract, reproduce, or redistribute this content independently.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Prohibited Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="space-y-2 list-none">
              {[
                'Attempt to reverse-engineer, decompile, or extract source code from the App.',
                'Use the App for any unlawful purpose or in violation of these Terms.',
                "Interfere with the App's servers or infrastructure.",
                "Attempt to gain unauthorised access to other users' accounts or data.",
                'Use automated tools to scrape or harvest data from the App.',
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent mt-1 flex-shrink-0">›</span><span>{item}</span></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the App at any time if you breach these Terms. You may delete your account at any time by contacting us. Upon termination, your right to use the App ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="mb-3">To the maximum extent permitted by law, we exclude all liability for any loss or damage (including indirect, consequential, or incidental loss) arising from your use of or inability to use the App. Our total liability to you will not exceed the amount you paid us in the 12 months preceding the claim, or AUD $50, whichever is greater.</p>
            <p>Nothing in these Terms limits any rights you may have under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)), including consumer guarantees that cannot be excluded.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Disclaimer of Warranties</h2>
            <p>The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of viruses. We reserve the right to modify, suspend, or discontinue the App at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">11. Governing Law</h2>
            <p>These Terms are governed by the laws of New South Wales, Australia. Any disputes arising from these Terms or your use of the App will be subject to the exclusive jurisdiction of the courts of New South Wales.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of material changes by updating the &ldquo;Last updated&rdquo; date. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">13. Contact</h2>
            <p className="mb-2">For any questions about these Terms, please contact:</p>
            <p>Paul Nasrallah &mdash; Email: <a href="mailto:finalrepfitness@icloud.com" className="text-accent hover:underline">finalrepfitness@icloud.com</a></p>
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

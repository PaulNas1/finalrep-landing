import LegalShell, { LegalProse } from '@/components/LegalShell'

export const metadata = {
  title: 'Privacy Policy — FinalRep',
  description: 'Privacy Policy for the FinalRep workout tracking app.',
}

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }
const ul: React.CSSProperties = { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }
const li: React.CSSProperties = { display: 'flex', gap: 12 }
const arrow: React.CSSProperties = { color: '#FF5722', flexShrink: 0 }
const link: React.CSSProperties = { color: '#FF5722', textDecoration: 'none' }

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li style={li}>
      <span style={arrow}>›</span>
      <span>{children}</span>
    </li>
  )
}

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy" meta="Last updated: February 2026">
      <LegalProse>
        <p>
          This Privacy Policy describes how Paul Nasrallah (“we”, “us”, or “our”) collects, uses, and handles your
          information when you use the FinalRep mobile application (“App”). We are committed to protecting your privacy in
          accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
        </p>

        <section>
          <h2 style={h2}>1. Information We Collect</h2>
          <p style={{ marginBottom: 14 }}>We collect the following types of information when you use FinalRep:</p>
          <ul style={ul}>
            <Item>Account information — email address and display name when you create an account.</Item>
            <Item>Profile photo — if you choose to upload one.</Item>
            <Item>Workout data — exercises, sets, reps, weights, durations, and session timestamps you log in the App.</Item>
            <Item>Body measurements — weight, body fat percentage, and other physical measurements you choose to record.</Item>
            <Item>Personal records — one-rep max estimates and strength benchmarks you track.</Item>
            <Item>Equipment preferences — gym equipment you indicate you have access to.</Item>
            <Item>Subscription status — whether you have an active FinalRep subscription.</Item>
            <Item>Device information — device type and operating system version, collected automatically for crash reporting and performance monitoring.</Item>
          </ul>
          <p style={{ marginTop: 16 }}>We do not collect precise location data, contacts, or any biometric identifiers.</p>
        </section>

        <section>
          <h2 style={h2}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: 14 }}>We use the information we collect to:</p>
          <ul style={ul}>
            <Item>Provide and operate the App, including syncing your data across devices.</Item>
            <Item>Personalise your experience, such as generating workout recommendations based on your equipment and history.</Item>
            <Item>Process and manage your subscription.</Item>
            <Item>Diagnose technical problems and improve App performance.</Item>
            <Item>Respond to your support requests.</Item>
          </ul>
          <p style={{ marginTop: 16 }}>We do not sell your personal information to third parties. We do not use your data for advertising purposes.</p>
        </section>

        <section>
          <h2 style={h2}>3. Third-Party Services</h2>
          <p style={{ marginBottom: 14 }}>FinalRep uses the following third-party services to operate. Each has its own privacy policy:</p>
          <ul style={ul}>
            <Item><strong style={{ color: '#fff' }}>Google Firebase</strong> (Authentication, Firestore, Analytics) — your account and workout data is stored on Firebase servers operated by Google LLC. Firebase may store data in the United States.</Item>
            <Item><strong style={{ color: '#fff' }}>RevenueCat</strong> — manages in-app subscription purchases and restores.</Item>
            <Item><strong style={{ color: '#fff' }}>Apple App Store</strong> — payment processing for subscriptions is handled by Apple.</Item>
          </ul>
          <p style={{ marginTop: 16 }}>By using the App, you acknowledge that your data may be transferred to and processed in countries outside Australia, including the United States, in connection with these services.</p>
        </section>

        <section>
          <h2 style={h2}>4. Data Retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide you with the App. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.</p>
        </section>

        <section>
          <h2 style={h2}>5. Your Rights</h2>
          <p style={{ marginBottom: 14 }}>Under the Australian Privacy Principles, you have the right to:</p>
          <ul style={ul}>
            <Item>Access the personal information we hold about you.</Item>
            <Item>Request correction of inaccurate or incomplete information.</Item>
            <Item>Request deletion of your personal information.</Item>
            <Item>Opt out of any direct marketing communications (we do not currently send any).</Item>
          </ul>
          <p style={{ marginTop: 16 }}>To exercise any of these rights, please contact us using the details below. We will respond within 30 days.</p>
        </section>

        <section>
          <h2 style={h2}>6. Data Security</h2>
          <p>We take reasonable steps to protect your information from unauthorised access, disclosure, or misuse. All data is transmitted over encrypted connections (HTTPS/TLS) and stored on Firebase&apos;s secured infrastructure.</p>
        </section>

        <section>
          <h2 style={h2}>7. Children&apos;s Privacy</h2>
          <p>FinalRep is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.</p>
        </section>

        <section>
          <h2 style={h2}>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the “Last updated” date at the top of this page. Your continued use of the App after changes are posted constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 style={h2}>9. Contact Us</h2>
          <p style={{ marginBottom: 10 }}>If you have questions about this Privacy Policy or wish to make a privacy-related request, please contact:</p>
          <p>Paul Nasrallah — Email: <a href="mailto:finalrepfitness@icloud.com" className="fr-emaillink" style={link}>finalrepfitness@icloud.com</a></p>
          <p style={{ marginTop: 16 }}>If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="fr-emaillink" style={link}>www.oaic.gov.au</a>.</p>
        </section>
      </LegalProse>
    </LegalShell>
  )
}

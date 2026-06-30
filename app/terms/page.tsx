import LegalShell, { LegalProse } from '@/components/LegalShell'

export const metadata = {
  title: 'Terms of Use — FinalRep',
  description: 'Terms of Use for the FinalRep workout tracking app.',
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

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal" title="Terms of Use" meta="Last updated: February 2026">
      <LegalProse>
        <p>
          These Terms of Use (“Terms”) govern your use of the FinalRep mobile application (“App”) developed and operated
          by Paul Nasrallah (“we”, “us”, or “our”). By downloading or using the App, you agree to be bound by these Terms.
          If you do not agree, please do not use the App.
        </p>

        <section>
          <h2 style={h2}>1. Eligibility</h2>
          <p>You must be at least 13 years of age to use FinalRep. By using the App you represent that you meet this requirement. If you are under 18, you must have the consent of a parent or legal guardian.</p>
        </section>

        <section>
          <h2 style={h2}>2. Your Account</h2>
          <p style={{ marginBottom: 14 }}>FinalRep requires you to create an account to use the App. You may sign up using your Apple ID, Google account, or email address. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Please notify us immediately if you suspect unauthorised access to your account.</p>
          <p>You agree to provide accurate and current information when creating your account and to keep it up to date.</p>
        </section>

        <section>
          <h2 style={h2}>3. Subscription and Payments</h2>
          <p style={{ marginBottom: 14 }}>FinalRep offers an auto-renewing subscription (“FinalRep Premium”) that unlocks additional features. By subscribing you agree to the following:</p>
          <ul style={{ ...ul, marginBottom: 16 }}>
            <Item>Payment is charged to your Apple ID account at confirmation of purchase.</Item>
            <Item>Your subscription automatically renews at the end of each billing period unless cancelled at least 24 hours before the renewal date.</Item>
            <Item>Renewal charges are made within 24 hours prior to the end of the current period at the same price.</Item>
            <Item>You can manage and cancel your subscription at any time in your iPhone&apos;s App Store settings under Subscriptions.</Item>
            <Item>A free trial, if offered, will convert to a paid subscription unless cancelled before the trial period ends. Any unused portion of a free trial is forfeited upon purchase of a subscription.</Item>
            <Item>No refunds are provided for partial subscription periods, except as required by applicable law.</Item>
          </ul>
          <p style={{ marginBottom: 10 }}>To cancel: Go to <strong style={{ color: '#fff' }}>Settings → [Your Name] → Subscriptions → FinalRep</strong> on your iPhone and tap Cancel Subscription.</p>
          <p>Prices are displayed in Australian Dollars (AUD) unless otherwise stated, and are inclusive of applicable taxes.</p>
        </section>

        <section>
          <h2 style={h2}>4. Health and Fitness Disclaimer</h2>
          <p style={{ marginBottom: 14 }}>FinalRep is a fitness tracking and workout planning tool. The content and exercise information provided in the App is for general informational purposes only and does not constitute medical advice. You should consult a qualified healthcare professional before beginning any exercise programme, particularly if you have any pre-existing health conditions or injuries.</p>
          <p>You use the App and undertake any physical activity at your own risk. We are not responsible for any injury, illness, or health complication arising from use of the App.</p>
        </section>

        <section>
          <h2 style={h2}>5. User Content</h2>
          <p style={{ marginBottom: 14 }}>You retain ownership of any workout data, measurements, and other content you input into the App (“User Content”). By using the App, you grant us a limited, non-exclusive licence to store and process your User Content solely for the purpose of operating and improving the App.</p>
          <p>You are responsible for ensuring that any User Content you submit does not violate any law or third-party rights.</p>
        </section>

        <section>
          <h2 style={h2}>6. Intellectual Property</h2>
          <p style={{ marginBottom: 14 }}>The App, including its design, code, graphics, and all content provided by us, is owned by Paul Nasrallah and is protected by Australian and international intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the App without our prior written consent.</p>
          <p>Exercise data and animated visuals within the App are licensed from ExerciseDB.io and are subject to their licence terms. You may not extract, reproduce, or redistribute this content independently.</p>
        </section>

        <section>
          <h2 style={h2}>7. Prohibited Conduct</h2>
          <p style={{ marginBottom: 14 }}>You agree not to:</p>
          <ul style={ul}>
            <Item>Attempt to reverse-engineer, decompile, or extract source code from the App.</Item>
            <Item>Use the App for any unlawful purpose or in violation of these Terms.</Item>
            <Item>Interfere with the App&apos;s servers or infrastructure.</Item>
            <Item>Attempt to gain unauthorised access to other users&apos; accounts or data.</Item>
            <Item>Use automated tools to scrape or harvest data from the App.</Item>
          </ul>
        </section>

        <section>
          <h2 style={h2}>8. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the App at any time if you breach these Terms. You may delete your account at any time by contacting us. Upon termination, your right to use the App ceases immediately.</p>
        </section>

        <section>
          <h2 style={h2}>9. Limitation of Liability</h2>
          <p style={{ marginBottom: 14 }}>To the maximum extent permitted by law, we exclude all liability for any loss or damage (including indirect, consequential, or incidental loss) arising from your use of or inability to use the App. Our total liability to you will not exceed the amount you paid us in the 12 months preceding the claim, or AUD $50, whichever is greater.</p>
          <p>Nothing in these Terms limits any rights you may have under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)), including consumer guarantees that cannot be excluded.</p>
        </section>

        <section>
          <h2 style={h2}>10. Disclaimer of Warranties</h2>
          <p>The App is provided “as is” and “as available” without warranties of any kind, express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of viruses. We reserve the right to modify, suspend, or discontinue the App at any time without notice.</p>
        </section>

        <section>
          <h2 style={h2}>11. Governing Law</h2>
          <p>These Terms are governed by the laws of New South Wales, Australia. Any disputes arising from these Terms or your use of the App will be subject to the exclusive jurisdiction of the courts of New South Wales.</p>
        </section>

        <section>
          <h2 style={h2}>12. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We will notify you of material changes by updating the “Last updated” date. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 style={h2}>13. Contact</h2>
          <p style={{ marginBottom: 10 }}>For any questions about these Terms, please contact:</p>
          <p>Paul Nasrallah — Email: <a href="mailto:finalrepfitness@icloud.com" className="fr-emaillink" style={link}>finalrepfitness@icloud.com</a></p>
        </section>
      </LegalProse>
    </LegalShell>
  )
}

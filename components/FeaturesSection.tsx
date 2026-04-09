import { Dumbbell, Sparkles, Trophy, BarChart2, CloudUpload, Download } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  { icon: Dumbbell, title: 'Workout Tracking', description: 'Log sets, reps, and weight with speed. Every session is saved, searchable, and ready to beat next time.', accentColor: '#FF5722' },
  { icon: Sparkles, title: 'Workout Generator', description: 'Get a personalized program built around your goals, equipment, and schedule. Single sessions or full weekly splits.', accentColor: '#FFB86B' },
  { icon: Trophy, title: 'Personal Records', description: 'FinalRep automatically detects and celebrates every new PR — 1RM, max weight, and max volume tracked per exercise.', accentColor: '#FF5722' },
  { icon: BarChart2, title: 'Progress Analytics', description: "Visualise your strength trends over time with clean, readable charts. See exactly where you're improving.", accentColor: '#3DDC84' },
  { icon: CloudUpload, title: 'Cloud Sync', description: 'Your data stays in sync across all your devices automatically. Always offline-first, cloud-backed.', accentColor: '#FFB86B' },
  { icon: Download, title: 'Data Export', description: 'Export your full workout history as CSV anytime. Your data belongs to you — always.', accentColor: '#FF5722' },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,87,34,0.04) 0%, transparent 60%)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Everything you need to<br /><span className="gradient-text">train smarter</span></h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">Built for people who are serious about training. No fluff, no bloat — just the tools that matter.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} accentColor={feature.accentColor} />
          ))}
        </div>
      </div>
    </section>
  )
}

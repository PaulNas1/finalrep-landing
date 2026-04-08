import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: string
}

export default function FeatureCard({ icon: Icon, title, description, accentColor = '#FF5722' }: FeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-surface border border-border/60 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,87,34,0.07)]">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}25` }}>
        <Icon className="w-5 h-5" style={{ color: accentColor }} strokeWidth={1.75} />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 leading-tight">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  )
}

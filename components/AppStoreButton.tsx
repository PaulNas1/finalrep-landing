'use client'

interface AppStoreButtonProps {
  size?: 'default' | 'large'
}

export default function AppStoreButton({ size = 'default' }: AppStoreButtonProps) {
  const isLarge = size === 'large'
  return (
    <a
      href="https://apps.apple.com/au/app/finalrep-workout-tracker/id6758363706"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-white text-black rounded-2xl border border-white/10 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(255,87,34,0.25)] active:scale-[0.98] ${isLarge ? 'px-8 py-4' : 'px-6 py-3'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" className={isLarge ? 'w-8 h-8' : 'w-6 h-6'} fill="currentColor">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 268.9-317.3 71 0 130.3 46.9 174.7 46.9 42.8 0 109.2-49.4 190.5-49.4zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
      </svg>
      <div className="text-left">
        <p className={`leading-none text-black/60 whitespace-nowrap ${isLarge ? 'text-xs' : 'text-[10px]'}`}>Download on the</p>
        <p className={`font-semibold leading-tight text-black ${isLarge ? 'text-lg' : 'text-base'}`}>App Store</p>
      </div>
    </a>
  )
}

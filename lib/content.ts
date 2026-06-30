// Single source of truth for landing-page copy & data (ported from the design's renderVals()).

export const APP_STORE_URL =
  'https://apps.apple.com/au/app/finalrep-workout-tracker/id6758363706'
export const SUPPORT_EMAIL = 'finalrepfitness@icloud.com'

export const heroChips = ['Offline-first', 'Auto-generated programs', 'Cloud sync']

export const marqueeWords = [
  'Track', '✦', 'Log', '✦', 'Lift', '✦', 'Progress', '✦', 'Repeat', '✦', 'Beat your last set', '✦',
]

export type Feature = {
  num: string
  title: string
  shot: string
  body: string
  bullets: string[]
  phoneFirst: boolean // phone on the left (true) or right (false)
}

export const features: Feature[] = [
  {
    num: '01',
    title: 'Log faster than you rest.',
    shot: '/screenshots/screen-1.PNG',
    body: 'Sets, reps and weight in a tap. Your whole week — workouts, sets and volume — is on the home screen the second you open the app.',
    bullets: ['One-tap set logging', 'Live weekly volume', 'Pick up your last session instantly'],
    phoneFirst: false,
  },
  {
    num: '02',
    title: 'Watch the numbers climb.',
    shot: '/screenshots/screen-3.PNG',
    body: 'FinalRep tracks every PR automatically and charts your strength over time, so progress is something you can actually see.',
    bullets: ['Automatic 1RM, max weight & volume PRs', 'Strength trends per exercise', 'Streaks and all-time stats'],
    phoneFirst: true,
  },
  {
    num: '03',
    title: 'Programs built around your gym.',
    shot: '/screenshots/screen-2.PNG',
    body: 'Tell FinalRep your goal, your days and the equipment you actually have. Get a complete split — Push/Pull/Legs, Upper/Lower and more.',
    bullets: ['Equipment-aware generator', 'Single sessions or full weekly splits', 'Unlimited custom templates'],
    phoneFirst: false,
  },
  {
    num: '04',
    title: 'Every session, logged forever.',
    shot: '/screenshots/screen-4.PNG',
    body: 'A complete, searchable history of every workout — duration, volume and exercises. Works offline in the gym, syncs when you are back on Wi-Fi.',
    bullets: ['Full training history', 'Works completely offline', 'CSV export — your data is yours'],
    phoneFirst: true,
  },
]

export type Movement = { name: string; target: string; gif: string }

export const movements: Movement[] = [
  { name: 'Bench Press', target: 'Chest · Triceps', gif: '/exercises/bench-press.gif' },
  { name: 'Back Squat', target: 'Quads · Glutes', gif: '/exercises/back-squat.gif' },
  { name: 'Deadlift', target: 'Posterior chain', gif: '/exercises/deadlift.gif' },
  { name: 'Overhead Press', target: 'Shoulders', gif: '/exercises/overhead-press.gif' },
]

export type Statement = { title: string; body: string }

export const statements: Statement[] = [
  { title: '1RM Testing Protocol', body: 'Auto-calculated warmup sets at 50, 70, 80 and 90% of your estimated max. Test properly, not randomly.' },
  { title: 'Offline First, Always', body: 'No signal in the gym? Doesn’t matter. FinalRep works fully offline and syncs the moment you reconnect.' },
  { title: 'Smart Weekly Programs', body: 'Choose your training days, goal and available equipment and get a complete, balanced week in seconds.' },
]

export const freeFeatures = [
  'Log workouts — sets, reps & weight',
  'Automatic personal records',
  'Full history & progress charts',
  'Exercise library with demos',
]

export const premiumFeatures = [
  'Everything in Free',
  'Auto-generated workout programs',
  'Unlimited custom templates',
  'Cloud sync across devices',
  'Data export (CSV)',
]

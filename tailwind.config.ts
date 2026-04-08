import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0C10',
        surface: '#0F1115',
        panel: '#15161A',
        accent: {
          DEFAULT: '#FF5722',
          hover: '#E64A19',
          amber: '#FFB86B',
        },
        'text-primary': '#FFFFFF',
        'text-secondary': '#B7BCC6',
        'text-muted': '#8F93A0',
        success: '#3DDC84',
        danger: '#FF6B6B',
        border: '#27272A',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

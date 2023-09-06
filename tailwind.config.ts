import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'slow-to-right': {
          '0%': { transform: 'translate(-20rem)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        }
      },
      animation: {
        'slow-to-right': 'slow-to-right 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
export default config

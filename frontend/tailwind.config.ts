import type { Config } from 'tailwindcss'

const config: Config = {
  // This is the 'content' property that was missing
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Here are your new brand colors
      colors: {
        'brand-dark': '#080A0B',    // Night
        'brand-red': '#E91C24',     // Red
        'brand-blue': '#2660A4',    // Lapis Lazuli
        'brand-light': '#CDC5B4',  // Don
        'brand-bg': '#EDE6F2',      // Magnolia
        'nav-bg': '#e9f3f3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
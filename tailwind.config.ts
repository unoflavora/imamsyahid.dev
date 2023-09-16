import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "argent": "#888888"
      },
      animation: {
        "text-in": "transition-text-in .5s ease-in",
        "text-out": "transition-text-out .5s ease-out"
      },
      keyframes: {
        "transition-text-in": {
          '0%': { 
            transform: 'translateY(50%)', 
            opacity: "0%"
          },
          '100%': { 
              transform: 'translateY(0)',
              opacity: "100%"
           },
        },
        "transition-text-out": {
          '0%': { 
            transform: 'translateY(0%)', 
            opacity: "100%"
          },
          '100%': { 
              transform: 'translateY(-50%)',
              opacity: "0%"
           },
        }

      }
    },
  },
  plugins: [],
}
export default config

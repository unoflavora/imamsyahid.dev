import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        "text-out": "transition-text-out .5s ease-out",
        "component-in-up" : "transition-component-in-up .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "component-in-bottom" : "transition-component-in-bottom .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
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
        },
        "transition-component-in-up": {
          "0%" : {
            transform: "translateY(-50%)",
          }, 
          "100%" : {
            transform: "translateY(0%)",
          },
        },
        "transition-component-in-bottom": {
          "0%" : {
            transform: "translateY(10%)",
          }, 
          "100%" : {
            transform: "translateY(0%)",
          },
        },
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        argent: "#888888",
      },
      animation: {
        "text-in": "transition-text-in .5s ease-in",
        "text-out": "transition-text-out .5s ease-out",
        "component-in-up":
          "transition-component-in-up .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "component-in-bottom":
          "transition-component-in-bottom .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "linear-bg": "textclip 1s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        jumpIn: "jumps .5s both cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      keyframes: {
        textclip: {
          from: { "background-position": "80% center" },
          to: { "background-position": "100% center" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "transition-text-in": {
          "0%": {
            transform: "translateY(50%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "100%",
          },
        },
        "transition-text-out": {
          "0%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
          "100%": {
            transform: "translateY(-50%)",
            opacity: "0%",
          },
        },
        "transition-component-in-up": {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "transition-component-in-bottom": {
          "0%": {
            transform: "translateY(10%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        jumps: {
          "0%": {
            transform: "scale(50%);",
          },

          "100% ": {
            transform: "scale(100%);",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("tailwindcss-animate")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050509",
        foreground: "#F5F5F7",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8D78F",
          dark: "#B8962E",
        },
        red: {
          primary: "#C62828",
          dark: "#A01F1F",
          light: "#E53935",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.5rem, 6vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 4vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '120': '120px',
        '140': '140px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8962E 100%)',
        'gradient-red': 'linear-gradient(135deg, #E53935 0%, #C62828 100%)',
        'gradient-dark': 'linear-gradient(180deg, #050509 0%, #0A0A12 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.4)',
        'red-glow': '0 0 30px rgba(198, 40, 40, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

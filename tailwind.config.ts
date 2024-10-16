import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.0477)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)']
      },
      fontSize: {
        base: ['0.938rem', {
          lineHeight: '140%',
          letterSpacing: '0.013em',
          fontWeight: '500',
        }],
        xl: ['1.375rem', {
          lineHeight: '120%',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
      },
      colors: {
        slate: {
          900: '#1F314F',
          500: '#68778D',
          300: '#D5E1EF'
        },
        white: '#FFFFFF'
      },
    },
  },
  plugins: [],
};
export default config;

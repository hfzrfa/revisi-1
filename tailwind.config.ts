import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      keyframes: {
        borderPulse: {
          '0%': { borderColor: 'rgba(255, 255, 255, 0.15)' },
          '50%': { borderColor: 'rgba(59, 130, 246, 0.8)' },
          '100%': { borderColor: 'rgba(255, 255, 255, 0.15)' },
        },
        blink: {
          '0%': { opacity: 1 },  // Opacity penuh di awal
          '50%': { opacity: 0 }, // Opacity ke 0 di tengah
          '100%': { opacity: 1 }, // Kembali ke opacity penuh
        },
      },
      animation: {
        borderPulse: 'borderPulse 1.4s infinite',
        blink: 'blink 2s infinite',  // Animasi kedip dengan durasi 1 detik
      },
    },
  },
  plugins: [],
};

export default config;

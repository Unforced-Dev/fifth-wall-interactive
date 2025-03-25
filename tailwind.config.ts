
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Fifth Wall custom colors
        portal: {
          DEFAULT: "#1c1933",
          light: "#2a2649",
          dark: "#0f0c22",
        },
        neon: {
          purple: "#9b87f5",
          pink: "#D946EF",
          blue: "#33C3F0",
          teal: "#06b6d4",
          crimson: "#dc2626",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        glow: {
          "0%, 100%": { 
            textShadow: "0 0 8px rgba(155, 135, 245, 0.7), 0 0 12px rgba(155, 135, 245, 0.5)" 
          },
          "50%": { 
            textShadow: "0 0 16px rgba(155, 135, 245, 0.9), 0 0 20px rgba(155, 135, 245, 0.7)"
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "33%": { opacity: "0.9" },
          "66%": { opacity: "0.95" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        splatter: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "70%": { transform: "scale(1.05)", opacity: "0.7" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        doorOpen: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(20)", opacity: "0" },
        },
        pageTransition: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s infinite ease-in-out",
        glow: "glow 2s infinite ease-in-out",
        shimmer: "shimmer 10s infinite linear",
        flicker: "flicker 4s infinite linear",
        float: "float 6s infinite ease-in-out",
        tilt: "tilt 6s infinite ease-in-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-slow": "fadeInSlow 1s ease-out forwards",
        splatter: "splatter 0.5s ease-out forwards",
        ripple: "ripple 1s ease-out forwards",
        "door-open": "doorOpen 1.5s ease-out forwards",
        "page-transition": "pageTransition 0.5s ease-out",
      },
      backgroundImage: {
        "psychedelic-dark": "linear-gradient(to right, #1c1933, #2a2649, #1c1933)",
        "neon-glow": "linear-gradient(45deg, #9b87f5 0%, #D946EF 50%, #33C3F0 100%)",
        "paint-splatter": "url('/textures/splatter.png')",
      },
      fontFamily: {
        sans: ["Futura", "sans-serif"],
        display: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

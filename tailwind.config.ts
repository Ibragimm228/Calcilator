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
        calculator: {
          primary: "#9b87f5",
          secondary: "#f3f3f3",
          accent: "#7E69AB",
          text: "#1A1F2C",
          operator: "#6E59A5",
        },
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
      },
      keyframes: {
        "button-press": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        "fade-in": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(-10px) scale(0.95) rotateX(-10deg)" 
          },
          "50%": { 
            opacity: "0.5", 
            transform: "translateY(-5px) scale(0.97) rotateX(-5deg)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0) scale(1) rotateX(0)" 
          },
        },
        "slide-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(20px) scale(0.95)" 
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(10px) scale(0.97)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0) scale(1)" 
          },
        },
        "pop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "70%": {
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "button-press": "button-press 0.2s ease-in-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        "pop-in": "pop-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
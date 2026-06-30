import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-muted": "var(--color-bg-muted)",
        "bg-surface": "var(--color-bg-surface)",
        "bg-dark": "rgb(var(--color-bg-dark))",
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-lighter": "var(--color-primary-lighter)",
        "primary-foreground": "var(--color-primary-foreground)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        "accent-foreground": "var(--color-accent-foreground)",
        text: "rgb(var(--color-text))",
        "text-muted": "rgb(var(--color-text-muted))",
        "text-light": "rgb(var(--color-text-light))",
        border: "var(--color-border)",
        white: "var(--color-white)",
        black: "var(--color-black)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        hero: "var(--shadow-hero)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;

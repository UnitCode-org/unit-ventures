import type { Config } from "tailwindcss";

const config: Config = {
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
        unit: {
          black: {
            100: "#1c1c1c",
            90: "#2c2c2e",
            80: "#3a3a3c",
            60: "#0a0004",
          },
          grey: {
            40: "#999999",
            30: "#c7c7cc",
            20: "#e5e5ea",
            10: "#dedede",
          },
          purple: {
            60: "#8247FF",
            40: "#6a45ff",
            20: "#9d85ff",
            10: "#ECE8FF",
          },
          blue: {
            60: "#2fadeb",
            40: "#52b9eb",
            20: "#8dcceb",
          },
          turquoise: {
            60: "#00FFC2",
            40: "#85e1cb",
            20: "#bde1dd",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 5s linear infinite",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

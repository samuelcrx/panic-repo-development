/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#FFF7F2",
        textPrimary: "#111112",
        textSecondary: "#475569",
        buttonBackground: "#000000",
        buttonText: "#FFFFFF",
        inputBorder: "#E5E7EB",
        inputBackground: "#FFFFFF",
        inputText: "#111112",
        linkText: "#475569",
        systemOrange: "#DC4128",
        gray200: "#E0EAF0",
        gray300: "#51525C",
        gray500: "#334155",
        borderGray: "#C7CFD4",
        statusActive: "#98BF7D",
        statusInactive: "#E59B2B",
        selectedTab: "#142129",
        disabledTab: "#404B53",
        baseBgColor: "#fff7f2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      boxShadow: {
        base: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
      },
      maxWidth: {
        118: "118px",
      },
    },
  },
};

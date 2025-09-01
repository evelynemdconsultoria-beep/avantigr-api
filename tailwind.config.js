/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { lime: "#B7EA16" },       // verde-lima
        graphite: { card: "#2B2F36" },    // grafite do card
        canvas: { light: "#F1F2F4" },     // fundo claro
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0,0,0,.22)",
        innerSoft: "inset 0 1px 0 rgba(255,255,255,.04)",
      },
      borderRadius: { "2xl": "1.25rem" },
      /* Barras mais lentas e suaves */
      keyframes: {
        bar: {
          "0%":   { transform: "scaleY(0.30)", opacity: "0.60" },
          "50%":  { transform: "scaleY(1.10)", opacity: "1.00" },
          "100%": { transform: "scaleY(0.30)", opacity: "0.60" },
        },
      },
      animation: {
        bar: "bar 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

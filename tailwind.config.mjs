/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        ink: "#111111",
        "ink-muted": "#333333",
        surface: "#F5F5F5",
        border: "#E6E6E6",
        gold: "#C6A664",
        red: "#E50914",
        black: "#0A0A0A"
      },
      boxShadow:{ soft:"0 6px 20px rgba(0,0,0,.06)" },
      borderRadius:{ xl:"1rem", "2xl":"1.5rem" },
      backgroundImage:{
        "pop-aperture": "radial-gradient(circle at 20% 30%, rgba(0,0,0,.04), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,.04), transparent 40%)",
        "film-grid": "linear-gradient(0deg, rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
}

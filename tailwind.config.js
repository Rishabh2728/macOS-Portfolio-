/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 22px 60px rgba(24, 34, 77, 0.18)",
        dock: "0 18px 45px rgba(17, 24, 39, 0.22)",
        window: "0 30px 80px rgba(17, 24, 39, 0.22)",
      },
      colors: {
        ink: "#1f2c48",
        mist: "#f5f8ff",
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', "sans-serif"],
        mono: ['"SF Mono"', '"JetBrains Mono"', "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        dockBounce: {
          "0%": { transform: "translateY(0) scale(1)" },
          "35%": { transform: "translateY(-10px) scale(1.08)" },
          "70%": { transform: "translateY(1px) scale(0.98)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        bootFade: {
          "0%, 70%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "dock-bounce": "dockBounce 420ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "boot-fade": "bootFade 1.8s ease forwards",
        caret: "caret 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

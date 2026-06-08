/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        company: {
          cream: "#F7E7CE",
          orange: "#FFA500",
          wine: "#5F021F",
        },
      },
      fontFamily: {
        law: ["var(--font-law)"],
      },
    },
  },
  plugins: [],
};

export default config;
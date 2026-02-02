/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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

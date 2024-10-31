/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whiteColor : "#EAEAEA",
        darkblue : "#2B2D42",
        softCream : "#F8F4EF",
        coral : "#FF6B6B",
        greenerGrey : "#525A50",
        softTosca : "#A8DADC",
        wiraaColor: "#2a9d8f"
      },
    },
  },
  plugins: [],
};

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
        yellowColor : "#FEF600",
        yellowColor2 : "#AEAA20",
        yellowColor3 : "#686508",
        blackColor : "#000",
        yellowColor2: "#F2A948",
        brownColor : "#6F3224",
        transparent : "#FFC63B00",
        wiraaColor: "#2a9d8f"
      },
    },
  },
  plugins: [],
};

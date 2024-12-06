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
        primary: {
          head: {
            black: "#0D0D0D",
            white: "#FFFFFF",
            onyx: "#2c2c2cDD",
            darkGray: "#808080",
            mediumGray: "rgba(128, 128, 128, 0.5)",
            lightGray: "#A0A0A0",
            lightBlue: "rgba(63, 100, 234, 0.43)",
            lightRed: "rgba(233, 63, 64, 0.43)",
            lightYellow: "rgba(255, 184, 0, 0.43)",
            darkBorder: "#383737",
            gradient: `linear-gradient(to right, #1A1A1A, #131313)`,
          },
        },
        shades: {
          darkLight: {
            whiteMinus10: "rgba(255, 255, 255, 0.1)",
            whiteMinus25: "rgba(255, 255, 255, 0.25)",
            whiteMinus50: "rgba(255, 255, 255, 0.5)",
            whiteMinus70: "rgba(255, 255, 255, 0.7)",
            blackbg: "rgba(21, 21, 21, 0.5)",
          },
        },
      },
    },
  },
  plugins: [],
};

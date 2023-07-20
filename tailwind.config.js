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
        purple: {
          900: "#110427",
        },
        blueBaby: {
          300: "#5A7BB8",
        },
        blueSerenate: {
          200: "#E2EEEC",
        },
        grey: {
          100: "#F8F9FA",
          300: "#E9ECEF",
          600: "#868E96",
          900: "#212529",
        },
      },
      fontFamily: {
        // sans: ["ui-sans-serif", "system-ui"],
        // serif: ["ui-serif", "Georgia"],
        mono: ["Source Code Pro"],
        display: ["Oswald"],
        // body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};

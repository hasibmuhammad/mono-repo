/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // "color-4": "#475467",
        // "color-5": "#101828",
        // "color-6": "#344054",
        "hc-1": "#ECECEC",
        "hc-2": "#307D33",
        "hc-3": "#0089C9",
        "hb-1": "#F5FFFA",
        "hb-2": "#F5FFFD",
        "hb-3": "#F9F5FF",
        "hb-4": "#EBFFEB",
        "hb-5": "#F9FAFB",
        // border: "#D0D5DD",
        primary: "#19525A",
      },
      boxShadow: {
        // "hs-1": "0px 1px 2px 0px #1018280D",
        "hs-2": "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      },
    },
  },
  plugins: [],
};

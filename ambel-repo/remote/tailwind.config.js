/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/images/bgpattern.svg)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "ambel-1": "0px 0px 1.67px 0px #00000040",
        "ambel-2": "0px 0px 16px 4px #FFFFFF40",
        "ambel-3": "0px 0px 4px 0px #00000040",
        "ambel-4": "0px 1px 2px 0px #1018280D",
        "ambel-5": "0px 0px 4px 0px #00000040",
      },
      colors: {
        "color-1": "#595959",
        "color-2": "#282828",
        "color-3": "#667085",
        "color-4": "#475467",
        "color-5": "#101828",
        "color-6": "#344054",
        "color-7": "#FF2323",
        "color-8": "#F87316",
        "color-9": "#027A48",
        "color-10": "#DC6803",
        "color-11": "#FDB022",
        "color-12": "#175CD3",
        "color-13": "#026AA2",
        "color-14": "#016DA3",
        border: "#D0D5DD",
        "bg-1": "#0D99FF",
        "bg-2": "#FAFAFA",
        "bg-3": "#ECFDF3",
        "bg-4": "#F2F4F7",
        "bg-5": "#EFF8FF",
        "bg-6": "#F0F9FF",
        "card-1": "#00B0AD",
        "card-2": "#327FF0",
        "card-3": "#0046B0",
        "card-4": "#EFF4FC",
        "card-5": "#FD9F00",
        "card-6": "#79A78A",
        "card-7": "#E41728",
        "card-8": "#EFFCFA",
        "card-9": "#DDF0FF",
        "card-10": "#FCF8EF",
        primary: "#19525A",
        secondary: "#25646C",
      },
    },
  },
  plugins: [],
};

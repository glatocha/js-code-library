module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#787c82", //for main frame, copy icon, scrollers, f7df1e
          DEFAULT: "#f2d675", //for button colors, tag bcgr
          //light: "#4a8bbe",
          light: "#1d2327", //hover buttons
        },
        text: {
          dark: "pink", //for ??
          DEFAULT: "black", //for buttons text
          //light: "#4a8bbe",
          light: "#f2d675", //text on hover buttons
        },
        background: {
          DEFAULT: "#1c1b1b",
        },
      },
    },
  },
  plugins: [],
};

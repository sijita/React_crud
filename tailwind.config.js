module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
};

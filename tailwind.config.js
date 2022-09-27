
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FB2E86",
          secondary: "#FFF6FB",
          accent: "#2F1AC4",
          neutral: "#F1F0FF",
          banner: "#F2F0FF",
          "base-100": "#ffffff",

        },
      },
      "synthwave",
    ],
  },
  plugins: [require("daisyui")],
}

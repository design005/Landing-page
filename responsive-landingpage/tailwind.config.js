/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary-mainbody-bluecolor': "hsl(218, 28%, 13%)",
        'primary-footer-bluecolor':  "hsl(218, 28%, 13%)",
        'primary-testimonial-bluecolor':  "hsl(219, 30%, 18%)",
        'primary-introandsign-bluecolor':  "hsl(219, 30%, 18%)",
         "secondary-cyangradient": "hsl(176, 68%, 64%)",
         "secondary-bluegradient": "hsl(198, 60%, 50%)",
        "error": "hsl(0, 100%, 63%)",
        "white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

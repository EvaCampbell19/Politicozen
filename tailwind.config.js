/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // boxShadow: {
      //   'custom-shadow': '0 0 15px rgb(68 255 154), 0 0 -55px rgb(68 176 255), 0 0 25px rgb(139 68 255), 0 0 35px rgb(255 102 68),0 0 20px rgb(235 255 112)',
      // },
    },

  },
  plugins: [],
};

// linear-gradient(90deg, rgb(68 255 154) -0.55%, rgb(68 176 255) 22.86%, rgb(139 68 255) 48.36%, rgb(255 102 68) 73.33%, rgb(235 255 112) 99.34%);
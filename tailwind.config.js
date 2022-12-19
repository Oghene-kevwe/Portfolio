/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        quill:{
          50:"#eaebef",
          100:"#abadbf",
          200:"#6d708f",
          300:"#2e335f",
          400:"#202443",
          500:"#121426",
          600:"#050509",
        },
      },
      fontFamily:{
        Montserrat: ['Montserrat']
      },
      backgroundImage:{
        'profile-image': "url('./images/potrait.jpg')"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        buttons: "#FF8367",
        text: "#FFEAD6",
        textDisabled :"#CCBBAB",
        background: "#FF8367",
        backgroundDisabled: '#CC6952'
      },
      fontFamily: {
        title: 'ClassicalRomance',
        texts: 'AddingtonCF'
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

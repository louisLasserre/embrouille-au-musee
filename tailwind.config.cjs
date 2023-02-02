/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        buttons: "#9E0039",
        text: "#33493A",
        background: "#FFE8AB"
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

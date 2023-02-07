/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        buttons: "#FF8367",
        text: "#121F30",
        background: "#FFEAD6",
        textLightDisabled :"#CCBBAB",
        textDark: '#121F30',
        buttonDisabled: '#CC6952'
      },
      fontFamily: {
        title: 'ClassicalRomance',
        text: 'Raleway-Regular',
        textTrans: 'Raleway-Italic',
        button: 'Raleway-Bold',
        buttonTrans: 'Raleway-Medium',
        ssTitle: 'Raleway-Light',
        titlePainting: 'Raleway-SemiBold',
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
    },
    fontSize:{
      'title': '45px',
      'text' : '15px',
      'button' : '16px',
      'ssTitle': '14px',
      'titlePainting': '20px',
    }
  },
  plugins: [],
}

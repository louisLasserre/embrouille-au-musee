/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        button: "#FF8367",
        background: "#FFEAD6",
        backgroundDark: "#cea68c",
        textLightDisabled :"#CCBBAB",
        textDark: '#121F30',
        buttonDisabled: '#CC6952'
      },
      fontFamily: {
        title: ['ClassicalRomance, Serif, palatino, PT Mono, Didot'],
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
    },
    BackgroundImage:{
      'backgroundImg': "url('icons/fond_item.pgn')",
    },
  },
  plugins: [],
}

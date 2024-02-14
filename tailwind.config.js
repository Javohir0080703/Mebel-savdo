/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '#313131':'#313131',
        '#414141':'#414141',
        '#E6E6E6':'#E6E6E6',
        '#686868':'#686868',
        '#E92D2D':'#E92D2D',
        '#3C3C3C':'#3C3C3C',
        '#051018':'#051018',
        '#C4C4C4':'#C4C4C4',
        '#245462':'#245462'
      },
      backgroundImage:{
        'homebg1': "url('./img/1785.png')",
        'homebg2': "url('./img/herobg2.jpg')",
        // 'homebg1': "url('./img/1785.png')",
      }
    },
  },
  plugins: [],
}
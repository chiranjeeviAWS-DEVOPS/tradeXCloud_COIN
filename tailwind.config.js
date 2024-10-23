/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        loginCardBackdrop: "#F5FBF7",
        loginInputBackdrop: "#D8E6E0",
        loginInputBorder: "#BCC9C4",
        loginFPFont:"#006B59",
        loginBtnStart:"#006B59",
        loginBtnEnd: "#00D1AE",
        loginToggleActive: "#86F5D9",
        navbarBG:"#F5FBF7",
        stockFontSub:"#3D4945",
        cardFirst:"#C3EDDF",
        cardSecond:"#CAE4FF",
        cardThird:"#43617C",
        cardFourth:"#E41937",
        cardArrowDark:"#43617C",
        cardArrowLight:"#CAE4FF",
        searchAITextRed:"#BA1A1A",
        inputText:"#A49F9F",
        searchAICardColor:"#EAEFEB",
        searchAITagColor:"#D8E6E0",
        serachAITagTextColor:"#3D4945",
        chartBackgroundColor:"#86F5D9",
        tokenNumericsBG:"#CAE4FF",
        stockCardFirst:"#006B59",
        stockCardSecond:"#0064E0",
        stockCardThird:"#E41937",
        stockCardFourth:"#303030",
        stockTokenCard:"#F5FBF7",
        stockCopyCard:"#EAEFEB",
        stockHeadCard:"#F0F5F1",
        niftycolor:"#151515",
        marketCardBG:"#A7EEFD"
      },
      boxShadow: {
        'custom1': '0px 0px 2.9px 0px #A7EEFD',
        'custom2': '0px 1.6px 3.6px 0px #A7EEFD',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'ssm': '320px',
   // => @media (min-width: 320px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1180px',
        // => @media (min-width: 1280px) { ... }

        '1xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    
  },
  plugins: [],
}


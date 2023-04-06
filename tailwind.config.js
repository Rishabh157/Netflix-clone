/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    backgroundImage: {
      'page-btn': 'linear-gradient(180deg, #e6e6e6, #ddd)',
      'page-btn-active': 'linear-gradient(180deg, #ffffff, #d5d5d5)',
    },
    borderWidth: {
      DEFAULT: '1px'
    },
    extend: {
      colors: {
        'main-body': '#141414',
        'netflix-btn': '#E50914',
        'text': '#333',
        'netflix-btn-hover': '#C11119',
        'link': '#0073e6',
        'light-black': '#141414',
        'footer-gray': '#808080',
        'notifi-border': '#645252',
        'notifi-name': '#fbfbfb',
        'panle-text': '#cfbaba',
        'bg-ag': '#33333399',
        'account-page': '#F2F2F2',
        'btn': '#e6e6e6',
        'inp-err': '#EB3942',
        'footer': '#f3f3f3',
        'success': '#5fa53f',
        'pay-line': '#ccc',
        'gray': '#8c8c8c',
        'gray-light': '#f4f4f4',
        'check-box': '#737373',
      },
      transitionTimingFunction: {
        'in-btn': 'cubic-bezier(0.5, 0, 0.1, 1)',
        'out-btn': 'cubic-bezier(0.9, 0, 0.51, 1)'
      },
      transitionDuration: {
        '0': '0ms',
        '250': '250ms',
      }
    },
  },
  plugins: [],
}

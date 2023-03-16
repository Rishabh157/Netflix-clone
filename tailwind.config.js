/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    backgroundImage: {
      'page-btn': 'linear-gradient(180deg, #e6e6e6, #ddd)',
      'page-btn-active' : 'linear-gradient(180deg, #ffffff, #d5d5d5)',
    },
    borderWidth: {
      DEFAULT: '1px'
    },
    extend: {
      colors: {
        'link': '#0073e6',
        'light-black': '#141414',
        'footer-gray': '#808080',
        'notifi-border': '#645252',
        'notifi-name': '#fbfbfb',
        'panle-text': '#cfbaba',
        'bg-ag': '#33333399',
        'account-page': '#F2F2F2',
        'btn': '#e6e6e6',
      }
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // app content
    `../../web/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
      animation: {
        'progress-bar': 'indeterminate-progress-bar 2s linear infinite',
      },
      keyframes: {
        'indeterminate-progress-bar': {
          from: {
            left: '-50%',
          },
          to: {
            left: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};

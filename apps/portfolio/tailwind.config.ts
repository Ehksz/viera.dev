const sharedConfig = require('tailwind-config/tailwind.config.js');

module.exports = {
  ...sharedConfig,
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      whitelist: ['ui-'], // Exclude ui- prefix from purge
    },
  },
};

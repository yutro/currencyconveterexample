/* global exports */
exports.config = {
  bootstrap: null,
  helpers: {
    Puppeteer: {
      show: false,
      url: 'http://localhost:3000'
    }
  },
  include: {},
  mocha: {},
  name: 'rates-converter-app',
  output: './reports/e2e',
  tests: './src/**/*_test.js'
};

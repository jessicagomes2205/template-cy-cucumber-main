const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents,
    baseUrl: 'https://front.serverest.dev/',
    env: {
      TAGS: 'not @ignore',
    },
  },
});

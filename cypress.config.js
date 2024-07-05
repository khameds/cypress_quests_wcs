const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  env: {
    baseUrl : "https://preprod.backmarket.fr/fr-fr/register",
    noteApiBaseUrl : "https://practice.expandtesting.com/notes/api",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
    },
  },
});

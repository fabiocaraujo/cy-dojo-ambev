const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const grepTags = require('cypress-grep/src/plugin');


module.exports = defineConfig({
  projectId: 'nms9ip',
  e2e: {
    env: {allure: true},
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      grepTags(config)

      const version = config.env.version || 'hlg'
      config.env = require(`./cypress/config/${version}.json`);
      config.baseUrl = config.env.baseUrl

      return config;
    },
    baseUrl: 'https://conexaoqa.herokuapp.com/'
  },
  env: {
    prod_url: "https://conexaoqa.herokuapp.com/",
    hlg_url: "https://hlg.conexaoqa.herokuapp.com/",
    local_url: "http://localhost:3000/"
  }
});

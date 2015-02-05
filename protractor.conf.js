exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['incognito', 'disable-extensions', 'start-maximized']
    }
  },
  specs: [
    'tests/e2e/specs/*.spec.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: false
  },
  allScriptsTimeout: 20000,
  onPrepare: function() {
    // no need
  }
};

var GooglePage = function() {
  this.navigateTo = function() {
    // since this is a non-angular page, we need to use unwrapped webdriver
    // this is done via 'browser.driver' instead of 'just browser'
    browser.driver.get('http://www.google.com');
    browser.driver.wait(function() {
      return browser.driver.findElement(by.name('q'));
    });
  };

  this.setQuery = function(query) {
    browser.driver.findElement(by.name('q')).sendKeys(query);
  };

  this.search = function () {
    browser.driver.findElement(by.name('q')).sendKeys(protractor.Key.ENTER);
  };
};

module.exports = GooglePage;

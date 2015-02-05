var GooglePage = require('../pages/google.page.js');

describe('Google Page', function(){
  var googlePage = new GooglePage();

  beforeEach(function() {
    googlePage.navigateTo();
  });

  it('should google that for you', function() {
    googlePage.setQuery('let me protractor that for you');
    googlePage.search();
    expect(browser.driver.getCurrentUrl()).toMatch(/let\+me\+protractor\+that\+for\+you/);
    browser.pause();
  });
});

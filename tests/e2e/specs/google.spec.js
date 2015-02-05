describe('Google Page', function(){
  it('should google that for you', function() {
    // since this is a non-angular page, we need to use unwrapped webdriver
    // this is done via 'browser.driver' instead of 'just browser'
    browser.driver.get('http://www.google.com');

    // we also have to find a way to detect the page is fully loaded
    // in this case, the search box being present
    browser.driver.wait(function() {
      return browser.driver.findElement(by.name('q'));
    });

    // now we send the keys
    browser.driver.findElement(by.name('q')).sendKeys('let me protractor that for you');

    // press enter
    browser.driver.findElement(by.name('q')).sendKeys(protractor.Key.ENTER);

    // and check if the search terms appear in the url
    expect(browser.driver.getCurrentUrl()).toMatch(/let\+me\+protractor\+that\+for\+you/);

    // we pause protractor at the end just so the browser won't close
    browser.pause();
  });
});

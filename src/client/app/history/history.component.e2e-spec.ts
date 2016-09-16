describe('History', () => {

  beforeEach( () => {
    browser.get('/history');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-history h2')).getText()).toEqual('Features'); // change Features word to testable word
  });

});

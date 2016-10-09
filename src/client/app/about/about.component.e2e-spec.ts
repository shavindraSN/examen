describe('About', () => {

  beforeEach( () => {
    browser.get('/about');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-about h4')).getText()).toEqual('Shavindra Manathunga');
  });

});

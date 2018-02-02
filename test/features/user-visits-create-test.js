const {assert} = require('chai');
const {jsdom} = require('jsdom');



describe('User visits create page', () => {
  describe('user posts new item', ()=> {
    it('render the post', () => {
      // setup
      browser.url('/create');
      const title = buildItemObject();
      const description = buildItemObject();
      const imageUrl = buildItemObject();
      browser.url('/create.html');
      // exercise
      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');

      assert.include(browser.getText('body'), title);
      assert.include(browser.getAttribute('body img', 'src'), imageUrl);
    });
  });
});

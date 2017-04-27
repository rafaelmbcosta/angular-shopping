import { ShoppingAngularPage } from './app.po';

describe('shopping-angular App', () => {
  let page: ShoppingAngularPage;

  beforeEach(() => {
    page = new ShoppingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

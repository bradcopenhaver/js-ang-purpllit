import { PurpllitPage } from './app.po';

describe('purpllit App', function() {
  let page: PurpllitPage;

  beforeEach(() => {
    page = new PurpllitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

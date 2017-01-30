import { W3t1Page } from './app.po';

describe('w3t1 App', function() {
  let page: W3t1Page;

  beforeEach(() => {
    page = new W3t1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

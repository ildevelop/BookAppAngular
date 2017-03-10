import { BookAppAngularPage } from './app.po';

describe('BookAppAngular App', function() {
  let page: BookAppAngularPage;

  beforeEach(() => {
    page = new BookAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

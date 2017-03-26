import { NgSliderizrPage } from './app.po';

describe('ng-sliderizr App', () => {
  let page: NgSliderizrPage;

  beforeEach(() => {
    page = new NgSliderizrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

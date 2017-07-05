import { FbLoginPage } from './app.po';

describe('fb-login App', () => {
  let page: FbLoginPage;

  beforeEach(() => {
    page = new FbLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

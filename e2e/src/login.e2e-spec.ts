import { LoginPage } from './login.po';

describe('login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display Ceiba block', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Ceiba block');
  });
});

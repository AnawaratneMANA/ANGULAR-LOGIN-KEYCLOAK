import { KeycloakApplicationPage } from './app.po';

describe('keycloak-application App', function() {
  let page: KeycloakApplicationPage;

  beforeEach(() => {
    page = new KeycloakApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

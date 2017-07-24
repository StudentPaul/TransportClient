import { TransportClientPage } from './app.po';

describe('transport-client App', () => {
  let page: TransportClientPage;

  beforeEach(() => {
    page = new TransportClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AustraliaDemoPage } from './app.po';

describe('australia-demo App', () => {
  let page: AustraliaDemoPage;

  beforeEach(() => {
    page = new AustraliaDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to aus!!');
  });
});

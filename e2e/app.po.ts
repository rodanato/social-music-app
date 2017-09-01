import { browser, by, element } from 'protractor';

export class AustraliaDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aus-root h1')).getText();
  }
}

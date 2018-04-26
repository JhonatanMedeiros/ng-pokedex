import { browser, element, by, Key, protractor } from 'protractor';

export class PokemonPage {

  navigateTo() {
    browser.get('/pokemon');
    return browser.waitForAngular();
  }

  getInputSearch() {
    return element(by.id('inputSearch'));
  }

  getPokemonCardElements() {
    return element.all(by.css('.card--media'));
  }

  getFirstPokemonCardElement() {
    return element(by.css('.card--media'));
  }

  getOpenModalElement() {
    return element(by.tagName('app-modal'));
  }

  getOpenModalHeadingElement() {
    return element(by.css('app-modal h1'));
  }

  selectNextKey() {
    $('body').sendKeys(protractor.Key.RIGHT);
  }

  selectPrevKey() {
    $('body').sendKeys(protractor.Key.LEFT);
  }

  selectEscapeKey() {
    $('body').sendKeys(protractor.Key.ESCAPE);
  }
}

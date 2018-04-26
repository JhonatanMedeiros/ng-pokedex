import { PokemonPage } from './pokemon.po';
import { browser } from 'protractor';

function sleep() {
  browser.driver.sleep(0); // 1500
}

describe('ng-pokedex //', function () {

  let page: PokemonPage;

  beforeEach(() => {
    page = new PokemonPage();
  });

  it('deve exibir a lista de pokemon e verificar se exite 151 pokemon', () => {

    page.navigateTo();
    expect(page.getPokemonCardElements().count()).toBe(151);

    sleep();
  });

  it('deve abrir e ver um determinado pokemon', () => {

    page.navigateTo();
    page.getFirstPokemonCardElement().click();

    expect(page.getOpenModalElement()).toBeTruthy();
    expect(page.getOpenModalHeadingElement().getText()).toBe('Bulbasaur #1');

    sleep();
  });

  it('deve pesquisar por um pokemon', () => {

    page.navigateTo();

    page.getInputSearch().click();
    page.getInputSearch().sendKeys('Mewtwo');

    page.getFirstPokemonCardElement().click();
    expect(page.getOpenModalElement()).toBeTruthy();

    expect(page.getOpenModalHeadingElement().getText()).toBe('Mewtwo #150');

    sleep();
  });


  // TODO: fix on firefox
  // it('deve abrir e permitir que use as teclas de seta para navegar entre pokemon', () => {
  //   page.navigateTo();
  //   page.getFirstPokemonCardElement().click();
  //   page.selectNextKey();
  //
  //   expect(page.getOpenModalHeadingElement().getText()).toBe('Ivysaur #2');
  //
  //   page.selectPrevKey();
  //   page.selectPrevKey();
  //   expect(page.getOpenModalHeadingElement().getText()).toBe('Mew #151');
  // });

});

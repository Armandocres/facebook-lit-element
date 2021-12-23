import { html, fixture, expect } from '@open-wc/testing';

import { itemsNav } from '../src/utils/categories';
import '../src/components/list-categories';

describe('Pruebas en componente list-categories', () => {

  it('works', async () => {
    let el = await fixture(html`<list-categories></list-categories>`);
  });

  it('las categorias deben ser 3', async () => {
    let el = await fixture(html`<list-categories></list-categories>`);

    el.listCategories = itemsNav;
    expect(el.listCategories.length).to.equal(4)
  })
})
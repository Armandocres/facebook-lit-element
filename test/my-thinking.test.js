import { html, fixture, expect } from '@open-wc/testing';

import '../src/components/my-thinking';

describe('Pruebas en componente my-thinking', () => {
  it('works', async () => {
    let el = await fixture(html`<my-thinking></my-thinking>`);
  });

  it('Existe el formulario', async () => {
    let el = await fixture(html`<my-thinking></my-thinking>`);

    expect(el.getForm).exists
  })



  it('existe la función del getPosts', async () => {
    const el = await fixture(html`<my-thinking></my-thinking>`);
    expect(el.getPosts).exists
  })

  it('existe la función del post', async () => {
    const el = await fixture(html`<my-thinking></my-thinking>`);
    expect(el.postData).exists
  })

});
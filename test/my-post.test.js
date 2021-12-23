import { html, fixture, expect } from '@open-wc/testing';

import '../src/components/my-post';

describe('Pruebas en componente My-Post', () => {

  it('works', async () => {
    const el = await fixture(html`<my-post></my-post>`);
  });

  it('Renderiza 3 post', async () => {
    const el = await fixture(html`<my-post></my-post>`);
    setTimeout(() => {
      expect(el.post.length).to.equal(3)
    }, 500)
  })

  it('existe la función que teniendo los post los renderiza', async () => {
    const el = await fixture(html`<my-post></my-post>`);
    expect(el.dataTemplate).exists
  })
})
import { html, fixture, expect } from "@open-wc/testing";

import "../src/page/page-posts";

describe("Pruebas en Página de post", () => {
  it("works", async () => {
    const el = await fixture(html`<page-posts></page-posts>`);
  });

  it("existen las proppiedades", async () => {
    const el = await fixture(
      html`<page-posts
        title="test de prueba"
        images="../src/img/perfil.png"
      ></page-posts>`
    );
    expect(el.getAttribute("title")).to.equal("test de prueba");
    expect(el.getAttribute("images")).to.equal("../src/img/perfil.png");
  });
});

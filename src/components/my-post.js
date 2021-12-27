import { LitElement, html } from "lit-element";
import { styles } from "../styles/my-post";

import "../page/page-posts";

export class MyPost extends LitElement {
  static get properties() {
    return {
      post: { type: Array },
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.post = [];
  }

  render() {
    return html` ${this.dataTemplate()} `;
  }

  dataTemplate() {
    console.log(this.post);
    return html`
      ${this.post.map(
        (item) => html`
          <page-posts
            .title="${item.title}"
            .image="${item.images}"
            .hour="${item.hours.hour}"
            .minutes="${item.hours.minutes}"
          ></page-posts>
        `
      )}
    `;
  }
}
customElements.define("my-post", MyPost);

import { LitElement, html } from 'lit-element';
import { styles } from '../styles/my-post';

import '../page/page-posts';

export class MyPost extends LitElement {

  static get properties() {
    return {
      title: {type: String},
      img: {type: String},
      hour: {typeof: Number},
      post: {type: Array},
      hour: {typeof: Number},
      minutes: {typeof: Number}
    }
  }

  static get styles() {
    return [
      styles
    ]
  }

  constructor() {
    super();
    this.img = '';
    this.hour = 0;
    this.title = '';
    this.post = [];
    this.hour = 0;
    this.minutes = 0;
  }

  render() {
    return html`
      ${this.dataTemplate()}
    `;
  }

  dataTemplate() {
    return html`
      ${this.post.map(item => html`
        <page-posts .title="${item.title}" .image="${item.images}" .hour="${item.hours.hour}" .minutes="${item.hours.minutes}"></page-posts>
      `)}
    `
  }
}
customElements.define('my-post', MyPost);
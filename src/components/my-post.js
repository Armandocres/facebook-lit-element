import { LitElement, html } from 'lit-element';
import { GenerateGEt } from '../utils/generateGet';
import { styles } from '../styles/my-post';

import '../page/page-posts';

export class MyPost extends LitElement {

  static get properties() {
    return {
      title: {type: String},
      img: {type: String},
      hour: {typeof: Number},
      post: {type: Array}
    }
  }

  static get styles() {
    return [
      styles
    ]
  }

  constructor() {
    super();
    this.img = 'https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com%3Fhl%3Des';
    this.hour = 0;
    this.title = '';
    this.post = [];
    this.generateGet = new GenerateGEt();
  }

  render() {
    return html`
    <div>
      ${this.getHeader(this.title, this.img, this.hour)}
      ${this.dataTemplate()}
    </div>
    `;
  }

  //componente para tener multiples post
  getHeader(title, img, hour) {
    return html`
      ${title && img && hour ? html` <page-posts titulo=${title} image=${this.img} hour=${hour}></page-posts>` : html``}
  `;
  }

  dataTemplate() {
    console.log(this.post);
    return html`
      ${this.post.map(item => html`
        <page-posts .titulo="${item.titulo}" .image="${item.img}" .hour="${item.hour}"></page-posts>
      `)}
    `
  }
}
customElements.define('my-post', MyPost);
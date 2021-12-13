import { LitElement, html } from 'lit-element';
import { styles } from '../styles/my-post';

export class MyPost extends LitElement {

  static get properties() {
    return {
      title: {typeof: String},
      img: {typeof: String},
      hour: {typeof: Number}
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
  }

  render() {
    return html`
      ${this.getHeader(this.title, this.img, this.hour)}
    `;
  }

  getHeader(title, img, hour) {
    if (!title) {
      return html``;
    }
    return html`
      <div class="ContainerPost">
        <img src='${img}' alt="imagen de perfil" class="ContainerPost__img">
        <div>
          <p>${title}</p>
          <span>${hour}</span>
        </div>
      </div>
    `;
  }

}
customElements.define('my-post', MyPost);
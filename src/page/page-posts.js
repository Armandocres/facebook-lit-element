import { LitElement, html } from 'lit-element';
import { styles } from '../styles/my-post';

export class PagePosts extends LitElement {

  static get properties() {
    return {
      titulo: {type: String},
      image: {type: String},
      hour: {typeof: Number}
    }
  }

  constructor() {
    super();
    this.img = 'https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com%3Fhl%3Des';
    this.hour = 0;
    this.titulo = '';
  }

  static get styles() {
    return [
      styles
    ]
  }

  render() {
    return html`
      <div class="ContainerPost">
        <img src='${this.image}' alt="imagen de perfil" class="ContainerPost__img">
        <div>
          <p>${this.titulo}</p>
          <span>${this.hour}</span>
        </div>
      </div>
    `;
  }
}
customElements.define('page-posts', PagePosts);
import { LitElement, html } from 'lit-element';
import { styles } from '../styles/my-categories';

export class MyCategories extends LitElement {

  static get styles() {
    return [
      styles
    ]
  }

  static get properties() {
    return {
      img: {type: String},
      icon: {type: String},
      text: {type: String},
      clase: {type: String}
    }
  }

  constructor() {
    super()
    this.img = '';
    this.icon = '';
  }

  render() {
    return html`
      <div class='ContainerCategories'>
        ${this.getIMage(this.img)}
        ${this.getIcon(this.icon)}
        ${this.getTex(this.text)}
      </div>
    `;
  }

  getIMage(img) {
    return html`
      ${img ? html`<img .src='${img}' alt='imagen' class='ContainerCategories__img'/>` : html``}
    `;
  }

  getIcon(icon) {
    return html`
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined">
      ${icon ? html`
        <span class='material-icons-outlined ContainerCategories__icons'>
          <span>${icon}</span>
        </span>
      ` : html``}
    `;
  }

  getTex(text) {
    return html`
      ${ text ? html`<div><p>${text}</p></div>` : html`` }
    `;
  }
}

customElements.define('my-categories', MyCategories);
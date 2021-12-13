import { LitElement, html, css } from 'lit-element';
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
    if (!img) {
      return html``
    }
    return html`
      <img .src='${img}' alt='imagen' class='ContainerCategories__img'/>
    `
  }

  getIcon(icon) {
    if (!icon) {
      return html``;
    }
    return html`
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined">

        <span class='material-icons-outlined ContainerCategories__icons'>
          <span>${icon}</span>
        </span>
      `
  }

  getTex(text) {
    if(!text) {
      return html``;
    }

    return html`
    <div>
        <p>${this.text}</p>
    </div>
    `
  }
}

customElements.define('my-categories', MyCategories);
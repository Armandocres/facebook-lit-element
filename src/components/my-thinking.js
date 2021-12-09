import { LitElement, html } from 'lit-element';
import { styles } from '../styles/my-thinking';

export class MyThinking extends LitElement {

  static get properties(){
    return {
      img: {typeof: String},
      quien: {typeof: String}
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
    this.quien = '';
  }

  render() {
    return html`
    <div class='ContainerThink'>
        ${this.getIMage(this.img)}
        ${this.getForm(this.quien)}
      </div>
    `;
  }

  getIMage(img) {
    if (!img) {
      return html``
    }
    return html`
      <img .src='${img}' alt='imagen' class='ContainerThink__img'/>
    `
  }

  getForm(quien) {
    if(!quien) {
      return html``;
    }
    return html`
      <form>
        <label>
          <input
            placeholder="¿Qué estás pensando, ${this.quien}?"
            id="think"
            class="ContainerThink--input"
          >
        </label>
      </form>
    `;
  }
}
customElements.define('my-thinking', MyThinking);
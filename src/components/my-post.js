import { LitElement, html } from 'lit-element';
import { GenerateGEt } from '../utils/generateGet';
import { styles } from '../styles/my-post';

export class MyPost extends LitElement {

  static get properties() {
    return {
      title: {type: String},
      img: {type: String},
      hour: {typeof: Number},
      response: {type: Array},
      Author: {type: String}
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
    this.response = [];
    this.generateGet = new GenerateGEt();
  }

  firstUpdated() {
    this.getApiData()
  }

  render() {
    return html`
    <div>
      ${this.getHeader(this.title, this.img, this.hour)}
      ${this.dataTemplate()}
    </div>
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

  getApiData() {
    this.generateGet.getDataApi()
    this.generateGet.addEventListener('CallGet', (data) => {
      this.response = data.detail.data;
    })
  }

  dataTemplate() {
    return html`
      ${this.response.map(item => html`
      <div class="ContainerPost">
        <img src='${this.img}' alt="imagen de perfil" class="ContainerPost__img">
        <div>
          <p>${item.titulo}</p>
          <span>${item.hour}</span>
        </div>
      </div>
      `)}
    `
  }
}
customElements.define('my-post', MyPost);
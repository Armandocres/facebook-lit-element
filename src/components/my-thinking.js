import { LitElement, html } from 'lit-element';
import { GeneratePOst } from '../utils/generatePost';
import { styles } from '../styles/my-thinking';

import './my-post'

export class MyThinking extends LitElement {

  static get properties(){
    return {
      img: {type: String},
      quien: { type: String },
      title: { type: String },
      response:{type: Object},
      proposito: {type: String},
      hours: {typeof: Object},
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
    this.title = '';
    this.proposito = '';
    this.response = {};
    this.hours = {};
    this.postPosts = new GeneratePOst();
    this.hoy = new Date();
    this.hours.hour = this.hoy.getHours();
    this.hours.minutes = this.hoy.getMinutes();
  }

  render() {
    return html`
    <div class='ContainerThink'>
        <img .src='${this.img}' alt='imagen' class='ContainerThink__img'/>
        ${this.getForm(this.quien, this.proposito)}
    </div>
    <div class="ContainerPost">
      ${this.getPosts()}
    </div>
    `;
  }

  getForm(quien, proposito) {
    return html`
      ${quien ? html`
      <form @submit=${this.postData}>
        <label>
        <input
          placeholder="¿${proposito}, ${quien}?"
          id="think"
          class="ContainerThink--input"
        >
      </label>
    </form>
      ` : html``}
    `
  }

  postData(e) {
    e.preventDefault()
    this.title = e.target['think'].value;
    this.postPosts.postData(this.title, this.hours, this.img, this.hoy)
    this.postPosts.addEventListener('my-post', (data) => {
      this.response = data.detail.data;
    })
    e.target['think'].value = ''
  }

  getPosts() {
    return html`
      ${Object.entries(this.response).length === 0 ? html`` : html`
        <page-posts
          .title="${this.response.title}"
          .image="${this.img}"
          .hour="${this.hours.hour}"
          .minutes="${this.hours.minutes}">
        </page-posts>
      `}
    `
  }
}
customElements.define('my-thinking', MyThinking);
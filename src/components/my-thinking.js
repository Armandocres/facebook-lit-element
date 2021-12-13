import { LitElement, html } from 'lit-element';
import { GeneratePOst } from '../utils/generatePost';
import { styles } from '../styles/my-thinking';

import './my-post'

export class MyThinking extends LitElement {

  static get properties(){
    return {
      img: {type: String},
      quien: { type: String },
      titulo: { type: String },
      response:{type: Object}
    }
  }

  static get styles() {
    return [
      styles
    ]
  }

  constructor() {
    super();
    this.img = 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png';
    this.quien = '';
    this.titulo = '';
    this.response = {};
    this.postPosts = new GeneratePOst();
  }

  render() {
    return html`
    <div class='ContainerThink'>
        ${this.getIMage()}
        ${this.getForm(this.quien)}
    </div>
    <div class="ContainerPost">
      ${this.getPosts()}
    </div>
    `;
  }

  getIMage() {
    return html`
      <img .src='${this.img}' alt='imagen' class='ContainerThink__img'/>
    `
  }

  getForm(quien) {
    if(!quien) {
      return html``;
    }
    return html`
      <form @submit=${this.postData}>
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

  postData(e) {
    e.preventDefault()
    let hoy = new Date();
    this.titulo = e.target['think'].value;
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    this.postPosts.postData(this.titulo, hora, this.img, hoy)
    this.postPosts.addEventListener('Posts', (data) => {
      this.response = data.detail.data;
    })
  }

  getPosts() {
    if (!this.response) {
      return html``;
    }
    return html`
      <my-post title="${this.response.titulo}" hour="${this.response.hour}" img="${this.img}" ></my-post>
    `;
  }
}
customElements.define('my-thinking', MyThinking);
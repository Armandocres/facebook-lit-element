import { LitElement, html } from "lit-element";
import { styles } from "../styles/my-post";

//Página contenedora de post

export class PagePosts extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      minutes: { type: Number },
      hour: { type: Number },
    };
  }

  constructor() {
    super();
    this.image = "";
    this.title = "";
    this.hour = 0;
    this.minutes = 0;
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="ContainerPost">
        <img
          src="${this.image}"
          alt="imagen de perfil"
          class="ContainerPost__img"
        />
        <div>
          <p>${this.title}</p>
          <span>${this.hour} : </span>
          <span>${this.minutes} h</span>
        </div>
      </div>
    `;
  }
}
customElements.define("page-posts", PagePosts);

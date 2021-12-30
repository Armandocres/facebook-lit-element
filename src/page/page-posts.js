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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
      />
      <div class="ContainerPost">
        <figure>
          <img
            src="${this.image}"
            alt="imagen de perfil"
            class="ContainerPost__img"
          />
        </figure>
        <div>
          <p>${this.title}</p>
          <div class="ContainerPost__hours">
            <span>${this.hour} : </span>
            <span>${this.minutes} h</span>
            <button class="material-icons-outlined icon-trash">clear</button>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("page-posts", PagePosts);

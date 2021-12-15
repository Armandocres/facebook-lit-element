import { LitElement, html } from 'lit-element';
import { styles } from './styles/my-app';

export class App extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return [
      styles
    ]
  }

  render() {
    return html`
    <div class="Container">
			<div class="Container__Categorias">
				<div class="item1">
					<my-categories
						img="./src/img/perfil.png"
						text="Armando"
					></my-categories>
					<my-categories icon="people" text="Amigos"></my-categories>
					<my-categories icon="store" text="Marketplace"></my-categories>
					<my-categories icon="calendar_month" text="Eventos"></my-categories>
					<my-categories icon="groups" text="Grupos"></my-categories>
				</div>
				<div class="item2 Container__post">
					<my-thinking img="./src/img/perfil.png" quien="Armando" proposito='Qué estás pensando'></my-thinking>
				</div>
			</div>
		</div>
    `;
  }
}
customElements.define('my-app', App);
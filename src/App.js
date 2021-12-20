import { LitElement, html } from "lit-element";
import { GenerateGEt } from "./utils/generateGet";
import { styles } from "./styles/my-app";

import "./components/my-post";
export class App extends LitElement {
	static get properties() {
		return {
			post: { type: Array },
		};
	}

	constructor() {
		super();
		this.generateGet = new GenerateGEt();
		this.post = [];
	}

	firstUpdated() {
		this.getApiData();
	}

	static get styles() {
		return [styles];
	}

	render() {
		return html`
			<div class="Container">
				<div class="Container__Categorias">
					<div class="item1">
						<list-categories></list-categories>
					</div>
					<div class="item2 Container__post">
						<my-thinking
							img="./src/img/perfil.png"
							quien="Armando"
							proposito="Qué estás pensando"
						></my-thinking>
						<my-post .post="${this.post}"></my-post>
					</div>
				</div>
			</div>
		`;
	}

	getApiData() {
		this.generateGet.getDataApi();
		this.generateGet.addEventListener("my-get", (data) => {
			this.post = data.detail.data;
		});
	}
}
customElements.define("my-app", App);

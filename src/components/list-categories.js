import { LitElement, html } from "lit-element";
import { itemsNav } from "../utils/categories";

import "../page/my-categories";

export class ListCategories extends LitElement {
	static get properties() {
		return {
			img: { type: String },
			listCategories: { type: Array },
		};
	}

	constructor() {
		super();
		this.listCategories = itemsNav;
	}

	render() {
		return html` ${this.getPerfil()} ${this.getCatgories()} `;
	}

	getPerfil() {
		return html`
    <my-categories
				img="./src/img/perfil.png"
				text="Armando"
		></my-categories
    `;
	}

	getCatgories() {
		return html`
			${this.listCategories.map(
				(item) => html`
					<my-categories
						text="${item.text}"
						icon="${item.icon}"
					></my-categories>
				`
			)}
		`;
	}
}
customElements.define("list-categories", ListCategories);

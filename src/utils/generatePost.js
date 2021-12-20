import { LitElement } from "lit-element";
import { CUstomEVents } from "./CustomEvents";

export class GeneratePOst extends LitElement {
	static get properties() {
		return {
			url: { type: String },
		};
	}

	constructor() {
		super();
		this.url = "http://localhost:3000/posts";
		this.customEvents = new CUstomEVents();
	}

	/**Trae la data de la petición y la propaga por el CustomEvent
	 * 1.-si la data no trae nada, se crea un arreglo vacio
	 * 2.-se propaga el evento por CustomEvents
	 */
	_sendData(data) {
		try {
			this.dispatchEvent(
				new CustomEvent("my-post", {
					detail: { data },
					bubbles: true,
					composed: true,
				})
			);
		} catch (error) {
			this.dispatchEvent(
				new CustomEvent("error-catch", {
					detail: { error },
				})
			);
		}
	}

	/* peticion que retorna un objeto
    formato: {title: '', hours: {hour: "" minutes: ""}, images: '', id: 'Se autogenera con el date()'}
    2-se parsea la respuesta a json y se devuelve a la función _sendData
  */
	postData(title, hours, images, id) {
		try {
			fetch(this.url, {
				method: "POST",
				body: JSON.stringify({
					title,
					hours,
					images,
					id,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => {
					return response.json();
				})
				//manda la data a sendData
				.then((data) => {
					this._sendData(data);
				})
				.catch((error) => {
					this.customEvents.CustomError("error-promise", error);
				});
		} catch (error) {
			this.customEvents.CustomError("error-catch", error);
		}
	}
}
customElements.define("my-generatepost", GeneratePOst);

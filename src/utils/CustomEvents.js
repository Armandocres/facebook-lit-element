import { LitElement } from "lit-element";

export class CUstomEVents extends LitElement {

	CustomError(error) {
		this.done = true
		this.dispatchEvent(
			new CustomEvent(error, {
				detail: this.done,
			})
		);
	}
}
customElements.define("custom-events", CUstomEVents);

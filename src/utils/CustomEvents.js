import { LitElement } from 'lit-element';

export class CUstomEVents extends LitElement {
  CustomError(data, error) {
    this.dispatchEvent(new CustomEvent(error, {
      detail: {data}
    }))
  }
}
customElements.define('custom-events', CUstomEVents);
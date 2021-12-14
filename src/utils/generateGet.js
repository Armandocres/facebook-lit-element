import { LitElement } from 'lit-element';

export class GenerateGEt extends LitElement {

  static get properties() {
    return {
      ur: {type: String}
    }
  }

  constructor() {
    super()
    this.url = 'http://localhost:3000/posts'
  }

  //Trae la data de la petición y la propaga por el CustomEvent
  _sendData(data = []) {
    this.dispatchEvent(new CustomEvent('my-get', {
      detail: { data },
      bubbles: true,
      composed: true
    }))
  }

  // peticion que realiza get a la url
  getDataApi() {
    try {
      fetch(this.url, { method: 'GET' })
        .then((response) => {
          if (response.status === 200) {
            this.dispatchEvent(new CustomEvent('succes', {
              detail: {response}
            }))
            return response.json()
          }
        })
        .then((data) => {
        //manda la data a sendData
        this._sendData(data)
        })
        .catch((error) => {
          this.dispatchEvent(new CustomEvent('error-promise', {
            detail: {error}
          }))
        })
    } catch (error) {
      this.dispatchEvent(new CustomEvent('error-catch', {
      detail: {error}
    }))
    }
  }
}
customElements.define('my-generateget', GenerateGEt);
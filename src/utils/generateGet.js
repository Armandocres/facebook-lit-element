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

  _sendData(data) {
    this.dispatchEvent(new CustomEvent('CallGet', {
      detail: { data },
      bubbles: true,
      composed: true
    }))
  }


  getDataApi() {
    fetch(this.url, { method: 'GET' })
      .then((response) => {
        if (response.status === 200) {
          this.dispatchEvent(new CustomEvent('SUCCES', {
            detail: {response}
          }))
          return response.json()
        }
      })
      .then((data) => {
      this._sendData(data)
      })
      .catch((error) => {
        this.dispatchEvent(new CustomEvent('ERROR', {
        detail: {error}
      }))
    })
  }

}
customElements.define('my-generateget', GenerateGEt);
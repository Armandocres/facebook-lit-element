import { LitElement } from 'lit-element';

export class GeneratePOst extends LitElement {

  static get properties() {
    return {
      url: { type: String }
    }
  }


  constructor() {
    super();
    this.url = 'http://localhost:3000/posts'
  }

  _sendData(data) {
    try {
      this.dispatchEvent(new CustomEvent('Posts', {
        detail: { data },
        bubbles: true,
        composed: true
      }))
    } catch (error) {
      this.dispatchEvent(new CustomEvent('ERROR-CATCH', {
        detail: {error}
      }))
    }
  }

  postData(titulo, hour, id) {
    fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        titulo,
        hour,
        id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      return response.json()
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
customElements.define('my-generatepost', GeneratePOst);
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

  //Trae la data de la petición y la propaga por el CustomEvent
  _sendData(data) {
    try {
      this.dispatchEvent(new CustomEvent('my-post', {
        detail: { data },
        bubbles: true,
        composed: true
      }))
    } catch (error) {
      this.dispatchEvent(new CustomEvent('error-catch', {
        detail: {error}
      }))
    }
  }

  // peticion que espera un objeto con un titulo, hour, img, id
  postData(titulo, hour, img, id) {
    try {
      fetch(this.url, {
        method: 'POST',
        body: JSON.stringify({
          titulo,
          hour,
          img,
          id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        return response.json()
      })
        //manda la data a sendData
      .then((data) => {
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
customElements.define('my-generatepost', GeneratePOst);
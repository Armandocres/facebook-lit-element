import { LitElement } from 'lit-element';
import { CUstomEVents } from './CustomEvents';

export class GenerateGEt extends LitElement {

  static get properties() {
    return {
      ur: {type: String}
    }
  }

  constructor() {
    super()
    this.url = 'http://localhost:3000/posts'
    this.customEvents = new CUstomEVents();
  }

  /**Trae la data de la petición y la propaga por el CustomEvent
   * 1.-si la data no trae nada, se crea un arreglo vacio
   * 2.-se propaga el evento por CustomEvents
  */
  _sendData(data = []) {
    this.dispatchEvent(new CustomEvent('my-get', {
      detail: { data },
      bubbles: true,
      composed: true
    }))
  }

  /* peticion que realiza método get a la url http://localhost:3000/posts
    1.-Regresa custom event si el estatus de la respuesta es 200 asi mismo retorna la respuesta parseada a json
    2.-Teniendo la repsuesta parceada la manda a sendtData la cual de propogaga los datos por CustomEvents
    3.-En caso de que la promesa falle, entra al catch generando un customEvent
  **/
  getDataApi() {
    try {
      fetch(this.url, { method: 'GET' })
        .then((response) => {
          if (response.status === 200) {
            this.customEvents.CustomError('error', response)
            return response.json()
          }
        })
        .then((data) => {
        //manda la data a sendData
        this._sendData(data)
        })
        .catch((error) => {
          this.customEvents.CustomError('error-promise', error)
        })
    } catch (error) {
      this.customEvents.CustomError('error-catch', error)
    }
  }
}
customElements.define('my-generateget', GenerateGEt);
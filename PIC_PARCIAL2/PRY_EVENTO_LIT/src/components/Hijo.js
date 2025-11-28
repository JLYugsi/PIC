import {LitElement, html, unsafeCSS} from "lit";

import bootstrap from '../.././node_modules/bootstrap/dist/css/bootstrap.min.css?inline';

export class Hijo extends LitElement {

    static styles = [
        unsafeCSS(bootstrap)
    ];

    _enviarTexto(event) {
        this.dispatchEvent(new CustomEvent('texto-cambiado', {
            detail: {texto: event.target.value},
            bubbles: true,
            composed: true
        }));
    }

    render(){
        return html`
            <input
            @input=${this._enviarTexto}
            class="form-control"
            type="text"
            placeholder="Escribe algo y presiona ENTER" />
        `
    }
    
}

customElements.define('componente-hijo', Hijo);
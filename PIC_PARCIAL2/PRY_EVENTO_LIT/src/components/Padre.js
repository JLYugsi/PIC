import {LitElement, html, unsafeCSS} from "lit";

import bootstrap from '../.././node_modules/bootstrap/dist/css/bootstrap.min.css?inline';

export class Padre  extends LitElement{
    static styles = [
        unsafeCSS(bootstrap)
    ];

    static properties = {
        mensaje_recibido: {type: String}
    };

    constructor(){
        super();
        this.mensaje_recibido = "Mensaje inicial del padre";
    }

    _mostrarTexto(event){
        this.mensaje_recibido = event.detail.texto;
    }

    render(){
        return html`
            <componente-hijo @texto-cambiado=${this._mostrarTexto}></componente-hijo>
            <h1>${this.mensaje_recibido}</h1>
        `;
    }
}
customElements.define('componente-padre', Padre);
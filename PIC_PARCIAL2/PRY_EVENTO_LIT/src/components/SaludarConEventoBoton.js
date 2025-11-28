import {LitElement, html, unsafeCSS} from "lit";

import bootstrap from '../.././node_modules/bootstrap/dist/css/bootstrap.min.css?inline';

export class SaludarConEventoBoton extends LitElement{

    static styles = [
        unsafeCSS(bootstrap)
    ];

    static properties = {
        mensaje: {type: String}
    };

    constructor(){
        super();
        this.mensaje = "";
    }

    funcion_saludar(){
        this.mensaje = "HOLA, BIENVENIDO A LIT";
    }

    render(){
        return html `
            <button @click=${this.funcion_saludar} class="btn btn-success text-white">HAGA CLICK PARA SALUDAR</button>
            <h1>${this.mensaje}</h1>
        `
    }
}
customElements.define('saludar-con-evento-boton', SaludarConEventoBoton);
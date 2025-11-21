import {LitElement, html} from "lit";

export class SaludoNombre extends LitElement{

    static properties = {
        nombre:{type: String},
        edad:{type: Number}
    }
    render(){
        // let nombre = this.getAttribute('nombre');

        return html `
        <h1>HOLA tu nombre es ${this.nombre} y tu edad es ${this.edad}</h1>
        `;
    }
}
customElements.define('saludo-nombre', SaludoNombre);
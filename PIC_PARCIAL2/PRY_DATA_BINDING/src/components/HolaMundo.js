import {LitElement, html, css} from "lit";

class HolaMundo extends LitElement{

    nombre = "Jorge Luis";
    apelllido = "Yugsi Andrade";

    Nombre_Completo = this.nombre+" "+this.apelllido;
    nombrescompleto = `${this.nombre, this.apellido}`;

    render(){
        return html `

            <p>Hola ${this.nombrescompleto}</p>
        `
    }
}
customElements.define('hola-mundo', HolaMundo);
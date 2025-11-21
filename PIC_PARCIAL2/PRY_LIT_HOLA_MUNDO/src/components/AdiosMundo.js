import {LitElement, html, css} from "lit";

export class AdiosMundo extends LitElement{
    render(){
        return html `
        <h1>ADIOS MUNDO DESDE LIT MAIN</h1>
        `;
    }
}
customElements.define('adios-mundo', AdiosMundo);
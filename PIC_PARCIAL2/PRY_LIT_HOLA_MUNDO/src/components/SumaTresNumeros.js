import { LitElement, html } from 'lit';

export class SumaTresNumeros extends LitElement {

    static properties = {
        num1: { type: Number },
        num2: { type: Number },
        num3: { type: Number }
    };

    render() {
        const val1 = isNaN(Number(this.num1)) ? 0 : Number(this.num1);
        const val2 = isNaN(Number(this.num2)) ? 0 : Number(this.num2);
        const val3 = isNaN(Number(this.num3)) ? 0 : Number(this.num3);
        let res = val1 + val2 + val3;
        return html`
        <p>La suma de ${val1} + ${val2} + ${val3} es ${res}</p>
        `;
    }
}
customElements.define('suma-tres-numeros', SumaTresNumeros);
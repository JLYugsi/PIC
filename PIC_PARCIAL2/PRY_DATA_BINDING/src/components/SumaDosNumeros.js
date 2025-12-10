import { LitElement, html, css, unsafeCSS } from "lit";
import bootstrap from '../.././node_modules/bootstrap/dist/css/bootstrap.min.css?inline';

export class SumaDosNumeros extends LitElement {

    static styles = [
        unsafeCSS(bootstrap)
    ];

    static properties = {
        numero1: { type: Number },
        numero2: { type: Number },
        resultado: { type: Number },
    };

    constructor() {
        super();
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
    }

    actualizarNumero(e) {
        const inputElement = e.target;
        const inputName = inputElement.name;

        let valorString = inputElement.value;

        // Evitar notación científica si el usuario escribe 'e'
        valorString = valorString.replace(/[eE]/g, '');

        inputElement.value = valorString;
        
        const valor = parseFloat(valorString) || 0;

        if (inputName === "num1") {
            this.numero1 = valor;
        } else if (inputName === "num2") {
            this.numero2 = valor;
        }

        this.resultado = this.numero1 + this.numero2;
    }

    render() {
        return html`
        <div class="container p-4">
            <h2>Suma de dos números con Databinding</h2>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="inputNum1" class="form-label">Número 1</label>
                        <input
                            id="inputNum1"
                            type="number"
                            step="any"
                            name="num1"
                            class="form-control"
                            @input="${this.actualizarNumero}"
                            .value=${this.numero1}
                        />
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="inputNum2" class="form-label">Número 2</label>
                        <input
                            id="inputNum2"
                            type="number"
                            step="any"
                            name="num2"
                            class="form-control"
                            @input="${this.actualizarNumero}"
                            .value=${this.numero2}
                        />
                    </div>
                </div>
            </div>

            <hr />

            <div class="alert alert-primary mt-3" role="alert">
                <p class="h4 mb-0">
                    Resultado: ${this.numero1} + ${this.numero2} =
                    <strong>${this.resultado}</strong>
                </p>
            </div>
        </div>
    `;
    }
}

customElements.define("suma-dos-numeros", SumaDosNumeros);
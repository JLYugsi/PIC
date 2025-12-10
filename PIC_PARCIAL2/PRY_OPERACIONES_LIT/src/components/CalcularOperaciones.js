import { LitElement, html, css, unsafeCSS } from "lit";
import bootstrap from '../.././node_modules/bootstrap/dist/css/bootstrap.min.css?inline';

export class CalcularOperaciones extends LitElement {

    static styles = [
        unsafeCSS(bootstrap),
        css`
            :host {
                display: block;
            }
            .btn-xxl {
                padding: 1rem;
                font-size: 1.5rem;
                font-weight: bold;
            }
            .result-container {
                transition: background-color 0.3s ease;
            }
        `
    ];

    static properties = {
        num1: { type: Number },
        num2: { type: Number },
        operacion: { type: String },
        resultado: { type: String },
        modoSerie: { type: Boolean }
    };

    constructor() {
        super();
        this.num1 = 0;
        this.num2 = 0;
        this.operacion = 'suma';
        this.resultado = '---';
        this.modoSerie = false;
        this.timerID = null;
        this.ordenOperaciones = ['suma', 'resta', 'multiplicacion', 'division'];
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.detenerSerie();
    }

    handleInput(e) {
        const inputElement = e.target;
        const name = inputElement.name;
        let valorString = inputElement.value;

        valorString = valorString.replace(/[eE]/g, '');
        inputElement.value = valorString;

        const valor = parseFloat(valorString);

        if (name === "num1") {
            this.num1 = isNaN(valor) ? 0 : valor;
        } else if (name === "num2") {
            this.num2 = isNaN(valor) ? 0 : valor;
        }
    }

    handleSelect(e) {
        this.operacion = e.target.value;
    }

    calcular() {
        let res = 0;
        const n1 = this.num1;
        const n2 = this.num2;

        switch (this.operacion) {
            case 'suma':
                res = n1 + n2;
                break;
            case 'resta':
                res = n1 - n2;
                break;
            case 'multiplicacion':
                res = n1 * n2;
                break;
            case 'division':
                if (n2 === 0) {
                    this.resultado = "Error";
                    return;
                }
                res = n1 / n2;
                break;
            default:
                res = 0;
        }

        this.resultado = Number.isInteger(res) ? res : res.toFixed(2);
    }

    toggleSerie() {
        if (this.modoSerie) {
            this.detenerSerie();
        } else {
            this.iniciarSerie();
        }
    }

    iniciarSerie() {
        this.modoSerie = true;
        this.siguienteOperacion();
        
        this.timerID = setInterval(() => {
            this.siguienteOperacion();
        }, 3000);
    }

    detenerSerie() {
        this.modoSerie = false;
        if (this.timerID) {
            clearInterval(this.timerID);
            this.timerID = null;
        }
    }

    siguienteOperacion() {
        const indiceActual = this.ordenOperaciones.indexOf(this.operacion);
        const siguienteIndice = (indiceActual + 1) % this.ordenOperaciones.length;
        this.operacion = this.ordenOperaciones[siguienteIndice];
        this.calcular();
    }

    render() {
        return html`
            <div class="card shadow-sm" style="max-width: 500px; margin: 0 auto;">
                <div class="card-header bg-primary text-white text-center">
                    <h4 class="m-0">Calculadora de Operaciones</h4>
                </div>
                
                <div class="card-body">
                    <div class="row g-3 mb-3">
                        <div class="col-md-6">
                            <label class="form-label fw-bold">Número 1</label>
                            <input 
                                type="number" 
                                class="form-control form-control-lg" 
                                name="num1" 
                                step="any"
                                .value="${this.num1}"
                                @input="${this.handleInput}"
                                placeholder="0"
                            >
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-bold">Número 2</label>
                            <input 
                                type="number" 
                                class="form-control form-control-lg" 
                                name="num2" 
                                step="any"
                                .value="${this.num2}"
                                @input="${this.handleInput}"
                                placeholder="0"
                            >
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-bold">Tipo de Operación</label>
                        <select 
                            class="form-select form-select-lg" 
                            .value="${this.operacion}" 
                            @change="${this.handleSelect}">
                            
                            <option value="suma">Suma (+)</option>
                            <option value="resta">Resta (-)</option>
                            <option value="multiplicacion">Multiplicación (×)</option>
                            <option value="division">División (÷)</option>
                        </select>
                    </div>

                    <div class="d-grid gap-2 mb-4">
                        <button class="btn btn-success btn-xxl shadow" @click="${this.calcular}">
                            CALCULAR AHORA
                        </button>

                        <button 
                            class="btn ${this.modoSerie ? 'btn-danger' : 'btn-outline-primary'} fw-bold" 
                            @click="${this.toggleSerie}">
                            ${this.modoSerie ? 'DETENER' : 'CALCULAR EN SERIE'}
                            ${this.modoSerie ? html`<span class="spinner-grow spinner-grow-sm ms-2" aria-hidden="true"></span>` : ''}
                        </button>
                    </div>

                    <div class="alert ${this.modoSerie ? 'alert-info' : 'alert-secondary'} text-center result-container" role="alert">
                        <span class="small d-block text-muted">
                            ${this.modoSerie ? 'Rotando operaciones automáticamente...' : 'Resultado Final'}
                        </span>
                        <h1 class="display-4 fw-bold m-0">${this.resultado}</h1>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('calcular-operaciones', CalcularOperaciones);
export class Calculadora extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
        <div class="card p-3">
            <div class="card-header mb-2 p-0 border-0">
                <input
                type="text"
                class="form-control form-lg text-end fs-4"
                autofocus
                placeholder="0"
                id="txt_numero"
                readonly>
            </div>
            
            <div class="row mb-1">
                <div class="col-sm-12">
                    <button data-value="C" class="btn btn-danger w-100 fw-bold">C</button>
                </div>
            </div>

            <div class="row mb-1">
                <div class="col-sm-3">
                    <boton-numero valor="1"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="2"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="3"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="+"></boton-operacion>
                </div>
            </div>

            <div class="row mb-1">
                <div class="col-sm-3">
                    <boton-numero valor="4"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="5"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="6"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="-"></boton-operacion>
                </div>
            </div>

            <div class="row mb-1">
                <div class="col-sm-3">
                    <boton-numero valor="7"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="8"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="9"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="*"></boton-operacion>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <boton-numero valor="."></boton-numero>
                </div>
                <div class="col-sm-3">
                    <boton-numero valor="0"></boton-numero>
                </div>
                <div class="col-sm-3">
                    <button data-value="=" class="btn btn-success w-100 fw-bold">=</button>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="/"></boton-operacion>
                </div>
            </div>
        </div>
        `;

        const display = shadow.getElementById('txt_numero');
        const specialButtons = shadow.querySelectorAll('button');
        let expresion = "";
        let resultado = false;

        this.addEventListener('number-click', (event) => {
            const val = event.detail.value;
            if (resultado) {
                expresion = "";
                resultado = false;
            }
            expresion += val;
            display.value = expresion;
        });

        this.addEventListener('operation-click', (event) => {
            const val = event.detail.value;
            if (resultado) {
                resultado = false;
            }
            expresion += val;
            display.value = expresion;
        });

        specialButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');

                if (val === "C") {
                    expresion = "";
                    resultado = false;
                } else if (val === "=") {
                    if (expresion === "") {
                        resultado = false;
                    } else {
                        try {
                            const result = eval(expresion);
                            expresion = String(result);
                            resultado = true;
                        } catch (e) {
                            expresion = "Error";
                            resultado = true;
                        }
                    }
                }
                display.value = expresion === "" ? "0" : expresion;
            });
        });
        display.value = "0";
    }
}
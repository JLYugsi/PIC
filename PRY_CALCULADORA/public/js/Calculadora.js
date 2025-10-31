class Calculadora extends HTMLElement {
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
                    <button data-value="1" class="btn btn-warning w-100">1</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="2" class="btn btn-warning w-100">2</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="3" class="btn btn-warning w-100">3</button>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="+"></boton-operacion>
                </div>
            </div>

            <div class="row mb-1">
                <div class="col-sm-3">
                    <button data-value="4" class="btn btn-warning w-100">4</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="5" class="btn btn-warning w-100">5</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="6" class="btn btn-warning w-100">6</button>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="-"></boton-operacion>
                </div>
            </div>

            <div class="row mb-1">
                <div class="col-sm-3">
                    <button data-value="7" class="btn btn-warning w-100">7</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="8" class="btn btn-warning w-100">8</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="9" class="btn btn-warning w-100">9</button>
                </div>
                <div class="col-sm-3">
                    <boton-operacion operacion="*"></boton-operacion>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <button data-value="." class="btn btn-info w-100">.</button>
                </div>
                <div class="col-sm-3">
                    <button data-value="0" class="btn btn-warning w-100">0</button>
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
        const buttons = shadow.querySelectorAll('button');
        let expresion = "";
        let resultado = false;

        this.addEventListener('operation-click', (event) => {
            const val = event.detail.value;

            if (resultado) {
                resultado = false;
            } else {
            }

            expresion += val;
            display.value = expresion;
        });

        buttons.forEach(btn => {
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
                } else {
                    if (resultado) {
                        expresion = "";
                    }
                    expresion += val;
                    resultado = false;
                }

                display.value = expresion === "" ? "0" : expresion;
            })
        });

        display.value = "0";
    }
}

customElements.define("calculadora-basica", Calculadora);
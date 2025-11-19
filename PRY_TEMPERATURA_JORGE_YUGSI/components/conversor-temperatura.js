class ConversorTemperatura extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const formato = this.getAttribute('formato');
        shadow.innerHTML = `
            <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
            <div class="container">
                <label class="form-label">Ingrese Temperatura</label>
                <input type="number" id="temp">
                <button id="btnConvertir" class="btn btn-light w-100">${formato}</button>
                <h3 id="resultado">RESULTADO: </h3>
            </div>
        `;

        const temp = shadow.getElementById("temp");
        const resultado = shadow.getElementById("resultado");
        const btnConvertir = shadow.getElementById("btnConvertir");
        btnConvertir.addEventListener('click', () =>{
            const t = parseFloat(temp.value);
            let res;

            switch (formato) {
                case 'C-F':
                    res = (t + (9/5)) + 32;
                    break;
                case 'F-C':
                    res = (t -32) * (5/9);
                    break;
                default:
                    res = (t + (9/5)) + 32;
            }
            resultado.textContent = `RESULTADO: ${res}`;
        });
    }
}

customElements.define('conversor-temperatura', ConversorTemperatura);
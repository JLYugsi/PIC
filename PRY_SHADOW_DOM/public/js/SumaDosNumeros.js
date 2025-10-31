class SumaDosNumeros extends HTMLElement {
    constructor(){
        super();
        const shadow =this.attachShadow({mode: 'open'});
        const operacion = this.getAttribute('operacion');
        shadow.innerHTML =`
            <div>
                <label for="">Ingrese primer numero</label>
                <input type="number" id="num1">

                <label for="">Ingrese segundo numero</label>
                <input type="number" id="num2">

                <button id="btnSumar">${operacion}</button>
                <h3 id="resultado">RESULTADO: </h3> 
            </div>
        `;
        const num1=shadow.getElementById("num1");
        const num2=shadow.getElementById("num2");
        const resultado = shadow.getElementById("resultado");
        const btnSumar = shadow.getElementById("btnSumar");
        btnSumar.addEventListener('click', () => {
            const n1 = parseFloat(num1.value);
            const n2 = parseFloat(num2.value);
            let res;

            switch (operacion) {
                case 'SUMAR':
                    res = n1 + n2;
                    break;
                case 'RESTAR':
                    res = n1 - n2;
                    break;
                case 'MULTIPLICACION':
                    res = n1 * n2;
                    break;
                case 'DIVISION':
                    if (n2 === 0) {
                        res = 'Error: Div/0';
                    } else {
                        res = n1 / n2;
                    }
                    break;
                default:
                    res = 'Operación no válida';
            }
            resultado.textContent = `RESULTADO: ${res}`;
        });
    }
}

customElements.define('suma-dos-numeros', SumaDosNumeros);
class BotonOperacion extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const operacion = this.getAttribute('operacion');

        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
        <button data-value="${operacion}" class="btn btn-light w-100">${operacion}</button>
        `;

        // Pieza faltante para el evento 'operation-click'
        const button = shadow.querySelector('button');
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('operation-click', {
                detail: { value: operacion },
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define("boton-operacion", BotonOperacion);
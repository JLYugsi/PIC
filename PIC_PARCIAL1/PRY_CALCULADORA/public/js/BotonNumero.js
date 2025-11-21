export class BotonNumero extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const valor = this.getAttribute('valor');
        const btnClass = (valor === '.') ? 'btn-info' : 'btn-warning';

        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
        <button data-value="${valor}" class="btn ${btnClass} w-100">${valor}</button>
        `;

        const button = shadow.querySelector('button');
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('number-click', {
                detail: { value: valor },
                bubbles: true,
                composed: true
            }));
        });
    }
}
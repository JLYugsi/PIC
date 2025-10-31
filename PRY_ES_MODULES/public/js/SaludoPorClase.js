class SaludoPorClase extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        const nombre = this.getAttribute('nombre') || "sin nombre";
        const apellido = this.getAttribute('apellido') || "sin apellido";
        shadow.innerHTML = `
            <h1>Hola ${nombre} ${apellido} Buenas noches</h1>
        `;
    }
}

customElements.define("saludo-clase", SaludoPorClase);
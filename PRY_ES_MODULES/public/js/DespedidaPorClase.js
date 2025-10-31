class DespedidaPorClase extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        const dia = this.getAttribute('dia') || "sin dia";
        const hora = this.getAttribute('hora') || "sin hora";
        shadow.innerHTML = `
            <h1>Adios nos vemos el dia ${dia} a las ${hora} pm</h1>
        `;
    }
}

customElements.define("despedida-clase", DespedidaPorClase);
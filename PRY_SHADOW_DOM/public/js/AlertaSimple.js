class AlertaSimple  extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML=`
        <link rel="stylessheet" href="./public/css/alerta_simple.css">
        <div class= >
            <h1>ALERTA SIMPLE!!!</h1>
            <p>
                Esto es un componente web con shadow DOM
            </p>
        </div>
        `
    }
};

customElements.define('alerta-simple', AlertaSimple);
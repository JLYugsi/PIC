class CapturaDatosPersona extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
            <fieldset>
                <input type="text" id="txt_apellidos" placeholder="INGRESE SUS APELLIDOS">
                <input type="text" id="txt_nombres" placeholder="INGRESE SUS NOMBRES">
                <input type="number" id="txt_edad" placeholder="INGRESE SU EDAD">
                <div class="sexo-options">
                    <label>SEXO:</label>
                    <div class="radio-group">
                        <input type="radio" id="sexo_m" name="sexo" value="MASCULINO">
                        <label for="sexo_m">MASCULINO</label>
                        
                        <input type="radio" id="sexo_f" name="sexo" value="FEMENINO">
                        <label for="sexo_f">FEMENINO</label>
                    </div>
                </div>
                <button type="button" id="btn_send">ENVIAR</button>
                <p id="txt_resultado"></p>
            </fieldset>`;

        let nombres = this.querySelector('#txt_nombres');
        let apellidos = this.querySelector('#txt_apellidos');
        let edad = this.querySelector('#txt_edad');
        let btn_send = this.querySelector('#btn_send');
        let resultado = this.querySelector('#txt_resultado');
        let sexo = this.querySelectorAll('input[name="sexo"]');

        btn_send.addEventListener('click', function(){
            let r_edad = edad.value <= 18 ? 'SOY MENOR DE EDAD' : 'SOY MAYOR DE EDAD';

            let sexoSeleccionado = '';
            sexo.forEach(radio => {
                if(radio.checked) {
                    sexoSeleccionado = radio.value;
                }
            });

            resultado.textContent = `
                HOLA SOY ${nombres.value} ${apellidos.value} Y MI EDAD ES DE ${edad.value} AÑOS, ${r_edad} Y MI SEXO ES ${sexoSeleccionado}
            `;
        })
    }
}

customElements.define('capturar-datos', CapturaDatosPersona);
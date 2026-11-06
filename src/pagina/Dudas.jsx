import Boton from "../componentes/Boton";
import { useState } from "react";
import Modal from "../componentes/Modal";

function Dudas () {
    const [mostrar, setMostrar] = useState(false)

    function mostrarMensaje() {
        setMostrar(true)
    }

    function cerrarMensaje() {
        setMostrar(false)
    }
    return(
        <main>
        <h1>Dudas</h1>
        <Boton funcion={mostrarMensaje}>Abrir modal</Boton>

        {mostrar && (
            <Modal>
                <h2>Listo</h2>
                <p>Tu mensaje fue enviado</p>
                <Boton funcion={cerrarMensaje}>Aceptar</Boton>
            </Modal>

        )}

        </main>
    )
}
export default Dudas
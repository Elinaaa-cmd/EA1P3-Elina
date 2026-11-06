import Tarjeta from "../componentes/Tarjeta"
import Boton from "../componentes/Boton"
import { useState } from "react";


function Productos() {
    const [mostrar, setMostrar] = useState(false)

    function mostrarMensaje() {
        setMostrar(true)
    }

    function cerrarMensaje() {
        setMostrar(false)
    }
    return (
        <main>
            <h1> Productos</h1>
            <div className="contenedor">
                <Tarjeta
                    imagen="/Img/hamburguesa.jpg"
                    titulo="Hamburguesa"
                    descripcion="Incluye papas y refresco"
                >
                    <Boton funcion={mostrarMensaje}>Abrir modal</Boton>
                </Tarjeta>
                <h1>Hola</h1>

            </div>
        </main>
    )
}
export default Productos
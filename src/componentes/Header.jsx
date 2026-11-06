import { Link } from "react-router-dom"
import "./header.css"

function Header() {
    return (
        <header>
            <nav>
                <Link to= "/">Inicio</Link>
                <Link to= "/Productos">Productos</Link>
                <Link to= "/Dudas">Dudas</Link>

            </nav>
        </header>
    )
}

export default Header
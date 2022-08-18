import React , { Component } from "react";


class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <ul className="Navbar-list">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Par o Impar</a>
                    </li>
                    <li>
                        <a href="#">Fibonacci</a>
                    </li>
                    <li>
                        <a href="#">Alrevez</a>
                    </li>
                    <li>
                        <a href="#">Potencia</a>
                    </li>
                    <li>
                        <a href="#">Raiz</a>
                    </li>
                    
                </ul>
            </nav>
        );
    }
}

export default Navbar;
import React, { useEffect, useRef, useState } from "react";
import "../assets/NavBar.css";
import logo from "../img/CHIFITALOGO.png";

function Navbar() {
    const [navColor, setNavColor] = useState(false); // Estado para manejar el color de la navbar

    const handleScroll = () => {
        const scrollContainer = document.querySelector('.overflow-container'); // Obtener el contenedor por clase
        if (scrollContainer) {
            const scrollTop = scrollContainer.scrollTop; // Obtener la posición de scroll del contenedor
            console.log(scrollTop); // Verifica la posición de scroll en la consola
            if (scrollTop > 50) { // Cambia el valor según el punto donde quieras que el color cambie
                setNavColor(true);
            } else {
                setNavColor(false);
            }
        }
    };

    useEffect(() => {
        const scrollContainer = document.querySelector('.overflow-container');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll); // Agregar el listener al contenedor

            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll); // Limpiar el listener al desmontar
            };
        }
    }, []);
    return (
        <nav className={navColor ? "navbar scrolled" : "navbar"}>
            <div className="contenedor-nav">
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </a>

                <div className="flexible-space" /> {/* Espacio flexible aquí */}
                <ul className="navbar-links">
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="">Nosotros</a>
                    </li>
                    <li>
                        <a href="">Recetas</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="" className="navbar-button">
                            Adquirir
                        </a>{" "}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
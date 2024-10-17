import React, { useEffect, useState } from 'react';
import '../assets/NavBar.css';
import logo from "../img/CHIFITALOGO.png";

function Navbar() {

const[navbar,setNavbar]=useState(false);

const changeBackground=()=>{
if (window.scrollY>=80) {
    setNavbar(true);
}else{
    setNavbar(false);
}
}
window.addEventListener('scroll',changeBackground);

    return (
        <nav className={navbar ? 'navbar active':'navbar'}>
            <div className='contenedor-nav'>
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flexible-space" /> {/* Espacio flexible aquí */}
                <ul className="navbar-links">
                    <li><a href="">Productos</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Recetas</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="" className="navbar-button">Adquirir</a> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

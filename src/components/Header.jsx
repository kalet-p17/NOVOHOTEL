import React from "react";
import"./Header.css";
function Header() {
    return (
        <header className="hotel-header">
            <div className="logo">novo</div>
            <nav>
                <a href="#rooms">Habitaciones</a>
                <a href="#About">Nosotros</a>
                <a href="#Contact">Contactos</a>
            </nav>
        </header>
    );
}

export default Header;

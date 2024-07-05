import React from "react";

export default function Navbar(props) {
    return (
        <nav className={`navbar ${props.darkMode ? "dark" : ""}`}>
            <h2 className="nav_logo_text">My Portfolio</h2>
            <div className="toggler">
                <p className="toggler_light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler_dark">Dark</p>
            </div>
        </nav>
    );
}


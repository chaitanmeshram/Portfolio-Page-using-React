import React from "react"

export default function Line(props){
    
    return (
        <nav className={`navbar ${props.darkMode ? "dark" : ""}`} style={{ height:"10px", marginTop: '50px' , alignItems:"center", justifyContent:"center" }}>
                <h2 className="nav_logo_text"> --x Projects x--</h2>                
        </nav>
    );
    
}
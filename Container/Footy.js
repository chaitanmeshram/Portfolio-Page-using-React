import React from "react"

export default function Footy(props){
    
    return (
        <footer className={`navbar ${props.darkMode ? "dark" : ""}`} style={{ height:"50px", margin: '50px 0 0 0' , alignItems:"center", justifyContent:"center" }}>
                <p>@copy {new Date().getFullYear()}. All rights reserved.</p>                  
        </footer>
    );
    
}
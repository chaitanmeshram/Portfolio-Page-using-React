import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Container/Navbar";
import Main from "./Container/Main";
import Data_p from "./Data_p";
import ProfileLinks from "./Container/ProfileLinks";
import Footy from "./Container/Footy";
import Data from "./Data";
import Line from "./Container/Line";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <Router>
            <div className={`container ${darkMode ? "dark" : ""}`}>
                <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <Main/>
                <Line
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <div className="Profile">
                    <Data />
                </div>
                <ProfileLinks
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <div className="Profile">
                    <Data_p />
                </div>
                
                <Footy
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            </div>
        </Router>
    );
}

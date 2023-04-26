import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`Header ${isDarkMode ? "dark" : "light"}`}
            style={{ backgroundImage: `url(../Triangle.svg)` }}
        >
            <h1>devjobs</h1>

            <div className="switch-container" onClick={handleToggle}>
                <div
                    className={`switch ${isDarkMode ? "dark" : "light"}`}
                    style={{ left: isDarkMode ? "24px" : "0" }}
                ></div>
            </div>
        </div>
    );
};

export default Header;

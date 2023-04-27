import React from "react";
import "./Footer.css";

const Footer = ({ position }) => {
    return (

        <div className="footer">
            <div>
                <h3>{position}</h3>
            </div>
            <div>
                <button className="apply-btn">Apply Now</button></div>

        </div>
    );
}

export default Footer;
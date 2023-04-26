import React from "react";
import "./Top.css";

const Top = ({ company, website, logoBackground }) => {
    return (
        <div className="top">
            <div className="infos">
                <img
                    src="../logo.svg"
                    alt={company}
                    style={{ backgroundColor: `${logoBackground}` }}
                />
                <div className="company-site">
                    <h3>{company}</h3>
                    <p>{website}</p>
                </div>
            </div>
            <button className="company-site-btn">Company Site</button>
        </div>
    );
};

export default Top;

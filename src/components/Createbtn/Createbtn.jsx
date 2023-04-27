import React from "react";
import "./Createbtn.css";
import { Link } from "react-router-dom";

const Createbtn = () => {
    return (
        <Link to={"/create"}><button className="create-btn">New Offer</button></Link>
    );
}

export default Createbtn
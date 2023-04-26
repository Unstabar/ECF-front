import React from "react";
import "./OfferDetails.css";
import { useParams } from "react-router-dom";

const OfferDetails = () => {
    const { offerid } = useParams();
    return (
        <div className="offer-details">
            <h1>{offerid}</h1>
        </div>
    )
}

export default OfferDetails
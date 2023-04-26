import React, { useEffect, useState } from "react";
import "./OfferDetails.css";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Top from "./Top/Top";

const OfferDetails = () => {
    const { offerid } = useParams();
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/todos/${offerid}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch offer data");
                }
                return response.json();
            })
            .then((data) => {
                setOffer(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [offerid]);

    return (
        <div className="offer-details">
            <Header />
            <div className="top-container">
                <Top
                    logoBackground={offer.logoBackground}
                    company={offer.company}
                    website={offer.website}
                    logo={offer.logo}
                />
            </div>
            <div className="body-container">
                <h2>Body</h2>
            </div>
        </div>
    );
};

export default OfferDetails;

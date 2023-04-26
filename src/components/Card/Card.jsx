import React from "react";
import "./Card.css";
import timeAgo from "../../functions/functions";
import { Link } from "react-router-dom";

const Card = ({
    logo,
    postedAt,
    contract,
    position,
    company,
    location,
    logoBackground,
    handleDelete,
    handleEdit,
    id,
}) => {
    const postedTimeAgo = timeAgo(postedAt);
    const url = logo;

    return (
        <div className="Card">
            <button
                className="delete-btn"
                title="Delete the card"
                onClick={handleDelete}
            >
                X
            </button>
            <button
                className="edit-btn"
                title="Edit the card"
                onClick={handleEdit}
            >
                Edit
            </button>
            <img
                className="logo"
                src={url}
                alt={`${company} logo`}
                style={{ backgroundColor: `${logoBackground}` }}
            />
            <div className="Info">
                <div className="Top">
                    <p>
                        {postedTimeAgo}
                        <span className="dot"></span>
                        {contract}
                    </p>
                </div>
                <Link className="link-card" to={`/offers/${id}`}>
                    <h3>{position}</h3>
                </Link>
                <p>{company}</p>
                <p className="location">{location}</p>
            </div>
        </div>
    );
};

export default Card;

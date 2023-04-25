import React from "react";
import "./Card.css";



const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
};

const Card = ({ logo, postedAt, contract, position, company, location, logoBackground }) => {
    const postedTimeAgo = timeAgo(postedAt);
    const url = logo;

    return (
        <div className="Card">
            <img className="logo" src={url} alt={`${company} logo`} style={{ backgroundColor: `${logoBackground}` }} />
            <div className="Info">
                <div className="Top">
                    <p>{postedTimeAgo}</p>
                    <p>{contract}</p>
                </div>
                <h2>{position}</h2>
                <p>{company} - {location}</p>
            </div>
        </div>
    );
};

export default Card;
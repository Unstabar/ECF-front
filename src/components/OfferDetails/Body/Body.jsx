import React from "react";
import "./Body.css";
import timeAgo from "../../../functions/functions";

const Body = ({
    date,
    contract,
    position,
    location,
    description,
    requirements = {},
    role = {},
}) => {
    const postedTimeAgo = timeAgo(date); //Call function to convert date to time ago

    // console.log(requirements.contents);
    return (
        <div className="body">
            <div className="details-top">
                <div>
                    <p className="time-and-contract">{postedTimeAgo}<span className="dot"></span>{contract}</p>

                    <h4>{position}</h4>
                    <p className="loc">{location}</p>
                </div>

                <div>
                    <button className="apply-btn">Apply Now</button></div>
            </div>

            <p>{description}</p>

            <div className="requirements">
                <h3>Requirements</h3>
                <p>{requirements.content}</p>
                <ul className="requirements-list">
                    {requirements.items &&
                        requirements.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
            </div>
            <div className="roles">
                <h3>What you will do</h3>
                <p>{role.content}</p>
                <ul className="roles-list">
                    {role.items &&
                        role.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
            </div>
            <div className="edit-btn-container">
                <button
                    className="edit-btn"
                    title="Edit the card"
                >
                    Edit
                </button></div>
        </div>
    );
};

export default Body;

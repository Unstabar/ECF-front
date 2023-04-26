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
    const postedTimeAgo = timeAgo(date);
    // console.log(requirements.contents);
    return (
        <div className="body">
            <div className="details-top">
                <p>{postedTimeAgo}</p>
                <p>{contract}</p>
                <p>{position}</p>
                <p>{location}</p>
                <button className="apply-btn">Apply Now</button>
            </div>

            <p>{description}</p>

            <div className="requirements">
                <h3>Requirements</h3>
                <p>{requirements.content}</p>
                <ul>
                    {requirements.items &&
                        requirements.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
            </div>
            <div className="roles">
                <h3>What you will do</h3>
                <p>{role.content}</p>
                <ul>
                    {role.items &&
                        role.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Body;

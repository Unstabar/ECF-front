import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ onSearch, onLocation, onFulltime }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [fulltimeOnly, setFulltimeOnly] = useState(false);

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocationQuery(event.target.value);
    };

    const handleFullTimeChange = (event) => {
        setFulltimeOnly(event.target.checked);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
        onLocation(locationQuery);
        onFulltime(fulltimeOnly);
    };

    return (
        <div className="Filters">
            <input
                type="text"
                placeholder="Search by companies/position"
                value={searchQuery}
                onChange={handleSearchQueryChange}
            />
            <input
                type="text"
                placeholder="Search by location"
                value={locationQuery}
                onChange={handleLocationChange}
            />
            <label>
                Full Time Only
                <input
                    type="checkbox"
                    checked={fulltimeOnly}
                    onChange={handleFullTimeChange}
                />
            </label>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Filters;

import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";
import Createbtn from "./Createbtn/Createbtn";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [fulltimeOnly, setFulltimeOnly] = useState(false);
    const [visibleCards, setVisibleCards] = useState(12);

    useEffect(() => {
        fetch("http://localhost:8000/api/todos")
            .then((response) => response.json())
            .then((data) =>
                setCards(
                    data.sort(
                        (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
                    )
                )
            )
            .catch((error) => console.log(error));
    }, []);

    const filteredCards = cards.filter((card) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        const lowerCaseLocationQuery = locationQuery.toLowerCase();
        const hasLocation = card.location
            .toLowerCase()
            .includes(lowerCaseLocationQuery);
        const isFulltime =
            !fulltimeOnly || card.contract.toLowerCase() === "full-time";

        return (
            (card.company.toLowerCase().includes(lowerCaseSearchQuery) ||
                card.position.toLowerCase().includes(lowerCaseSearchQuery)) &&
            hasLocation &&
            isFulltime
        );
    });
    const handleDelete = (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this card?");
        if (shouldDelete) {
            fetch(`http://localhost:8000/api/todos/${id}`, {
                method: "DELETE",
            })
                .then(() => {
                    setCards(cards.filter((card) => card._id !== id));
                })
                .catch((error) => console.log(error));
        }
    };

    const onLoadMoreClick = () => {
        setVisibleCards(visibleCards + 12);
    };

    return (
        <>
            <Header />
            <Filters
                onSearch={(query) => setSearchQuery(query)}
                onLocation={(query) => setLocationQuery(query)}
                onFulltime={(checked) => setFulltimeOnly(checked)}
            />
            <div className="create-btn-container">
                <Createbtn /></div>
            <div className="Home">
                {filteredCards.slice(0, visibleCards).map((card, index) => (
                    <Card
                        key={index}
                        id={card._id}
                        logo={card.logo}
                        postedAt={card.postedAt}
                        contract={card.contract}
                        position={card.position}
                        company={card.company}
                        location={card.location}
                        logoBackground={card.logoBackground}
                        handleDelete={() => handleDelete(card._id)}
                    />
                ))}
                {visibleCards < filteredCards.length && (
                    <div className="load-more">
                        <button onClick={onLoadMoreClick}>
                            Load More

                        </button></div>
                )}
            </div>
        </>
    );
};

export default Home;

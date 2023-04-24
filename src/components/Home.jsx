import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [fulltimeOnly, setFulltimeOnly] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/todos")
            .then((response) => response.json())
            .then((data) =>
                setTodos(
                    data.sort(
                        (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
                    )
                )
            )
            .catch((error) => console.log(error));
    }, []);

    const filteredTodos = todos.filter((todo) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        const lowerCaseLocationQuery = locationQuery.toLowerCase();
        const hasLocation = todo.location
            .toLowerCase()
            .includes(lowerCaseLocationQuery);
        const isFulltime =
            !fulltimeOnly || todo.contract.toLowerCase() === "full-time";

        return (
            (todo.company.toLowerCase().includes(lowerCaseSearchQuery) ||
                todo.position.toLowerCase().includes(lowerCaseSearchQuery)) &&
            hasLocation &&
            isFulltime
        );
    });

    return (
        <>
            <Header />
            <Filters
                onSearch={(query) => setSearchQuery(query)}
                onLocation={(query) => setLocationQuery(query)}
                onFulltime={(checked) => setFulltimeOnly(checked)}
            />
            <div className="Home">
                {filteredTodos.map((todo) => (
                    <Card
                        key={todo._id}
                        logo={todo.logo}
                        postedAt={todo.postedAt}
                        contract={todo.contract}
                        position={todo.position}
                        company={todo.company}
                        location={todo.location}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;

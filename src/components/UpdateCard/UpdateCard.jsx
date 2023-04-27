import React, { useState, useEffect } from "react";
import "./UpdateCard.css";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";




const UpdateCard = () => {
    const { offerid } = useParams();
    // console.log(offerid);
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/todos/${offerid}`)
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

    const [company, setCompany] = useState(offer.company);
    const [logoBackground, setLogoBackground] = useState("");
    const [position, setPosition] = useState("");
    const [contract, setContract] = useState("Full-time");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [apply, setApply] = useState("");
    const [description, setDescription] = useState("");
    const [requirementsContent, setRequirementsContent] = useState("");
    const [requirementsItems, setRequirementsItems] = useState([]);
    const [roleContent, setRoleContent] = useState("");
    const [roleItems, setRoleItems] = useState([]);



    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            company,
            logoBackground,
            position,
            contract,
            location,
            website,
            apply,
            description,
            requirements: {
                content: requirementsContent,
                items: requirementsItems,
            },
            role: {
                content: roleContent,
                items: roleItems,
            },
        };

        fetch("http://localhost:8000/api/update/${offerid}", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    // console.log(response);
                    console.log("Success");
                }
                return response.json();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [numRequirementsItems, setNumRequirementsItems] = useState(1);
    const [numRoleItems, setNumRoleItems] = useState(1);



    return (
        <>
            <Header />
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="company" name="company" value={offer.company} onChange={(event) => setOffer({ ...offer, company: event.target.value })} />


                    <label htmlFor="logoBackground">Logo Background Color:</label>
                    <input type="text" id="logoBackground" name="logoBackground" value={offer.logoBackground} onChange={(event) => setOffer({ ...offer, logoBackground: event.target.value })} />

                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" value={offer.position} onChange={(event) => setOffer({ ...offer, position: event.target.value })} />

                    <label htmlFor="contract">Contract:</label>
                    <select id="contract" name="contract" value={offer.contract} onChange={(event) => setOffer({ ...offer, contract: event.target.value })} >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                    </select>



                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={offer.location} onChange={(event) => setOffer({ ...offer, location: event.target.value })} />

                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" name="website" value={offer.website} onChange={(event) => setOffer({ ...offer, website: event.target.value })} />

                    <label htmlFor="apply">Apply:</label>
                    <input type="text" id="apply" name="apply" value={offer.apply} onChange={(event) => setOffer({ ...offer, apply: event.target.value })} />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={offer.description} onChange={(event) => setOffer({ ...offer, description: event.target.value })} ></textarea>

                    <label htmlFor="requirementsContent">Requirements Content:</label>
                    {offer.requirements && <textarea id="requirementsContent" name="requirementsContent" value={offer.requirements.content} onChange={(event) => setRequirementsContent(event.target.value)}></textarea>}

                    <label htmlFor="requirementsItems">Requirements Items:</label>
                    {Array.from({ length: numRequirementsItems }, (_, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name={`requirementsItem-${index}`}
                                value={requirementsItems[index]}
                                onChange={(event) => {
                                    const newRequirementsItems = [...requirementsItems];
                                    newRequirementsItems[index] = event.target.value;
                                    setRequirementsItems(newRequirementsItems);
                                }}
                            />
                            <button className="remove-item-btn" type="button" onClick={() => {
                                const newRequirementsItems = [...requirementsItems];
                                newRequirementsItems.splice(index, 1);
                                setRequirementsItems(newRequirementsItems);
                                setNumRequirementsItems(numRequirementsItems - 1);
                            }}>Remove Item</button>
                        </div>
                    ))}
                    <button className="add-item-btn" type="button" onClick={() => setNumRequirementsItems(numRequirementsItems + 1)}>Add Item</button>



                    <label htmlFor="roleContent">Role Content:</label>
                    <textarea id="roleContent" name="roleContent" value={roleContent} onChange={(event) => setRoleContent(event.target.value)}></textarea>

                    <label htmlFor="roleItems">Role Items:</label>
                    {Array.from({ length: numRoleItems }, (_, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name={`roleItems-${index}`}
                                value={roleItems[index]}
                                onChange={(event) => {
                                    const newRoleItem = [...roleItems];
                                    newRoleItem[index] = event.target.value;
                                    setRoleItems(newRoleItem);
                                }}
                            />
                            <button className="remove-item-btn" type="button" onClick={() => {
                                const newRoleItems = [...roleItems];
                                newRoleItems.splice(index, 1);
                                setNumRoleItems(newRoleItems);
                                setNumRoleItems(numRoleItems - 1);
                            }}>Remove Item</button>
                        </div>
                    ))}
                    <button className="add-item-btn" type="button" onClick={() => setNumRoleItems(numRoleItems + 1)}>Add Item</button>

                    <button className="submit-btn" type="submit">Create Offer</button>
                </form>
            </div>
        </>
    );
};

export default UpdateCard;

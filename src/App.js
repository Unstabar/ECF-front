import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OfferDetails from "./components/OfferDetails/OfferDetails";
import CreationPage from "./components/CreationPage/CreationPage";
import UpdateCard from "./components/UpdateCard/UpdateCard";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/offers/:offerid" element={<OfferDetails />} />
				<Route path="/create" element={<CreationPage />} />
				<Route path="/update/:offerid" element={<UpdateCard />} />"
			</Routes>
		</div>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OfferDetails from "./components/OfferDetails/OfferDetails";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/offers/:offerid" element={<OfferDetails />} />
			</Routes>
		</div>
	);
}

export default App;

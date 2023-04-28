import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OfferDetails from "./components/OfferDetails/OfferDetails";
import CreationPage from "./components/CreationPage/CreationPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/offers/:offerid" element={<OfferDetails />} />
				<Route path="/create" element={<CreationPage />} />
			</Routes>
		</div>
	);
}

export default App;

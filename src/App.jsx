import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import { useState } from "react";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const handleLogin = () => {
		setIsLoggedIn(true);
	}
	const handleLogout = () => {
		setIsLoggedIn(false);
	}

	return (
		<>
			<FavoriteProvider>
				<BrowserRouter>
					<Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
					<Router isLoggedIn={isLoggedIn} onLogin={handleLogin} />
				</BrowserRouter>
				{/* <Characters /> */}
			</FavoriteProvider>
		</>
	);
}

export default App;

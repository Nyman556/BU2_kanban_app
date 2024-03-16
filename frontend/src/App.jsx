import LoginView from "./Views/LoginView";
import "./App.css";
import HomeView from "./Views/HomeView";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import authApi from "./api/auth";

function App() {
	const [user, setUser] = useState(null);
	const [cookies, setCookie, removeCookie] = useCookies(["AccessToken"]);

	useEffect(() => {
		const token = cookies.AccessToken;
		if (token) {
			setUser({ token });
		}
	}, [cookies.AccessToken]);

	const handleLogout = () => {
		removeCookie("AccessToken");
		setUser(null);
	};

	return (
		<div>
			{user ? (
				<HomeView onLogout={handleLogout} />
			) : (
				<LoginView onLogin={handleLogin} />
			)}
		</div>
	);
}

export default App;

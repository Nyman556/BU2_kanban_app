import React, { useEffect, useState } from "react";
import fullLogo from "/full_logo.svg";
import { FiKey, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function LoginView({ onLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemeber] = useState(false);

	useEffect(() => {
		const storedEmail = localStorage.getItem("savedEmail");
		if (storedEmail) {
			setEmail(storedEmail);
			setRemeber(true);
		}
	});

	const handleLogin = async (event) => {
		event.preventDefault();
		onLogin(email, password, remember);
		if (remember) {
			localStorage.setItem("savedEmail", email);
		} else {
			localStorage.removeItem("savedEmail");
		}
	};

	return (
		<div className="w-screen h-screen flex flex-col space-y-16 justify-center items-center bg-primaryBg text-white">
			<img src={fullLogo} alt="Logo" />
			<form className="flex flex-col space-y-4 min-w-96">
				<div className="flex items-center space-x-4 bg-secondaryBg p-2 rounded-lg border border-primaryBg focus-within:border-accent focus-within:outline-none">
					<FiMail className="text-accent" />
					<input
						type="text"
						placeholder="Email"
						className="bg-secondaryBg w-full focus:border-none focus:outline-none"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex items-center space-x-4 bg-secondaryBg p-2 rounded-lg border border-primaryBg focus-within:border-accent focus-within:outline-none">
					<FiKey className="text-accent" />
					<input
						type="password"
						placeholder="••••••••"
						className="bg-secondaryBg w-full focus:border-none focus:outline-none"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="flex justify-between">
					<div className=" flex items-center space-x-2">
						<input
							type="checkbox"
							name="remember"
							id="remember"
							checked={remember}
							onChange={(e) => setRemeber(!remember)}
						/>
						<label htmlFor="remember">Remember Me</label>
					</div>

					<Link to="/forgotPassword" className="underline">
						Forgot Password?
					</Link>
				</div>
				<div className="flex flex-col space-y-4 items-center">
					<Button type={"accent"} content={"Login"} action={handleLogin} />
					<Link to="/register">Register Account</Link>
				</div>
			</form>
		</div>
	);
}

export default LoginView;

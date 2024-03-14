import React, { useState } from "react";
import fullLogo from "/full_logo.svg";
import { FiKey, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function LoginView() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemeber] = useState(false);

	const handleLogin = async (event) => {
		event.preventDefault();
		console.log(email, password, remember);
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
					<a href="" className=" underline">
						Forgot Password?
					</a>
				</div>
				<div className="flex flex-col space-y-4 items-center">
					<button
						className="bg-accent transition active:bg-accentDark rounded-lg p-2 px-10 min-w-36"
						onClick={handleLogin}
					>
						Login
					</button>
					<Link to="/register">Register Account</Link>
				</div>
			</form>
		</div>
	);
}

export default LoginView;

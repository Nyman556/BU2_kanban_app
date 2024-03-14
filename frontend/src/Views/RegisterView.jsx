import React, { useState } from "react";
import fullLogo from "/full_logo.svg";
import { FiKey, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function RegisterView() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleRegister = async (event) => {
		event.preventDefault();
		console.log(email, password, confirmPassword);
	};

	return (
		<div className="w-screen h-screen flex flex-col space-y-16 justify-center items-center bg-primaryBg text-white">
			<img src={fullLogo} alt="Logo" />
			<form className="flex flex-col space-y-10 min-w-96">
				<div className="space-y-2">
					<p>Email</p>
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
					<p>Password</p>
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
					<p>Confirm Password</p>
					<div className="flex items-center space-x-4 bg-secondaryBg p-2 rounded-lg border border-primaryBg focus-within:border-accent focus-within:outline-none">
						<FiKey className="text-accent" />
						<input
							type="password"
							placeholder="••••••••"
							className="bg-secondaryBg w-full focus:border-none focus:outline-none"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-4 items-center">
					<button
						className="bg-accent transition active:bg-accentDark rounded-lg p-2 px-10 min-w-36"
						onClick={handleRegister}
					>
						Register Account
					</button>
					<Link to="/">Back to login</Link>
				</div>
			</form>
		</div>
	);
}

export default RegisterView;

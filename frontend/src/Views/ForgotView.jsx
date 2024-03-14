import React, { useState } from "react";
import fullLogo from "/full_logo.svg";
import { FiKey, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function ForgotView() {
	const [email, setEmail] = useState("");

	const handleForgot = async (event) => {
		event.preventDefault();
		console.log(email);
	};

	return (
		<div className="w-screen h-screen flex flex-col space-y-4 justify-center items-center bg-primaryBg text-white">
			<img src={fullLogo} alt="Logo" />
			<h2 className="text-2xl">Forgot Password</h2>
			<p className=" text-gray-400 text-center">
				Enter your email <br /> and we'll send you a link to reset your
				password.
			</p>
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
				<div className="flex flex-col space-y-4 items-center">
					<Button type={"accent"} content={"Submit"} action={handleForgot} />
					<Link to="/">Back to Login</Link>
				</div>
			</form>
		</div>
	);
}

export default ForgotView;

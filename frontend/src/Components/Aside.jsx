import React from "react";
import { Link } from "react-router-dom";
import {
	FiHome,
	FiUsers,
	FiChevronDown,
	FiSettings,
	FiLogOut,
} from "react-icons/fi";
import smallLogo from "/small_logo.svg";

function Aside({ onLogout }) {
	return (
		<aside className="w-1/6 h-screen bg-secondaryBg flex flex-col space-y-4 pt-4">
			<div className="w-full h-full flex flex-col items-center">
				<img src={smallLogo} className=" w-24" />
				<ul className="w-full flex flex-col">
					<Link
						to="/"
						className="w-full flex p-4 text-lg justify-center items-center space-x-2 hover:bg-tertiaryBg"
					>
						<FiHome className=" text-accent text-2xl" />
						<p>Home</p>
					</Link>
					<Link
						to="/"
						className="w-full flex p-4 text-lg justify-center items-center space-x-2 hover:bg-tertiaryBg"
					>
						<FiUsers className=" text-accent text-2xl" />
						<p>Groups</p>
						<FiChevronDown />
					</Link>
				</ul>
			</div>
			<div>
				<Link
					to="/settings"
					className="w-full flex p-4 text-lg justify-center items-center place-self-end space-x-2 hover:bg-tertiaryBg"
				>
					<FiSettings className=" text-accent text-2xl" />
					<p>Settings</p>
				</Link>
				<button
					className="w-full flex p-4 text-lg justify-center items-center place-self-end space-x-2 hover:bg-tertiaryBg"
					onClick={onLogout}
				>
					<FiLogOut className=" text-accent text-2xl" />
					<p>Logout</p>
				</button>
			</div>
		</aside>
	);
}

export default Aside;

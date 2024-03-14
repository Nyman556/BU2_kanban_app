import React, { useState } from "react";
import Button from "../Components/Button";

function HomeView({ onLogout }) {
	return (
		<div className="w-screen h-screen flex flex-col space-y-4 justify-center items-center bg-primaryBg text-white">
			<h2>HomeView</h2>
			<Button type={"accent"} content={"Logout"} action={onLogout} />
		</div>
	);
}

export default HomeView;

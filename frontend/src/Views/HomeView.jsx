import React from "react";
import Aside from "../Components/Aside";

function HomeView({ onLogout }) {
	return (
		<div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
			<Aside onLogout={onLogout} />
			<div className=" flex flex-col justify-center items-center w-full">
				<h2>HomeView</h2>
			</div>
		</div>
	);
}

export default HomeView;

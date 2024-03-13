import React from "react";
import { Link } from "react-router-dom";

function ErrorView() {
	return (
		<div className="w-screen h-screen flex flex-col space-y-4 justify-center items-center bg-primaryBg text-white">
			<p className="text-xl text-gray-500">
				<span className=" text-2xl text-white">404</span> | This page could not
				be found.
			</p>
			<Link to="/">Back to safety</Link>
		</div>
	);
}

export default ErrorView;

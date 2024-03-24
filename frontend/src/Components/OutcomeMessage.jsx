import React from "react";
import { FiAlertTriangle, FiCheckSquare } from "react-icons/fi";

function OutcomeMessage({ outcome, content }) {
	if (outcome == "success") {
		return (
			<div className="absolute bottom-14 transform translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center rounded-lg bg-secondaryBg p-4 space-x-2">
				<FiCheckSquare className=" text-green-500" />
				<p className="text-white">{content}</p>
			</div>
		);
	} else {
		return (
			<div className="absolute bottom-14 transform translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center rounded-lg bg-secondaryBg p-4 space-x-2">
				<FiAlertTriangle className=" text-red-500" />
				<p className="text-white">{content}</p>
			</div>
		);
	}
}

export default OutcomeMessage;

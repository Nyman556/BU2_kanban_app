import React from "react";

import { FiX, FiChevronsRight } from "react-icons/fi";
function Task({ task }) {
	return (
		<div className="flex flex-col bg-secondaryBg rounded-lg min-h-40 max-w-48 p-4 mt-4 h-full justify-between">
			<div>
				<p className=" text-lg">{task.title}</p>
				<span className=" text-gray-500 text-base">{task.description}</span>
			</div>
			<div className=" text-lg flex justify-between items-center">
				<button className=" text-red-500">
					<FiX />
				</button>
				<button className=" text-green-500">
					<FiChevronsRight />
				</button>
			</div>
		</div>
	);
}

export default Task;

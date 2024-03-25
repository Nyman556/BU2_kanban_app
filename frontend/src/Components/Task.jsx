import React from "react";

import { FiX, FiChevronsRight, FiCheck } from "react-icons/fi";
function Task({ task, deleteTask, updateStatus }) {
	return (
		<div className="flex flex-col bg-secondaryBg rounded-lg h-fit max-w-48 p-4 mt-4 justify-between">
			<div className="mb-4">
				<p className=" text-lg capitalize">{task.title}</p>
				<span className=" text-gray-500 text-base">{task.description}</span>
			</div>
			<div className=" text-lg flex justify-between items-center">
				<button
					className=" text-red-500"
					onClick={(e) => {
						deleteTask(task.id);
					}}
				>
					<FiX />
				</button>
				{task.status !== 3 ? (
					<button
						className="text-green-500"
						onClick={(e) => {
							updateStatus(task.id, task.status + 1);
						}}
					>
						<FiChevronsRight />
					</button>
				) : (
					<button
						className="text-green-500"
						onClick={(e) => {
							deleteTask(task.id);
						}}
					>
						<FiCheck />
					</button>
				)}
			</div>
		</div>
	);
}

export default Task;

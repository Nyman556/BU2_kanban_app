import React from "react";
import { FiPlus } from "react-icons/fi";
import Task from "./Task";

function Board({ group }) {
	return (
		<div className="flex space-x-5 text-2xl">
			<div className="flex flex-col">
				<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
					<span>Todo</span>
					<FiPlus />
				</div>
				<Task />
			</div>
			<div className="flex flex-col">
				<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
					<span>In Progress</span>
					<FiPlus />
				</div>
				<Task />
			</div>
			<div className="flex flex-col">
				<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
					<span>Review</span>
					<FiPlus />
				</div>
				<Task />
			</div>
			<div className="flex flex-col">
				<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
					<span>Complete</span>
					<FiPlus />
				</div>
				<Task />
			</div>
		</div>
	);
}

export default Board;

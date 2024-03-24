import React from "react";
import { FiPlus } from "react-icons/fi";
import Task from "./Task";
import EmptyBoardItem from "./EmptyBoardItem";

function Board({ group }) {
	const todoTasks = group.tasks.filter((task) => task.status === 0);
	const inProgressTasks = group.tasks.filter((task) => task.status === 1);
	const reviewTasks = group.tasks.filter((task) => task.status === 2);
	const completeTasks = group.tasks.filter((task) => task.status === 3);
	return (
		<div className="flex w-full justify-between">
			<div className="flex space-x-4">
				<div className="flex flex-col">
					<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
						<span className="text-xl">Todo</span>
						<FiPlus />
					</div>
					{todoTasks.length > 0 ? (
						todoTasks.map((task) => <Task key={task.id} task={task} />)
					) : (
						<EmptyBoardItem />
					)}
				</div>
				<div className="flex flex-col">
					<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
						<span className="text-xl">In Progress</span>
						<FiPlus />
					</div>
					{inProgressTasks.length > 0 ? (
						inProgressTasks.map((task) => <Task key={task.id} task={task} />)
					) : (
						<EmptyBoardItem />
					)}
				</div>
				<div className="flex flex-col">
					<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
						<span className="text-xl">Review</span>
						<FiPlus />
					</div>
					{reviewTasks.length > 0 ? (
						reviewTasks.map((task) => <Task key={task.id} task={task} />)
					) : (
						<EmptyBoardItem />
					)}
				</div>
				<div className="flex flex-col">
					<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
						<span className="text-xl">Complete</span>
						<FiPlus />
					</div>
					{completeTasks.length > 0 ? (
						completeTasks.map((task) => <Task key={task.id} task={task} />)
					) : (
						<EmptyBoardItem />
					)}
				</div>
			</div>
			<div className="flex flex-col px-4">
				<div className="w-48 border-b border-white flex  items-center justify-between p-2">
					<span className="text-xl">Members</span>
					<FiPlus />
				</div>
				{group.members.length > 0 ? (
					group.members.map((member, idx) => (
						<span
							key={idx}
							className="flex flex-col bg-secondaryBg rounded-lg max-w-48 p-4 mt-4 space-y-4 text-base text-center"
						>
							{member.name}
						</span>
					))
				) : (
					<EmptyBoardItem />
				)}
			</div>
		</div>
	);
}

export default Board;

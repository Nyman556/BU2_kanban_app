import React, { useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import Task from "./Task";
import EmptyBoardItem from "./EmptyBoardItem";
import Button from "./Button";
import groupApi from "../api/group";
import taskApi from "../api/task";
import OutcomeMessage from "./OutcomeMessage";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function Board({ group, setGroup }) {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);
	const [cookies] = useCookies(["AccessToken"]);

	const navigate = useNavigate();
	const handleDeleteGroup = async () => {
		try {
			const data = await groupApi.removeGroup(group.id, cookies.AccessToken);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddMember = async () => {
		if (email) {
			try {
				const data = await groupApi.addMember(
					group.id,
					email,
					cookies.AccessToken
				);
				setGroup((prevGroup) => ({
					...prevGroup,
					members: [...prevGroup.members, { name: email, email: email }],
				}));
				setSuccess("Member Added!");
				setError(null);
				setEmail("");
			} catch (error) {
				setError(error.message);
				setSuccess(null);
				setEmail("");
			}
		} else {
			setError("Please fill in email");
		}
	};

	const handleRemoveMember = async (email) => {
		try {
			const data = await groupApi.removeMember(
				group.id,
				email,
				cookies.AccessToken
			);
			setGroup((prevGroup) => ({
				...prevGroup,
				members: prevGroup.members.filter((member) => member.email !== email),
			}));
			setSuccess("Member Removed!");
			setError(null);
		} catch (error) {
			setError(error.message);
			setSuccess(null);
		}
	};
	const handleDeleteTask = async (taskId) => {
		try {
			const data = await taskApi.delete(taskId, cookies.AccessToken);
			setGroup((prevGroup) => ({
				...prevGroup,
				tasks: prevGroup.tasks.filter((task) => task.id !== taskId),
			}));
			setSuccess("Task Deleted!");
			setError(null);
		} catch (error) {
			setError(error.message);
			setSuccess(null);
		}
	};

	const handleStatusUpdate = async (taskId, value) => {
		try {
			const data = await taskApi.updateStatus(
				taskId,
				value,
				cookies.AccessToken
			);
			const updatedTasks = group.tasks.map((task) =>
				task.id === taskId ? { ...task, status: value } : task
			);
			setGroup((prevGroup) => ({
				...prevGroup,
				tasks: updatedTasks,
			}));
			setSuccess("Task status updated!");
			setError(null);
		} catch (error) {
			setError(error.message);
			setSuccess(null);
		}
	};

	const todoTasks = group.tasks.filter((task) => task.status === 0);
	const inProgressTasks = group.tasks.filter((task) => task.status === 1);
	const reviewTasks = group.tasks.filter((task) => task.status === 2);
	const completeTasks = group.tasks.filter((task) => task.status === 3);

	const handleClick = () => {};

	return (
		<div className="flex w-full justify-between">
			<div className="flex flex-col">
				<div className="flex space-x-4">
					<div className="flex flex-col">
						<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
							<p className="text-xl">Todo</p>
							<div className="flex items-center space-x-2">
								<span className=" bg-white text-black px-2 rounded-full">
									{todoTasks.length}
								</span>
								<FiPlus />
							</div>
						</div>
						{todoTasks.length > 0 ? (
							todoTasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									deleteTask={handleDeleteTask}
									updateStatus={handleStatusUpdate}
								/>
							))
						) : (
							<EmptyBoardItem />
						)}
					</div>
					<div className="flex flex-col">
						<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
							<p className="text-xl">In Progress</p>
							<div className="flex items-center space-x-2">
								<span className=" bg-white text-black px-2 rounded-full">
									{inProgressTasks.length}
								</span>
								<FiPlus />
							</div>
						</div>
						{inProgressTasks.length > 0 ? (
							inProgressTasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									deleteTask={handleDeleteTask}
									updateStatus={handleStatusUpdate}
								/>
							))
						) : (
							<EmptyBoardItem />
						)}
					</div>
					<div className="flex flex-col">
						<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
							<p className="text-xl">Review</p>
							<div className="flex items-center space-x-2">
								<span className=" bg-white text-black px-2 rounded-full">
									{reviewTasks.length}
								</span>
								<FiPlus />
							</div>
						</div>
						{reviewTasks.length > 0 ? (
							reviewTasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									deleteTask={handleDeleteTask}
									updateStatus={handleStatusUpdate}
								/>
							))
						) : (
							<EmptyBoardItem />
						)}
					</div>
					<div className="flex flex-col">
						<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
							<p className="text-xl">Complete</p>
							<div className="flex items-center space-x-2">
								<span className=" bg-white text-black px-2 rounded-full">
									{completeTasks.length}
								</span>
								<FiPlus />
							</div>
						</div>
						{completeTasks.length > 0 ? (
							completeTasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									deleteTask={handleDeleteTask}
									updateStatus={handleStatusUpdate}
								/>
							))
						) : (
							<EmptyBoardItem />
						)}
					</div>
				</div>
				<div className=" mt-16 space-x-4">
					<Link
						to="/CreateTask"
						className=" bg-secondaryBg transition active:bg-accentDark rounded-lg p-2 px-10 min-w-36 border border-accent"
					>
						Create task
					</Link>
					<Button
						type="none"
						content="Delete Group"
						action={handleDeleteGroup}
						style="border border-red-500"
					/>
				</div>
			</div>
			<div className="flex flex-col px-4">
				<div className="w-48 border-b border-accent flex  items-center justify-between p-2">
					<p className="text-xl">Members</p>
					<div className="flex items-center space-x-2">
						<span className=" bg-white text-black px-2 rounded-full">
							{group.members.length}
						</span>
						<FiPlus />
					</div>
				</div>
				{group.members.length > 0 ? (
					group.members.map((member, idx) => (
						<div
							key={idx}
							className="relative bg-secondaryBg rounded-lg max-w-48 p-4 mt-4 space-y-4 text-base"
						>
							<button
								className="absolute -top-3 -left-3 flex justify-center items-center bg-secondaryBg rounded-full p-1 border border-secondaryBg hover:border-red-500 transition-colors"
								onClick={() => handleRemoveMember(member.email)}
							>
								<FiX />
							</button>
							<span>{member.name}</span>
						</div>
					))
				) : (
					<EmptyBoardItem />
				)}

				<div className=" my-4">
					<p>Email:</p>
					<div className="flex items-center space-x-4 bg-secondaryBg p-2 rounded-lg border border-primaryBg focus-within:border-accent focus-within:outline-none">
						<input
							type="text"
							placeholder="Example@gmail.com"
							className="bg-secondaryBg w-full focus:border-none focus:outline-none"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<Button content="Add Member" action={handleAddMember} />
			</div>
			{success && <OutcomeMessage outcome="success" content={success} />}
			{error && <OutcomeMessage outcome="error" content={error} />}
		</div>
	);
}

export default Board;

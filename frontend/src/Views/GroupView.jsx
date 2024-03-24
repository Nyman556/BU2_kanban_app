import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Aside from "../Components/Aside";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allGroupsAtom } from "../Recoil/atoms";
import textLogo from "/text_logo.svg";
import Board from "../Components/Board";
import Button from "../Components/Button";
import groupApi from "../api/group";
import { useCookies } from "react-cookie";

function GroupView() {
	const allGroups = useRecoilValue(allGroupsAtom);
	const setGroups = useSetRecoilState(allGroupsAtom);
	const [cookies] = useCookies(["AccessToken"]);
	const { groupId } = useParams();
	const [selectedGroup, setSelectedGroup] = useState(
		allGroups.find((group) => group.id === groupId)
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (cookies.AccessToken) {
					await groupApi.getAll(setGroups, cookies.AccessToken);
				}
			} catch (error) {
				console.error("Error fetching groups:", error.message);
			}
		};

		fetchData();
	}, [setGroups, cookies.AccessToken]);

	const handleClick = () => {};

	return (
		<div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
			<Aside onLogout={"none"} />
			{selectedGroup && (
				<div className="w-full p-6 space-y-16">
					<div className="flex justify-between w-full">
						<div className=" text-3xl font-bold flex space-x-4">
							<h2 className=" text-gray-600">Group:</h2>
							<h2 className="">{selectedGroup.title}</h2>
						</div>
						<img
							src={textLogo}
							className="w-60 h-fit"
							alt="Ducktasks text logo"
						/>
					</div>
					<Board group={selectedGroup} setGroup={setSelectedGroup} />
					<div className=" space-x-4">
						<Link
							to="/CreateTask"
							className=" bg-secondaryBg transition active:bg-accentDark rounded-lg p-2 px-10 min-w-36 border border-accent"
						>
							Create task
						</Link>
						<Button
							type="none"
							content="Delete Group"
							action={handleClick}
							style="border border-red-500"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default GroupView;

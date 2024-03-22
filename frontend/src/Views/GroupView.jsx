import React from "react";
import { useParams } from "react-router-dom";
import Aside from "../Components/Aside";
import { useRecoilValue } from "recoil";
import { allGroupsAtom } from "../Recoil/atoms";
import textLogo from "/text_logo.svg";
import Board from "../Components/Board";
import Button from "../Components/Button";

function GroupView() {
	const allGroups = useRecoilValue(allGroupsAtom);
	const { groupId } = useParams();
	const selectedGroup = allGroups.find((group) => group.id === groupId);

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
					<Board group={selectedGroup} />
					<Button type="none" content="Delete Group" action="temp" />
				</div>
			)}
		</div>
	);
}

export default GroupView;

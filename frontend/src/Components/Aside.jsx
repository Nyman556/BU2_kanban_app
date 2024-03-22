import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
	FiHome,
	FiUsers,
	FiChevronDown,
	FiChevronUp,
	FiSettings,
	FiLogOut,
} from "react-icons/fi";
import smallLogo from "/small_logo.svg";
import AsideItem from "./AsideItem";
import { allGroupsAtom } from "../Recoil/atoms";

function Aside({ onLogout }) {
	const [groupOpen, setGroupOpen] = useState(false);
	const allGroups = useRecoilValue(allGroupsAtom);

	return (
		<aside className="w-1/6 h-screen bg-secondaryBg flex flex-col space-y-4 pt-4">
			<div className="w-full h-full flex flex-col items-center">
				<img src={smallLogo} className=" w-24" />
				<ul className="w-full flex flex-col">
					<AsideItem type="Link" icon={0} content="Home" path="/" />
					<AsideItem
						type="Button"
						icon={1}
						content="Groups"
						path="none"
						action={() => setGroupOpen(!groupOpen)}
						dropdown={true}
						dropdownState={groupOpen}
					/>
					{groupOpen && (
						<div>
							{allGroups.map((group) => (
								<button
									key={group.id}
									className="w-full flex p-4 text-lg justify-center items-center space-x-2 hover:bg-tertiaryBg"
								>
									{group.title}
									<br />
								</button>
							))}
							<Link
								to="/CreateGroup"
								className="w-full flex p-4 text-lg justify-center items-center space-x-2 hover:bg-tertiaryBg"
							>
								<FiUsers className="text-accent text-2xl" />
								<p>Create Group</p>
							</Link>
						</div>
					)}
				</ul>
			</div>
			<div>
				<AsideItem type="Link" icon={4} content="Settings" path="/settings" />
				<AsideItem
					type="Button"
					icon={5}
					content="Logout"
					path="none"
					action={onLogout}
					dropdown={false}
				/>
			</div>
		</aside>
	);
}

export default Aside;

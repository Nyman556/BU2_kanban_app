import React, { useEffect } from "react";
import Aside from "../Components/Aside";
import { useRecoilValue, useSetRecoilState } from "recoil";
import groupApi from "../api/group";
import { allGroupsAtom } from "../Recoil/atoms";
import { useCookies } from "react-cookie";
import textLogo from "/text_logo.svg";
import { Link } from "react-router-dom";

function HomeView({ onLogout }) {
	const allGroups = useRecoilValue(allGroupsAtom);
	console.log(allGroups);
	const setGroups = useSetRecoilState(allGroupsAtom);
	const [cookies] = useCookies(["AccessToken"]);

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

	return (
		<div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
			<Aside onLogout={onLogout} />
			<div className="w-full p-6 space-y-16">
				<div className="flex justify-between w-full">
					<div className=" text-3xl font-bold flex space-x-4">
						<h2 className=" text-gray-600">Home</h2>
					</div>
					<img
						src={textLogo}
						className="w-60 h-fit"
						alt="Ducktasks text logo"
					/>
				</div>
				<div className="flex p-16 w-full space-x-4">
					{allGroups.map((group) => (
						<div
							key={group.id}
							className="py-4 px-8 flex flex-col bg-secondaryBg rounded relative justify-between"
						>
							<p className="text-2xl mb-4">{group.title}</p>
							<p className="text-1xl mb-4 text-gray-500">
								Tasks: {group.tasks.length}
							</p>
							<Link
								to={`/group/${group.id}`}
								className="bg-primaryBg rounded py-2 px-1 text-center"
							>
								Go to group
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default HomeView;

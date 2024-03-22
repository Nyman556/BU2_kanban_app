import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Aside from "../Components/Aside";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import groupApi from "../api/group";
import { allGroupsAtom } from "../Recoil/atoms";

function GroupView() {
	const setGroups = useSetRecoilState(allGroupsAtom);
	const [cookies, setCookie, removeCookie] = useCookies(["AccessToken"]);

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
	const { groupId } = useParams();
	return (
		<div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
			<Aside onLogout={"none"} />
			<div className="flex flex-col justify-center items-center w-full">
				<h2>{groupId}</h2>
			</div>
		</div>
	);
}

export default GroupView;

import React, { useEffect } from "react";
import Aside from "../Components/Aside";
import { useSetRecoilState } from "recoil";
import groupApi from "../api/group";
import { allGroupsAtom } from "../Recoil/atoms";
import { useCookies } from "react-cookie";

function HomeView({ onLogout }) {
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

	return (
		<div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
			<Aside onLogout={onLogout} />
			<div className="flex flex-col justify-center items-center w-full">
				<h2>HomeView</h2>
			</div>
		</div>
	);
}

export default HomeView;

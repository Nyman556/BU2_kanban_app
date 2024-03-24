import { useCookies } from "react-cookie";

const api = import.meta.env.VITE_BACKEND_URL;

const groupApi = {
	getAll: async (setGroups, accessToken) => {
		try {
			const response = await fetch(`${api}/group/getgroups`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (!response.ok) {
				throw new Error("Failed to fetch groups");
			}

			const groups = await response.json();
			setGroups(groups);

			return groups;
		} catch (error) {
			console.error("Error during fetch of groups:", error.message);
			throw error;
		}
	},
	createGroup: async (title, accessToken) => {
		try {
			const response = await fetch(`${api}/group/creategroup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({ title }),
			});

			if (response.status === 200) {
				return {};
			}
			if (!response.ok) {
				throw new Error(
					`Creation of group failed with status: ${response.status}`
				);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error("Error during group creation:", error.message);
			throw error;
		}
	},
	removeGroup: async (id, accessToken) => {
		try {
			const response = await fetch(`${api}/group/removegroup/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (response.status === 200) {
				return {};
			}
			if (!response.ok) {
				throw new Error(
					`Deletion of group failed with status: ${response.status}`
				);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error("Error during group deletion:", error.message);
			throw error;
		}
	},
	addMember: async (groupId, userEmail, accessToken) => {
		try {
			const response = await fetch(`${api}/group/addmember`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({ groupId, userEmail }),
			});

			if (response.status === 200) {
				return {};
			}
			if (!response.ok) {
				throw new Error(`Adding member failed with status: ${response.status}`);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error("Error adding member:", error.message);
			throw error;
		}
	},
	removeMember: async (groupId, userEmail, accessToken) => {
		try {
			const response = await fetch(`${api}/group/removemember`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({ groupId, userEmail }),
			});

			if (response.status === 200) {
				return {};
			}
			if (!response.ok) {
				throw new Error(
					`removing member failed with status: ${response.status}`
				);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error("Error removing member:", error.message);
			throw error;
		}
	},
};
export default groupApi;

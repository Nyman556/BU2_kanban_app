const api = import.meta.env.VITE_BACKEND_URL;

const authApi = {
	login: async (email, password) => {
		try {
			const response = await fetch(`${api}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error("Login failed");
			}

			return response.json();
		} catch (error) {
			console.error("Error during login:", error.message);
			throw error;
		}
	},
	register: async (email, password) => {
		try {
			const response = await fetch(`${api}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.status === 200) {
				return {};
			}
			if (!response.ok) {
				throw new Error(`Registration failed with status: ${response.status}`);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error("Error during registration:", error.message);
			throw error;
		}
	},
};
export default authApi;

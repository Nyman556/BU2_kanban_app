const api = import.meta.env.VITE_BACKEND_URL;

const taskApi = {
  create: async (title, description, group) => {
    try {
      const response = await fetch(`${api}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, group }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the creation of the task!");
      }

      return response.json();
    } catch (error) {
      console.error("Error during creation:", error.message);
      throw error;
    }
  },
};

export default taskApi;

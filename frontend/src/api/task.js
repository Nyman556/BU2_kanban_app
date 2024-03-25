import { useCookies } from "react-cookie";

const api = import.meta.env.VITE_BACKEND_URL;

const taskApi = {
  create: async (Title, Description, Parent_Group, accessToken) => {
    try {
      const response = await fetch(`${api}/tasks/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ Title, Description, Parent_Group }),
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
  delete: async (taskId, accessToken) => {
    try {
      const response = await fetch(`${api}/tasks/removeTask/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the deletion of the task!");
      }

      return response.json();
    } catch (error) {
      console.error("Error during deletion:", error.message);
      throw error;
    }
  },

  updateStatus: async (taskId, value, accessToken) => {
    try {
      const response = await fetch(`${api}/tasks/updateStatus/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ value }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong updating status of task!");
      }

      return response.json();
    } catch (error) {
      console.error("Error during status update:", error.message);
      throw error;
    }
  },
};

export default taskApi;

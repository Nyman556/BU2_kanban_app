import React, { useState, useEffect } from "react";
import { FiAtSign } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { allTasksAtom } from "../Recoil/atoms";
import taskApi from "../api/task";
import { useCookies } from "react-cookie";
export default function CreateTaskContent({ onLogout }) {
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Parent_Group: "",
  });
  const [tasks, setTasks] = useRecoilState(allTasksAtom);
  const [cookies] = useCookies(["AccessToken"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await taskApi.create(
        form.Title,
        form.Description,
        form.Parent_Group,
        cookies.AccessToken
      );

      setTasks([...tasks, newTask]);

      setForm({ Title: "", Description: "", Parent_Group: "" });
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };
  return (
    <div className="m-20">
      <div className=" flex flex-col justify-center p-16">
        <div className="w-4/5 bg-secondaryBg rounded-md mb-10 mt-10">
          <h2 className="text-xl p-2"> Create Tasks</h2>
        </div>
        <div className="w-screen max-w-[90rem]">
          <form className="flex justify-between" onSubmit={handleSubmit}>
            {/* left side */}
            <div className="w-[45%]">
              <div className="max-w-[25rem]">
                <div className="mb-8">
                  <div className="flex flex-row justify-between">
                    <label className="text-sm font-semibold">Title</label>
                    <p className="text-sm text-gray-600 font-semibold">
                      Required
                    </p>
                  </div>

                  <div className="flex flex-row">
                    <div className="flex items-center bg-secondaryBg rounded-l-lg text-accent p-2">
                      <FiAtSign className="size-6 mr-4" />
                    </div>

                    <input
                      className="flex bg-secondaryBg rounded-r-lg p-2 w-[25rem] placeholder-white text-lg font-semibold"
                      type="text"
                      placeholder="Title"
                      name="Title"
                      value={form.Title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex flex-row justify-between">
                    <label className="text-sm font-semibold">Description</label>
                    <p className="text-sm text-gray-600 font-semibold">
                      Required
                    </p>
                  </div>

                  <div className="flex flex-row">
                    <div className="flex items-center bg-secondaryBg rounded-l-lg text-accent p-2">
                      <FiAtSign className="size-6 mr-4" />
                    </div>
                    <input
                      className="flex bg-secondaryBg rounded-r-lg p-2 w-[25rem] placeholder-white text-lg font-semibold"
                      type="text"
                      placeholder="Description"
                      name="Description"
                      value={form.Description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="w-[75%]">
              <div className="max-w-[25rem]">
                <div className="mb-8">
                  <div className="flex flex-row justify-between">
                    <label className="text-sm font-semibold">Group</label>
                    <p className="text-sm text-gray-600 font-semibold">
                      Optional
                    </p>
                  </div>

                  <div className="flex flex-row">
                    <div className="flex items-center bg-secondaryBg rounded-l-lg text-accent p-2">
                      <FiAtSign className="size-6 mr-4" />
                    </div>
                    <input
                      className="flex bg-secondaryBg rounded-r-lg p-2 w-[25rem] placeholder-white text-lg font-semibold"
                      type="text"
                      placeholder="Group Id"
                      name="Parent_Group"
                      value={form.Parent_Group}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="absolute top-[35rem] bg-secondaryBg hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

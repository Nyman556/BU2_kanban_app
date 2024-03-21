import React, { useState } from "react";
import Aside from "../Components/Aside";
import { useRecoilState } from "recoil";
import { allTasksAtom } from "../Recoil/atoms";

export default function CreateTaskView({ onLogout }) {
  const [form, setForm] = useState({ Title: "", Description: "", Owner: "" });
  const [tasks, setTasks] = useRecoilState(allTasksAtom);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form);
  };
  const handelSubmitFront = (e) => {};
  // const handelSubmit = async () => {
  // 	try {
  // 		// const data = await groupApi.();
  // 		// setCookie("AccessToken", data.token, { path: "/", sameSite: "strict" });
  // 		// if (remember) {
  // 		// 	localStorage.setItem("savedEmail", email);
  // 		// } else {
  // 		// 	localStorage.removeItem("savedEmail");
  // 		// }
  // 	} catch (error) {
  // 		// setError(error.message);
  // 	}
  // };

  return (
    <div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
      <Aside onLogout={onLogout} />
      <div className=" flex flex-col justify-center items-center w-full">
        <h2 className="text-4xl"> Create Tasks like a boss!!!!</h2>
        <form className="w-screen max-w-3xl ">
          <div
           className="flex flex-col">
           
            <label className="text-xs">Title</label>
            <input
              className="bg-secondaryBg rounded-md p-1 max-w-72"
              type="text"
              placeholder="Title"
              name="Title"
              value={form.Title}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col">
           
            <label className="text-xs">Description</label>
            <input
              className="bg-secondaryBg rounded-md p-1 max-w-72"
              type="text"
              placeholder="Description"
              name="Description"
              value={form.Description}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col">
           
            <label className="text-xs">Owner</label>
            <input
              className="bg-secondaryBg rounded-md p-1 max-w-72"
              type="text"
              placeholder="Owner"
              name="Owner"
              value={form.Owner}
              onChange={handelChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

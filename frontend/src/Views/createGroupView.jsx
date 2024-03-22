import React, { useState } from "react";
import Aside from "../Components/Aside";
import { useRecoilState } from "recoil";
import { allGroupsAtom } from "../Recoil/atoms";
import Button from "../Components/Button";

export default function CreateGroupView({ onLogout }) {
  const [group, setGroup] = useState({ id: 1, Title: "" });
  const [members, setMembers] = useState({ Id: "", Email: "" });
  const [allGroups, setAllGroups] = useRecoilState(allGroupsAtom);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setGroup((prev) => ({ ...prev, [name]: value }));
    console.log(group);
  };
  const handelSubmit = (e) => {
    setAllGroups((prev) => [
      ...prev,
      { id: form.Id++, Title: form.Title, Members: [members] },
    ]);
    console.log(groups);
  };

  return (
    <div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white ">
      <Aside onLogout={onLogout} />
      <div className=" m-20">
        <div className="flex mb-10">
          <h3 className="opacity-50">Groups  </h3>
          <h3> : Create Groups</h3>
          </div>
        <h2 className="text-4xl bg-secondaryBg rounded-md p-1 text-xl mb-10">
          Create Groups like a boss!!!!
        </h2>
        <form className="w-screen max-w-3xl grid grid-col-4 grid-row-4">
          <div className="col-start-1 row-start-1 flex flex-col">
            <label className="text-xs">Title</label>
            <input
              className="bg-secondaryBg rounded-md p-1 max-w-72"
              type="text"
              placeholder="Title"
              name="Title"
              value={group.Title}
              onChange={handelChange}
            />
          </div>

          <div className="col-start-3 row-start-1  flex flex-col">
            <label className="text-xs">Add members</label>
            <input
              className="bg-secondaryBg rounded-md p-1 max-w-72"
              type="text"
              placeholder="Email"
              name="Email"
              value={members.Email}
              onChange={handelChange}
            />
          </div>
          <Button
            style="col-start-1 row-start-3 mt-20 w-40"
            content={"create group"}
            action={handelSubmit}
          ></Button>
        </form>
      </div>
    </div>
  );
}

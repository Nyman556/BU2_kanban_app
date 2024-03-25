import React, { useState, useEffect } from "react";
import Aside from "../Components/Aside";
import { useRecoilState } from "recoil";
import { allGroupsAtom } from "../Recoil/atoms";
import Button from "../Components/Button";
import { useCookies } from "react-cookie";
import groupApi from "../api/group";
import { FiAtSign } from "react-icons/fi";
import textLogo from "/text_logo.svg";


export default function CreateGroupView({ onLogout }) {
  const [group, setGroup] = useState({ id: 1, Title: "" });
  const [allGroups, setAllGroups] = useRecoilState(allGroupsAtom);
  const [cookies] = useCookies(["AccessToken"]);

  const handelChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newGroup = await groupApi.createGroup(
        group.Title,
        cookies.AccessToken
      );
      
      setAllGroups(group => [...group, newGroup]);
      setGroup({ Title: "" });
    } catch (error) {
      console.error("Error creating group:", error.message);
    }
  };

  return (
    <div className="w-screen min-h-screen flex space-y-4 bg-primaryBg text-white">
      <Aside onLogout={onLogout} />
      <div className=" m-20">
        <div className="w-full flex mb-10 justify-between space-y-16">
          <span className="opacity-50 flex">Groups  <h3> : Create Groups</h3> </span>
         
          
          <img
						src={textLogo}
						className="w-60 h-fit "
						alt="Ducktasks text logo"
					/>
          
        </div>
       
          <h2 className="text-2xl bg-secondaryBg rounded-md p-1  mb-10" style={{width: "80%"}}>
          Create Group
        </h2>
        
        <form
          onSubmit={handleSubmit}
          className="w-screen max-w-3xl grid grid-col-4 grid-row-4"
        >
          <div className="col-start-1 row-start-1 flex flex-col">
            <label className="text-xs">Title</label>
            <div className="flex flex-row">
              <div className="flex items-center bg-secondaryBg rounded-l-lg text-accent p-2">
                <FiAtSign className="size-6 mr-4" />
              </div>

              <input
                className="flex bg-secondaryBg rounded-r-lg p-2 w-[25rem] placeholder-white text-lg font-semibold"
                type="text"
                placeholder="Title"
                name="Title"
                value={group.Title}
                onChange={(e) => handelChange(e, setGroup)}
              />
            </div>
          </div>
         
          <Button
            style="col-start-1 row-start-3 mt-20 w-40"
            content={"create group"}
            action={handleSubmit}
          ></Button>
        </form>
      </div>
    </div>
  );
}

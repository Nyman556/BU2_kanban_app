import React, { useState, useEffect } from "react";
import Aside from "../Components/Aside";
import textLogo from "/text_logo.svg";
import CreateTaskContent from "../Components/CreateTaskContent";

export default function CreateTaskView({ onLogout }) {
  // Breadcrumbs måste läggas till
  return (
    <div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
      <Aside onLogout={onLogout} />
      <div className="w-full p-6 space-y-16">
        <div className="flex justify-between w-full">
          <div className=" text-3xl font-bold flex space-x-4">
            <h2 className=" text-gray-600">Create Task</h2>
          </div>
          <img
            src={textLogo}
            className="w-60 h-fit"
            alt="Ducktasks text logo"
          />
        </div>

        <CreateTaskContent onLogout={onLogout} />
      </div>
    </div>
  );
}

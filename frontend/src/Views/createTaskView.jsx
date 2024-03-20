import React from 'react'

export default function CreateTaskView({onLogout}) {
  return (
    <div className="w-screen h-screen flex space-y-4 bg-primaryBg text-white">
    <Aside onLogout={onLogout} />
    <div className=" flex flex-col justify-center items-center w-full">
      <h2>Create Task</h2>
    </div>
  </div>
  )
}

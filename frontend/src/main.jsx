import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import ErrorView from "./Views/ErrorView";
import App from "./App";
import RegisterView from "./Views/RegisterView";
import ForgotView from "./Views/ForgotView";
import CreateGroupView from "./Views/createGroupView";
import GroupView from "./Views/GroupView";
import CreateTaskView from "./Views/createTaskView";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorView />,
	},
	{
		path: "/register",
		element: <RegisterView />,
		errorElement: <ErrorView />,
	},
	{
		path: "/forgotPassword",
		element: <ForgotView />,
		errorElement: <ErrorView />,
	},
	{
		path: "/CreateGroup",
		element: <CreateGroupView />,
		errorElement: <ErrorView />,
	},
	{
		path: "/CreateTask",
		element: <CreateTaskView />,
		errorElement: <ErrorView />,
	},
	{
		path: "/group/:groupId",
		element: <GroupView />,
		errorElement: <ErrorView />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CookiesProvider>
			<RecoilRoot>
				<RouterProvider router={router} />
			</RecoilRoot>
		</CookiesProvider>
	</React.StrictMode>
);

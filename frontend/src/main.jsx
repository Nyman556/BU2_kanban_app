import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./Views/ErrorView";
import App from "./App";
import RegisterView from "./Views/RegisterView";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

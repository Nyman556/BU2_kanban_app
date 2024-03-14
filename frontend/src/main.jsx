import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import ErrorView from "./Views/ErrorView";
import App from "./App";
import RegisterView from "./Views/RegisterView";
import ForgotView from "./Views/ForgotView";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CookiesProvider>
			<RouterProvider router={router} />
		</CookiesProvider>
	</React.StrictMode>
);

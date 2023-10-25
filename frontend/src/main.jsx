import React from "react";
import ReactDOM from "react-dom/client";
import { ChatApp } from "./ChatApp.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChatApp />
		<ToastContainer />
	</BrowserRouter>
);

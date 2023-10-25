import React from "react";
import { ContentUsers } from "./components/ContentUsers";
import { ContentMessages } from "./components/ContentMessages";

export const ChatPage = () => {
	return (
		<section className="min-h-screen grid grid-cols-3 ">
			<ContentUsers />
			<ContentMessages />
		</section>
	);
};

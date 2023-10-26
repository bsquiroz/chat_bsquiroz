import React from "react";
import { useContextChatApp } from "../../../../context/useContext";
import { FormSendMessage } from "../FormSendMessage";
import { Messages } from "../Messages";

export const ContentMessages = () => {
	const {
		chatState: { activeChat },
	} = useContextChatApp().useChat;

	return activeChat ? (
		<section className="flex-1 flex flex-col md:col-span-2">
			<Messages />
			<FormSendMessage />
		</section>
	) : (
		<section className="flex-1 flex justify-center items-center px-5 md:col-span-2">
			<p className="dark:bg-slate-700 bg-emerald-300 p-5 rounded-lg text-center w-full font-bold select-none">
				Select a chat to talk
			</p>
		</section>
	);
};

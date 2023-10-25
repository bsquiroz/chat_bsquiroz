import React from "react";
import { useContextChatApp } from "../../../../context/useContext";
import { FormSendMessage } from "../FormSendMessage";
import { Messages } from "../Messages";

export const ContentMessages = () => {
	const {
		chatState: { activeChat },
	} = useContextChatApp().useChat;

	return (
		<section className="col-span-2 flex flex-col">
			{activeChat ? (
				<>
					<Messages />
					<FormSendMessage />
				</>
			) : (
				<div className="min-h-full flex justify-center items-center px-5">
					<p className="dark:bg-slate-700 bg-emerald-300 p-5 rounded-lg text-center w-full font-bold select-none">
						Select a chat to talk
					</p>
				</div>
			)}
		</section>
	);
};

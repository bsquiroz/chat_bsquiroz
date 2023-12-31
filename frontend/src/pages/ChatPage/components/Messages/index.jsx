import React from "react";
import { MessageFrom } from "../MessageFrom";
import { MessageFor } from "../MessageFor";
import { useContextChatApp } from "../../../../context/useContext";

export const Messages = () => {
	const {
		useChat: {
			chatState: { messages },
		},
		useAuthContext: {
			auth: { uid },
		},
	} = useContextChatApp();

	return (
		<section
			id="contentMessages"
			className="p-5 flex flex-col gap-2 flex-1 max-h-contentMessages scroll-style overflow-y-auto md:border-l-2 md:border-b-2 md:dark:border-slate-400 md:border-emerald-500"
		>
			{messages.map((msg) =>
				msg.for === uid ? (
					<MessageFrom key={msg._id} msg={msg} />
				) : (
					<MessageFor key={msg._id} msg={msg} />
				)
			)}
		</section>
	);
};

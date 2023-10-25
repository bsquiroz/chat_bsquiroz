import React from "react";
import { useContextChatApp } from "../../../../context/useContext";
import { chatTypes } from "../../../../context/chat/chatTypes";
import { fetchWitchToken } from "../../../../helper/fetch";
import { scrollToBottom } from "../../../../helper/scrollToBottom";

export const User = ({ user }) => {
	const {
		chatState: { activeChat },
		dispatch,
	} = useContextChatApp().useChat;

	const handleClickGetUser = async (uid) => {
		dispatch({
			type: chatTypes.GET_CHAT_USER,
			payload: uid,
		});

		const { messages } = await fetchWitchToken(`messages/${uid}`);

		dispatch({
			type: chatTypes.GET_MESSAGES,
			payload: messages,
		});

		scrollToBottom("contentMessages");
	};

	return (
		<article
			onClick={() => handleClickGetUser(user.uid)}
			className={`flex items-center gap-5 px-5 py-2 cursor-pointer border-b-2 last:border-b-0 dark:hover:bg-slate-700 hover:bg-emerald-400 ${
				activeChat === user.uid
					? "dark:bg-slate-600 bg-emerald-300"
					: "dark:bg-slate-800 bg-emerald-500"
			}`}
		>
			<img className="w-[5rem]" src="/user-profile.png" alt="image" />
			<div>
				<h3 className="font-bold">{user.name}</h3>
				<p>
					{user.online ? (
						<strong className="text-green-500">Online</strong>
					) : (
						<strong className="text-red-500">Offline</strong>
					)}
				</p>
			</div>
		</article>
	);
};

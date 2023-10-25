import React, { useState } from "react";
import { showToast } from "../../../../helper/toast";
import { useContextChatApp } from "../../../../context/useContext";

export const FormSendMessage = () => {
	const [message, setMessage] = useState("");

	const {
		useAuthContext: { auth },
		useChat: { chatState },
		useSocketApp: { socket },
	} = useContextChatApp();

	const handleForm = (e) => {
		e.preventDefault();

		if (!message)
			return showToast(
				"🤔 a message with nothing? really?",
				"warning",
				"top-right"
			);

		const newMessage = {
			from: auth.uid,
			for: chatState.activeChat,
			message: message,
		};

		socket.emit("personalMessage", newMessage);

		setMessage("");
	};

	return (
		<form onSubmit={handleForm} className="flex gap-5 h-[4rem]  p-3">
			<input
				type="text"
				className="flex-1 p-2 outline-none rounded-lg text-black placeholder:text-slate-800 font-semibold"
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				value={message}
				placeholder="Hi... 🖐🏽"
			/>
			<input
				type="submit"
				value="send"
				className="px-10 cursor-pointer dark:bg-emerald-200 bg-slate-900 dark:text-slate-900 text-emerald-200 font-bold rounded-lg"
			/>
		</form>
	);
};

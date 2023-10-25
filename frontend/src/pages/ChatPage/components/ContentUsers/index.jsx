import React from "react";
import { User } from "../User";
import { useContextChatApp } from "../../../../context/useContext";
import { chatTypes } from "../../../../context/chat/chatTypes";

export const ContentUsers = () => {
	const { auth, logout } = useContextChatApp().useAuthContext;
	const {
		chatState: { users },
		dispatch,
	} = useContextChatApp().useChat;

	const handleLogout = () => {
		logout();
		dispatch({
			type: chatTypes.RESET_CHAT,
		});
	};

	return (
		<section className="block col-span-1">
			<header className="h-[4rem] dark:bg-slate-900 bg-emerald-600 p-5 flex justify-between items-center">
				<p className="font-bold">{auth.name}</p>
				<button
					onClick={handleLogout}
					className="bg-red-500 text-white border-2 border-red-500 py-1 px-8 rounded-lg hover:bg-transparent hover:text-red-400"
				>
					Salir
				</button>
			</header>

			<section className="dark:bg-slate-900 overflow-y-auto max-h-contentUsers scroll-style">
				{users
					.filter((user) => user.uid !== auth.uid)
					.map((user) => (
						<User key={user.uid} user={user} />
					))}
			</section>
		</section>
	);
};

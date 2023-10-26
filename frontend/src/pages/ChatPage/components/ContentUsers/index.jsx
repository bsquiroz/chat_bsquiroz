import React from "react";
import { User } from "../User";
import { useContextChatApp } from "../../../../context/useContext";
import { chatTypes } from "../../../../context/chat/chatTypes";

export const ContentUsers = () => {
	const {
		useAuthContext: { auth, logout },
		useChat: {
			chatState: { users, showListUser },
			dispatch,
		},
	} = useContextChatApp();

	const handleLogout = () => {
		logout();
		dispatch({
			type: chatTypes.RESET_CHAT,
		});
	};

	const handleShowList = () => {
		dispatch({
			type: chatTypes.SHOW_LIST_USER,
		});
	};

	return (
		<section className="md:col-span-1">
			<header className="h-[4rem] dark:bg-slate-900 bg-emerald-600 p-5 flex justify-between items-center">
				<p className="font-bold">{auth.name}</p>
				<button
					onClick={handleShowList}
					className="bg-blue-500 text-white p-2 rounded-lg md:hidden"
				>
					{showListUser ? "Cerrar" : "Ver personas"}
				</button>
				<button
					onClick={handleLogout}
					className="bg-red-500 text-white border-2 border-red-500 py-1 px-8 rounded-lg hover:bg-transparent hover:text-red-400"
				>
					Salir
				</button>
			</header>

			<section
				className={`${
					showListUser ? "block" : "hidden"
				} dark:bg-slate-900 overflow-y-auto max-h-contentUsers scroll-style md:block`}
			>
				{users
					.filter((user) => user.uid !== auth.uid)
					.map((user) => (
						<User key={user.uid} user={user} />
					))}
			</section>
		</section>
	);
};

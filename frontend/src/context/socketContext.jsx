import React, { useEffect } from "react";
import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
import { useContextChatApp } from "./useContext";
import { chatTypes } from "./chat/chatTypes";
import { scrollToBottom } from "../helper/scrollToBottom";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { auth } = useContextChatApp().useAuthContext;
	const { dispatch } = useContextChatApp().useChat;
	const { socket, online, connnectSocket, disconnectSocket } = useSocket(
		"http://localhost:3001"
	);

	useEffect(() => {
		if (auth.logged) {
			connnectSocket();
		}
	}, [auth]);

	useEffect(() => {
		if (!auth.logged) {
			disconnectSocket();
		}
	}, [auth]);

	useEffect(() => {
		socket?.on("userList", (users) =>
			dispatch({
				type: chatTypes.LOAD_USERS,
				payload: users,
			})
		);
	}, [socket, dispatch]);

	useEffect(() => {
		socket?.on("personalMessage", (message) => {
			dispatch({
				type: chatTypes.GET_MESSAGE,
				payload: message,
			});
			scrollToBottom("contentMessages", true);
		});
	}, [socket, dispatch]);

	const store = {
		socket,
		online,
	};

	return (
		<SocketContext.Provider value={store}>
			{children}
		</SocketContext.Provider>
	);
};

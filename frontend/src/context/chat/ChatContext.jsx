import { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";

export const ChatContext = createContext();

const initialState = {
	uid: "",
	activeChat: null,
	users: [],
	messages: [],
};

export const ChatProvider = ({ children }) => {
	const [chatState, dispatch] = useReducer(chatReducer, initialState);

	const store = {
		chatState,
		dispatch,
	};

	return (
		<ChatContext.Provider value={store}>{children}</ChatContext.Provider>
	);
};

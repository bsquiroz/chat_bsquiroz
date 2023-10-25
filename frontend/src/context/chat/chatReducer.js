import { chatTypes } from "./chatTypes";

export const chatReducer = (state, action) => {
	switch (action.type) {
		case chatTypes.LOAD_USERS:
			return {
				...state,
				users: [...action.payload],
			};

		case chatTypes.GET_CHAT_USER:
			// if (action.payload === state.activeChat) return;
			return {
				...state,
				activeChat: action.payload,
				messages: [],
			};

		case chatTypes.GET_MESSAGE:
			if (
				state.activeChat === action.payload.from ||
				state.activeChat === action.payload.for
			) {
				return {
					...state,
					messages: [...state.messages, action.payload],
				};
			}
			return state;

		case chatTypes.GET_MESSAGES:
			return {
				...state,
				messages: [...state.messages, ...action.payload],
			};

		case chatTypes.RESET_CHAT:
			return {
				uid: "",
				activeChat: null,
				users: [],
				messages: [],
			};

		default:
			return state;
	}
};

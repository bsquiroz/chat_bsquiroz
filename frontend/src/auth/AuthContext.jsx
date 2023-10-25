import { useCallback } from "react";

import { createContext, useState } from "react";
import { fetchAnyToken, fetchWitchToken } from "../helper/fetch";

export const AuthContext = createContext();

const initialState = {
	uid: null,
	checking: true,
	logged: false,
	name: null,
	email: null,
};

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);

	const login = async ({ email, password }) => {
		const res = await fetchAnyToken(
			"auth/login",
			{ email, password },
			"POST"
		);

		if (res.ok) {
			localStorage.setItem("token", res.token);

			setAuth({
				uid: res.user.uid,
				checking: false,
				logged: true,
				name: res.user.name,
				email: res.user.email,
			});
		}

		return res;
	};

	const register = async ({ name, email, password }) => {
		const res = await fetchAnyToken(
			"auth/register",
			{ name, email, password },
			"POST"
		);

		if (res.ok) {
			localStorage.setItem("token", res.token);

			setAuth({
				uid: res.user.uid,
				checking: false,
				logged: true,
				name: res.user.name,
				email: res.user.email,
			});
		}

		return res;
	};

	const verifyToken = useCallback(async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
				name: null,
				email: null,
			});

			return false;
		}

		const res = await fetchWitchToken("/auth/renow");

		if (!res.ok) {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
				name: null,
				email: null,
			});

			return false;
		}

		localStorage.setItem("token", res.token);

		setAuth({
			uid: res.user.uid,
			checking: false,
			logged: true,
			name: res.user.name,
			email: res.user.email,
		});

		return true;
	}, []);

	const logout = () => {
		localStorage.removeItem("token");

		setAuth({
			uid: null,
			checking: false,
			logged: false,
			name: null,
			email: null,
		});
	};

	const store = { login, logout, register, verifyToken, auth };

	return (
		<AuthContext.Provider value={store}>{children}</AuthContext.Provider>
	);
};

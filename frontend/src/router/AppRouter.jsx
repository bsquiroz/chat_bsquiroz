import React, { useEffect } from "react";
import { useContextChatApp } from "../context/useContext";

import { Route, Routes } from "react-router-dom";
import { Loader } from "../components";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
	const { verifyToken, auth } = useContextChatApp().useAuthContext;

	useEffect(() => {
		verifyToken();
	}, [verifyToken]);

	if (auth.checking) {
		return <Loader />;
	}

	return (
		<Routes>
			<Route
				path="/auth/*"
				element={<PublicRouter isAuthenticated={auth.logged} />}
			/>
			<Route
				path="/chat"
				element={<PrivateRouter isAuthenticated={auth.logged} />}
			/>
		</Routes>
	);
};

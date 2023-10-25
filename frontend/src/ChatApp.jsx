import { AuthProvider } from "./auth/AuthContext";
import { ChatProvider } from "./context/chat/ChatContext";
import { SocketProvider } from "./context/socketContext";

import { AppRouter } from "./router/AppRouter";
import { Container } from "./components";

export const ChatApp = () => {
	return (
		<ChatProvider>
			<AuthProvider>
				<SocketProvider>
					<Container>
						<AppRouter />
					</Container>
				</SocketProvider>
			</AuthProvider>
		</ChatProvider>
	);
};

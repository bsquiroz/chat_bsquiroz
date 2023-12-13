import { AuthProvider } from "./auth/AuthContext";
import { ChatProvider } from "./context/chat/ChatContext";
import { SocketProvider } from "./context/socketContext";

import { AppRouter } from "./router/AppRouter";
import { Container, Tutorial } from "./components";

export const ChatApp = () => {
	return (
		<ChatProvider>
			<AuthProvider>
				<SocketProvider>
					<Container>
						<AppRouter />
						<Tutorial />
					</Container>
				</SocketProvider>
			</AuthProvider>
		</ChatProvider>
	);
};

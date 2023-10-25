import { animateScroll } from "react-scroll";

export function scrollToBottom(id, animate) {
	setTimeout(() => {
		animateScroll.scrollToBottom({
			containerId: id,
			duration: animate ? 250 : 0,
		});
	});
}

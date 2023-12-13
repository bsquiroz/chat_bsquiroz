import React from "react";
import { useContextChatApp } from "../../context/useContext";
import { chatTypes } from "../../context/chat/chatTypes";

export const Tutorial = () => {
	const {
		useChat: {
			chatState: { showTutorial },
			dispatch,
		},
	} = useContextChatApp();

	const handleVisible = showTutorial
		? "opacity-1 visible"
		: "opacity-0 invisible";

	return (
		<section
			className={`dark:bg-slate-900/80 h-screen w-screen fixed top-0 left-0 flex items-center justify-center transition-all duration-500 ${handleVisible}`}
		>
			<div className="relative">
				<span
					className="absolute -top-10 -right-5 text-2xl cursor-pointer text-red-500 font-bold"
					onClick={() => {
						dispatch({
							type: chatTypes.SHOW_TUTORIAL,
						});
					}}
				>
					x
				</span>
				<div className="w-[350px] h-[250px] sm:w-[560px] sm:h-[315px]">
					<iframe
						width={"100%"}
						height={"100%"}
						src="https://www.youtube.com/embed/xeSIIB17jwc?si=_LYH3TniSQaneCeP"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</section>
	);
};

import React from "react";
import { formatDate } from "../../../../helper/formatDate";

export const MessageFrom = ({ msg }) => {
	return (
		<article className="p-2 flex items-center gap-5">
			<img className="w-[3rem]" src="/user-profile.png" alt="image" />
			<div>
				<p className="dark:bg-slate-700 bg-emerald-300 p-1 rounded-md">
					{msg.message}
				</p>
				<small>{formatDate(msg.createdAt)}</small>
			</div>
		</article>
	);
};

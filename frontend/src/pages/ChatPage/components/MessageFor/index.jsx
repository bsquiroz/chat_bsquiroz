import React from "react";
import { formatDate } from "../../../../helper/formatDate";

export const MessageFor = ({ msg }) => {
	return (
		<article className="p-2 flex flex-col gap-1 items-end">
			<p className=" p-1 rounded-md">{msg.message}</p>
			<small className="px-5">{formatDate(msg.createdAt)}</small>
		</article>
	);
};

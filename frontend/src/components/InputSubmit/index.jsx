import React from "react";

export const InputSubmit = ({ text }) => {
	return (
		<input
			className="p-2 cursor-pointer rounded-sm font-bold uppercase letter tracking-widest dark:bg-slate-900 bg-emerald-300"
			type="submit"
			value={text}
		/>
	);
};

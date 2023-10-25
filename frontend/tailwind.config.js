/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class"],
	theme: {
		extend: {
			maxHeight: {
				contentUsers: "calc(100vh - 4rem)",
				contentMessages: "calc(100vh - 4rem)",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#F4F4F4",
				black: "#0C0D0E",
				accent: "#34B4C7",
				accentDark: "#278391",

				primaryBg: "#25292F",
				secondaryBg: "#31353D",
				tertiaryBg: "#27292d",
			},
		},
	},
	plugins: [],
};

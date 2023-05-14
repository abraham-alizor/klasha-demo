/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				rectangle: "url('/src/assets/icons/rectangle.svg')",
			},
		},
	},
	plugins: [],
};

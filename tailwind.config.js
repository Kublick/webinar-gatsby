/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'rgb(231, 64, 123)',
				},
				whats: {
					DEFAULT: '#25d366',
				},
				telegram: {
					DEFAULT: '#229ED9',
				},
			},
		},
	},
	plugins: [],
};

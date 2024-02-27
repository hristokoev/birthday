/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				"gradient": "gradient 0.3s ease-in-out",
			},
			keyframes: {
				"gradient": {
					to: { "background-position": "200% center" },
				},
			},
		},
	},
	plugins: [],
}

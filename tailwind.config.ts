import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [],
	theme: {
		container: { center: true, screens: { "2xl": "96em" } },
		extend: {
			colors: {
				primary: { DEFAULT: "#674eff", foreground: "#f8f7ff" },
				secondary: { DEFAULT: "#f8f7ff", foreground: "#674eff" },
				tertiary: { DEFAULT: "#181823", foreground: "#f8f7ff" },
			},
		},
		screens: {
			sm: "32em",
			md: "48em",
			lg: "64em",
			xl: "80em",
			"2xl": "96em",
		},
	},
};
export default config;

import jerinsParlour from "@/assets/jerins-parlour.png";
import bistroBoss from "@/assets/bistro-boss-restaurant.png";
import colorTheGrid from "@/assets/color-the-grid.png";

export const projects = [
	{
		name: "Jerin's Parlour",
		description:
			"This is a website of an imaginary parlour named Jerins Parlour. You can book an appointment and pay for that booking here.",
		github: "https://github.com/genuinestalwart/jerins-parlour-frontend",
		image: jerinsParlour.src,
		livelink: "https://gs-jerins-parlour-frontend.vercel.app/",
		tags: [
			{ cs: "blackAlpha", text: "Next.js" },
			{ cs: "purple", text: "React Redux" },
			{ cs: "cyan", text: "TailwindCSS" },
			{ cs: "blue", text: "TypeScript" },
			{ cs: "blackAlpha", text: "ShadCN UI" },
			{ cs: "yellow", text: "Firebase" },
			{ cs: "purple", text: "Stripe" },
			{ cs: "green", text: "Node.js" },
			{ cs: "blackAlpha", text: "Express.js" },
			{ cs: "green", text: "MongoDB" },
		],
	},
	{
		name: "Bistro Boss",
		description:
			"This is a website of an imaginary restaurant named Bistro Boss. You can order food from here or book a table at the restaurant and pay for your orders and bookings.",
		github: "https://github.com/genuinestalwart/bistro-boss-frontend",
		image: bistroBoss.src,
		livelink: "https://gs-bistro-boss-restaurant.web.app/",
		tags: [
			{ cs: "cyan", text: "React.js" },
			{ cs: "red", text: "React Router" },
			{ cs: "cyan", text: "TailwindCSS" },
			{ cs: "blue", text: "Material UI" },
			{ cs: "yellow", text: "Firebase" },
			{ cs: "purple", text: "Stripe" },
			{ cs: "green", text: "Node.js" },
			{ cs: "blackAlpha", text: "Express.js" },
			{ cs: "pink", text: "JWT" },
			{ cs: "green", text: "MongoDB" },
		],
	},
	{
		name: "Color The Grid",
		description:
			"The idea is very simple. You will color the cells to draw anything as you like, then hit the download button at the top right corner. Boom! 💥",
		github: "https://github.com/genuinestalwart/color-the-grid",
		image: colorTheGrid.src,
		livelink: "https://genuinestalwart.github.io/color-the-grid/",
		tags: [
			{ cs: "orange", text: "HTML" },
			{ cs: "blue", text: "CSS" },
			{ cs: "yellow", text: "JavaScript" },
			{ cs: "purple", text: "Bootstrap" },
			{ cs: "cyan", text: "jQuery" },
		],
	},
];

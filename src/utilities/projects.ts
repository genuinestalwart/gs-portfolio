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
			{ bg: "blackAlpha.500", text: "Next.js" },
			{ bg: "purple.500", text: "React Redux" },
			{ bg: "cyan.500", text: "TailwindCSS" },
			{ bg: "blue.500", text: "TypeScript" },
			{ bg: "blackAlpha.500", text: "ShadCN UI" },
			{ bg: "yellow.500", text: "Firebase" },
			{ bg: "purple.500", text: "Stripe" },
			{ bg: "green.500", text: "Node.js" },
			{ bg: "blackAlpha.500", text: "Express.js" },
			{ bg: "green.500", text: "MongoDB" },
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
			{ bg: "cyan.500", text: "React.js" },
			{ bg: "red.500", text: "React Router" },
			{ bg: "cyan.500", text: "TailwindCSS" },
			{ bg: "blue.500", text: "Material UI" },
			{ bg: "yellow.500", text: "Firebase" },
			{ bg: "purple.500", text: "Stripe" },
			{ bg: "green.500", text: "Node.js" },
			{ bg: "blackAlpha.500", text: "Express.js" },
			{ bg: "pink.500", text: "JWT" },
			{ bg: "green.500", text: "MongoDB" },
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
			{ bg: "orange.500", text: "HTML" },
			{ bg: "blue.500", text: "CSS" },
			{ bg: "yellow.500", text: "JavaScript" },
			{ bg: "purple.500", text: "Bootstrap" },
			{ bg: "cyan.500", text: "jQuery" },
		],
	},
];

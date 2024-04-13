import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/components/Providers";

const saira = Saira({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-saira",
	subsets: ["latin"],
	style: ["italic", "normal"],
	display: "swap",
});

export const metadata: Metadata = {
	description:
		"My name is Nasif Rahman and I'm a MERN stack developer from Bangladesh.",
	keywords: ["Nasif", "Rahman", "MERN", "Developer"],
	metadataBase: new URL("https://nasif-rahman.vercel.app"),
	openGraph: { images: "/logo.png" },
	title: "Nasif Rahman | Portfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className={saira.variable} lang='en'>
			<body className='bg-tertiary'>
				<div className='container'>
					<Providers>{children}</Providers>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;

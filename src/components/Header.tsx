"use client";
import {
	Box,
	Center,
	Container,
	IconButton,
	Tab,
	TabList,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
const navLinks = ["About", "Projects", "Skills", "Contact"];
const selected = { bg: "primary.main", color: "secondary.main" };

const Header = ({ index, setIndex }: { index: number; setIndex: Function }) => {
	const [open, setOpen] = useState(false);

	return (
		<Container as='header' h={20}>
			<Box alignItems='center' display={["flex", "none"]} h='100%'>
				<IconButton
					_active={{ bg: "secondary.main" }}
					aria-label='navbar menu'
					borderColor='currentcolor'
					color='secondary.main'
					_hover={{ color: "primary.main" }}
					icon={<Menu />}
					onClick={() => setOpen(true)}
					variant='outline'
				/>
			</Box>

			<Center as='nav' display={["none", "flex"]} h='100%'>
				<TabList w='100%'>
					{navLinks.map((item, i) => (
						<Tab
							color={{ color: "secondary.main" }}
							_hover={{ color: "primary.main" }}
							key={i}
							_selected={selected}>
							{item}
						</Tab>
					))}
				</TabList>
			</Center>

			<Sidebar
				index={index}
				open={open}
				setOpen={setOpen}
				setIndex={setIndex}
			/>
		</Container>
	);
};

export default Header;

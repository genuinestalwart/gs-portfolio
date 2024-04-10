"use client";
import {
	Box,
	Center,
	Container,
	Hide,
	IconButton,
	Show,
	Tab,
	TabList,
} from "@chakra-ui/react";
import Sidebar from "@/components/shared/Sidebar";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
const navLinks = ["About", "Projects", "Skills", "Contact"];
const selected = { bg: "primary.500", color: "secondary.main" };

const Header = ({ index, setIndex }: { index: number; setIndex: Function }) => {
	const [open, setOpen] = useState(false);

	return (
		<Container as='header' h={20}>
			<Hide above='sm'>
				<Box alignItems='center' display='flex' h='100%'>
					<IconButton
						_active={{ bg: "primary.100" }}
						aria-label='navbar menu'
						borderColor='currentcolor'
						color='primary.main'
						_hover={{ bg: "primary.50" }}
						icon={<LuMenu />}
						onClick={() => setOpen(true)}
						variant='outline'
					/>
				</Box>
			</Hide>

			<Show above='sm'>
				<Center as='nav' display='flex' h='100%'>
					<TabList w='100%'>
						{navLinks.map((item, i) => (
							<Tab
								color='secondary.main'
								_hover={{ color: "primary.main" }}
								_selected={selected}
								key={i}>
								{item}
							</Tab>
						))}
					</TabList>
				</Center>
			</Show>

			<Hide above='sm'>
				<Sidebar
					index={index}
					open={open}
					setOpen={setOpen}
					setIndex={setIndex}
				/>
			</Hide>
		</Container>
	);
};

export default Header;

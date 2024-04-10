import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	VStack,
} from "@chakra-ui/react";
const navLinks = ["About", "Projects", "Skills", "Contact"];

interface Props {
	index: number;
	open: boolean;
	setIndex: Function;
	setOpen: Function;
}

const Sidebar: React.FC<Props> = ({ index, open, setIndex, setOpen }) => {
	return (
		<Drawer isOpen={open} placement='left' onClose={() => setOpen(false)}>
			<DrawerOverlay />

			<DrawerContent bg='tertiary.main'>
				<DrawerCloseButton />

				<DrawerBody mt={12}>
					<VStack as='nav'>
						{navLinks.map((item, i) => (
							<Button
								_active={{
									bg: "primary.100",
									color: "primary.main",
								}}
								bg={i === index ? "primary.500" : "transparent"}
								color='secondary.main'
								_hover={
									i === index
										? { bg: "primary.600" }
										: {
												bg: "primary.50",
												color: "primary.main",
										  }
								}
								key={i}
								onClick={() => {
									if (i !== index) {
										setIndex(i);
										setOpen(false);
									}
								}}
								variant={i === index ? "solid" : "ghost"}
								w='100%'>
								{item}
							</Button>
						))}
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default Sidebar;

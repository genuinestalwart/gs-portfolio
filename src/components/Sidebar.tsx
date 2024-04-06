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
const active = { bg: "primary.600", color: "secondary.main" };
const notActive = { bg: "transparent", color: "primary.main" };

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
					<VStack>
						{navLinks.map((item, i) => (
							<Button
								bg={i === index ? "primary.500" : "transparent"}
								color='secondary.main'
								_hover={i === index ? active : notActive}
								key={i}
								onClick={() => {
									if (i !== index) {
										setIndex(i);
										setOpen(false);
									}
								}}
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

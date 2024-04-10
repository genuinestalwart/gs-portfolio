import { ScaleFade, TabPanel } from "@chakra-ui/react";

const ContactTab = () => {
	return (
		<TabPanel as='section' minH='calc(100vh - 5rem)'>
			<ScaleFade in initialScale={0.5}>
				Contact
			</ScaleFade>
		</TabPanel>
	);
};

export default ContactTab;

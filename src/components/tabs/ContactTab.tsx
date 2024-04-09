import { ScaleFade, TabPanel } from "@chakra-ui/react";

const ContactTab = () => {
	return (
		<TabPanel as='section'>
			<ScaleFade in initialScale={0.5}>
				Contact
			</ScaleFade>
		</TabPanel>
	);
};

export default ContactTab;

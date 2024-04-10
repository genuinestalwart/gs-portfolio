import { ScaleFade, TabPanel } from "@chakra-ui/react";

const SkillsTab = () => {
	return (
		<TabPanel as='section' minH='calc(100vh - 5rem)'>
			<ScaleFade in initialScale={0.5}>
				Skills
			</ScaleFade>
		</TabPanel>
	);
};

export default SkillsTab;

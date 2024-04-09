import { ScaleFade, TabPanel } from "@chakra-ui/react";

const SkillsTab = () => {
	return (
		<TabPanel as='section'>
			<ScaleFade in initialScale={0.5}>
				Skills
			</ScaleFade>
		</TabPanel>
	);
};

export default SkillsTab;
